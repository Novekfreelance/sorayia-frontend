"use client";
import { Toaster } from "@/components/ui/toaster";
import { Montserrat } from "next/font/google";
import { ReactNode, FC } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
});

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default AuthLayout;
