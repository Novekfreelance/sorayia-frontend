"use client";
import { ReactNode, FC } from "react";

type forgotPasswordLayoutProps = {
  children: ReactNode;
};

const forgotPasswordLayout: FC<forgotPasswordLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default forgotPasswordLayout;
