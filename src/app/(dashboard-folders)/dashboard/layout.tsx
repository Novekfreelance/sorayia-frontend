"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { FC, ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="h-full-dvh flex w-full">
          <Sidebar />
          <section className="flex-1 bg-gray-50 overflow-y-auto">
            {children}
          </section>
        </main>
        <Toaster />
      </body>
    </html>
  );
};

export default DashboardLayout;
