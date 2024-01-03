"use client";
import { Toaster } from "@/components/ui/toaster";
import { ReactNode, FC } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default AuthLayout;
