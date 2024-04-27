"use client";
import { DEFAULT_SIDEBAR_WIDTH } from "@/constants/Sidebar/DefaultWidthConstant";
import useSidebarStore from "@/store/SidebarStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useSidebarWidthEffect = () => {
  const pathname = usePathname();
  const defaultSidebarWidth = DEFAULT_SIDEBAR_WIDTH;
  const { setSidebarWidth } = useSidebarStore();

  const pathnameMatch = [
    "/dashboard/profil",
    "/dashboard/bot",
    "/dashboard/avatar",
    pathname.match(/\/dashboard\/setting\/(.*)/),
    pathname.match(/\/dashboard\/content\/(.*)/),
  ].some((match) => match);

  useEffect(() => {
    const newSidebarWidth = pathnameMatch ? 90 : defaultSidebarWidth;
    setSidebarWidth(newSidebarWidth);
  }, [pathnameMatch, defaultSidebarWidth, setSidebarWidth]);
};
export default useSidebarWidthEffect;
