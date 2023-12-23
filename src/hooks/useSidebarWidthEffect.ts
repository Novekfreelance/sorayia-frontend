"use client";
import useSidebarStore from "@/app/store/SidebarStore";
import { DEFAULT_SIDEBAR_WIDTH } from "@/constants/Sidebar/DefaultWidthConstant";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


const useSidebarWidthEffect = () => {
  const pathname = usePathname();
  const defaultSidebarWidth = DEFAULT_SIDEBAR_WIDTH;
  const { setSidebarWidth } = useSidebarStore();
  const profilPageUrl = "/dashboard/profil";
  const botPageUrl = "/dashboard/bot";
  const settingsPageUrl = "/dashboard/setting";
  const contentUrlMatch = pathname.match(/\/dashboard\/content\/(.*)/);
  const contentUrl = contentUrlMatch ? contentUrlMatch[1] : null;

  const pathnameMatch = pathname === profilPageUrl || pathname === botPageUrl || contentUrl || pathname === settingsPageUrl;
  useEffect(() => {
    if (pathnameMatch) {
      setSidebarWidth(90);
    } else {
      setSidebarWidth(defaultSidebarWidth);
    }
  }, [pathnameMatch,defaultSidebarWidth,setSidebarWidth]);
};

export default useSidebarWidthEffect;
