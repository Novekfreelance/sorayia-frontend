"use client";
import { Montserrat } from "next/font/google";
import { ReactNode, FC } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
});

type DashboardFoldersLayoutProps = {
  children: ReactNode;
};

const DashboardFolderLayout: FC<DashboardFoldersLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
};

export default DashboardFolderLayout;
