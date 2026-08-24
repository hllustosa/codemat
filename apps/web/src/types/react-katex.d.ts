declare module "react-katex" {
  import type { ComponentType, ReactNode } from "react";

  export type KatexProps = {
    math?: string;
    children?: ReactNode;
    errorColor?: string;
    renderError?: (error: Error) => ReactNode;
  };

  export const InlineMath: ComponentType<KatexProps>;
  export const BlockMath: ComponentType<KatexProps>;
}
