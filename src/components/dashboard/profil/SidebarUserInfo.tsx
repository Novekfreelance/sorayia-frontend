"use client";
import Link from "next/link";
import UserAvatar from "./UserAvatar";
import useSidebarStore from "@/app/store/SidebarStore";
import { usePathname } from "next/navigation";

const SidebarUserInfo = () => {
  const { sidebarWidth } = useSidebarStore();

  const isSidebarWidthLessThan100 = sidebarWidth < 100;
  const pathname = usePathname();

  const activeLinks = pathname === "/dashboard/profil";
  const isActive =
    "bg-primary-foreground before:absolute before:-translate-x-7 before:-translate-y-[11px] before:max-h-[63px] before:w-1 before:bg-white before:h-full before:z-[2]";

  return (
    <div
      className={`pl-7 py-3 hover:bg-primary-foreground w-full ${
        activeLinks ? isActive : "flex items-center gap-2"
      }`}
    >
      <Link href="/dashboard/profil">
        <UserAvatar />
      </Link>
      {isSidebarWidthLessThan100 ? null : (
        <p className="text-white">John Doe</p>
      )}
    </div>
  );
};

export default SidebarUserInfo;
