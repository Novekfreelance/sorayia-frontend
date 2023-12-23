import { ReactNode, FC } from "react";
import Sidebar from "@/components/dashboard/Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="h-full-dvh flex w-full">
          <Sidebar />
          <section className="flex-1 bg-gray-50 overflow-y-auto">{children}</section>
        </main>
      </body>
    </html>
  );
};

export default DashboardLayout;
