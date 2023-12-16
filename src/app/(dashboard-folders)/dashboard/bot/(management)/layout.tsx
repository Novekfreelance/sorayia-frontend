"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { ReactNode, FC } from "react";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
});

type BotManagementLayoutProps = {
  children: ReactNode;
};

const BotManagementLayout: FC<BotManagementLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="h-full-dvh flex w-full">
          <div className="w-20 bg-primary">
            <Link href="/dashboard/bot">bot</Link>
            <h2>Sidebar</h2>
          </div>
          <div className="flex-1 bg-gray-50">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default BotManagementLayout;
