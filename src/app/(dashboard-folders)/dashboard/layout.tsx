"use client";
import { Montserrat } from "next/font/google";
import { ReactNode, FC } from "react";
import Sidebar from "@/components/dashboard/Sidebar";


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
      <body className={montserrat.className}>
        <main className="h-full-dvh flex w-full">
          <Sidebar />
          <section className="flex-1 bg-gray-50">{children}</section>
        </main>
      </body>
    </html>
  );
};

export default DashboardLayout;
