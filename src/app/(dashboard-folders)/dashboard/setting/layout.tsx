"use client";
import { DataUsageIcon, UserIcon } from "@/components/icons/SvgIcons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

type SettingsLayoutProps = {
  children: ReactNode;
};

const Links = [
  {
    text: "Users",
    href: "/dashboard/setting",
    icon: <UserIcon fill="#1D3E80" height={30} width={30} />,
  },
  {
    text: "Usages",
    href: "/dashboard/setting/usages",
    icon: <DataUsageIcon fill="#1D3E80" height={30} width={30} />,
  },
];

const SettingsLayout: FC<SettingsLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="w-full h-full p-8">
      <div className="flex justify-start items-center">
        <h1 className="text-3xl-600 text-black">Settings</h1>
      </div>
      <div className="flex items-center justify-start mt-3 pt-3 px-3 shadow rounded border-solid border border-shadowColor bg-white">
        <ul className="flex items-center gap-3">
          {Links.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <li
                key={index}
                className={cn("pb-1", {
                  "border-b-2 border-primary": isActive,
                })}
              >
                <Link
                  href={link.href}
                  className={cn("flex justify-center items-center gap-1")}
                >
                  {link.icon}
                  <span className="text-xl-400 text-black block h-[22px]">
                    {link.text}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full min-h-[82%] mt-4 mb-2 p-8 rounded border border-solid shadow border-shadowColor bg-white overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default SettingsLayout;
