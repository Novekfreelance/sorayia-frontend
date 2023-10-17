"use client";
import { Montserrat } from "next/font/google";
import { ReactNode, FC } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
});

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
};

export default DashboardLayout;
