"use client";

import { Modal, Form, Input, Button, Tabs, App, Space } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useAuth } from "./AuthProvider";
import { useState } from "react";

type Props = { open: boolean; onClose: () => void };

export function LoginModal({ open, onClose }: Props) {
  const { signIn, signUp, signInGoogle, resetPassword } = useAuth();
  const { message } = App.useApp();
  const [busy, setBusy] = useState(false);

  async function handle(
    action: () => Promise<void>,
    success: string
  ) {
    setBusy(true);
    try {
      await action();
      message.success(success);
      onClose();
    } catch (err) {
      message.error(err instanceof Error ? err.message : "Falha na autenticação");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Modal open={open} onCancel={onClose} footer={null} title="Entrar no Code & Mat" destroyOnHidden>
      <Tabs
        items={[
          {
            key: "login",
            label: "Login",
            children: (
              <Form
                layout="vertical"
                onFinish={(v) =>
                  handle(() => signIn(v.email, v.password), "Bem-vindo de volta!")
                }
              >
                <Form.Item name="email" label="E-mail" rules={[{ required: true, type: "email" }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="password" label="Senha" rules={[{ required: true }]}>
                  <Input.Password />
                </Form.Item>
                <Space orientation="vertical" style={{ width: "100%" }}>
                  <Button type="primary" htmlType="submit" loading={busy} block>
                    Entrar
                  </Button>
                  <Button
                    icon={<GoogleOutlined />}
                    loading={busy}
                    block
                    onClick={() => handle(() => signInGoogle(), "Login com Google")}
                  >
                    Google
                  </Button>
                </Space>
              </Form>
            ),
          },
          {
            key: "signup",
            label: "Criar conta",
            children: (
              <Form
                layout="vertical"
                onFinish={(v) =>
                  handle(() => signUp(v.email, v.password), "Conta criada!")
                }
              >
                <Form.Item name="email" label="E-mail" rules={[{ required: true, type: "email" }]}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Senha"
                  rules={[{ required: true, min: 6 }]}
                >
                  <Input.Password />
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={busy} block>
                  Cadastrar
                </Button>
              </Form>
            ),
          },
          {
            key: "reset",
            label: "Recuperar",
            children: (
              <Form
                layout="vertical"
                onFinish={(v) =>
                  handle(
                    () => resetPassword(v.email),
                    "E-mail de recuperação enviado"
                  )
                }
              >
                <Form.Item name="email" label="E-mail" rules={[{ required: true, type: "email" }]}>
                  <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={busy} block>
                  Enviar link
                </Button>
              </Form>
            ),
          },
        ]}
      />
    </Modal>
  );
}
