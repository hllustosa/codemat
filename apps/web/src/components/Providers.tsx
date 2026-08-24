"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, App as AntApp, theme } from "antd";
import ptBR from "antd/locale/pt_BR";
import { AuthProvider } from "./AuthProvider";

const brandTheme = {
  token: {
    colorPrimary: "#313B61",
    colorInfo: "#313B61",
    colorSuccess: "#5F6888",
    colorWarning: "#FFC15E",
    colorError: "#C1121F",
    borderRadius: 8,
    fontFamily:
      '"DM Sans", "Segoe UI", system-ui, -apple-system, sans-serif',
    colorBgLayout: "#F5F3F5",
    colorText: "#313B61",
    colorLink: "#313B61",
  },
  algorithm: theme.defaultAlgorithm,
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider locale={ptBR} theme={brandTheme}>
        <AntApp>
          <AuthProvider>{children}</AuthProvider>
        </AntApp>
      </ConfigProvider>
    </AntdRegistry>
  );
}
