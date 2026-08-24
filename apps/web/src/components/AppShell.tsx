"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Menu, Button, Space, Drawer, Grid } from "antd";
import {
  MenuOutlined,
  BookOutlined,
  CodeOutlined,
  FormOutlined,
  UserOutlined,
  HomeOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { LoginModal } from "./LoginModal";
import { siteConfig } from "@/lib/site";

const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

const items = [
  { key: "/", label: <Link href="/">Início</Link>, icon: <HomeOutlined /> },
  {
    key: "/classes",
    label: <Link href="/classes">Aulas</Link>,
    icon: <BookOutlined />,
  },
  {
    key: "/exercises",
    label: <Link href="/exercises">Exercícios</Link>,
    icon: <FormOutlined />,
  },
  {
    key: "/ide",
    label: <Link href="/ide">IDE</Link>,
    icon: <CodeOutlined />,
  },
  {
    key: "/about",
    label: <Link href="/about">Sobre</Link>,
    icon: <InfoCircleOutlined />,
  },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const screens = useBreakpoint();
  const { user, signOut, loading } = useAuth();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const selected =
    items.find((i) => i.key !== "/" && pathname.startsWith(i.key))?.key ||
    (pathname === "/" ? "/" : "");

  const menu = (
    <Menu
      mode={screens.md ? "horizontal" : "inline"}
      selectedKeys={[selected]}
      items={items}
      style={{ flex: 1, minWidth: 0, border: "none", background: "transparent" }}
      onClick={() => setOpen(false)}
    />
  );

  return (
    <Layout style={{ minHeight: "100vh", background: "var(--cm-bg)" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "var(--cm-primary)",
          position: "sticky",
          top: 0,
          zIndex: 50,
          paddingInline: screens.md ? 32 : 16,
          height: 64,
          lineHeight: "64px",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo-cm-branco.svg"
            alt={siteConfig.name}
            width={52}
            height={24}
            style={{ height: 24, width: "auto" }}
          />
        </Link>
        {screens.md ? (
          <div style={{ flex: 1, minWidth: 0 }} className="nav-menu-light">
            {menu}
          </div>
        ) : (
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: "#fff", fontSize: 20 }} />}
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          />
        )}
        <Space style={{ marginLeft: "auto" }}>
          {!loading && user ? (
            <>
              <Button type="link" style={{ color: "#fff" }} icon={<UserOutlined />}>
                <Link href="/profile" style={{ color: "#fff" }}>
                  {user.email?.split("@")[0] || "Perfil"}
                </Link>
              </Button>
              <Button onClick={() => signOut()}>Sair</Button>
            </>
          ) : (
            <Button
              style={{
                background: "var(--cm-accent)",
                borderColor: "var(--cm-accent)",
                color: "var(--cm-primary)",
                fontWeight: 600,
              }}
              onClick={() => setLoginOpen(true)}
            >
              Entrar
            </Button>
          )}
        </Space>
      </Header>

      <Drawer
        title="Menu"
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        {menu}
      </Drawer>

      <Content
        style={{
          width: "100%",
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
          background: "var(--cm-primary)",
          color: "var(--cm-accent)",
          padding: "14px 16px",
          height: "auto",
          minHeight: 56,
        }}
      >
        {siteConfig.name} ·{" "}
        <a
          href={siteConfig.githubRepo}
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--cm-accent)", textDecoration: "underline" }}
        >
          {siteConfig.projectName} no GitHub
        </a>{" "}
        · MIT
      </Footer>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </Layout>
  );
}
