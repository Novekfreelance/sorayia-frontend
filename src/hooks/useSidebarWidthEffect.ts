"use client";
import useSidebarStore from "@/app/store/SidebarStore";
import { DEFAULT_SIDEBAR_WIDTH } from "@/constants/Sidebar/DefaultWidthConstant";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useSidebarWidthEffect = () => {
  const pathname = usePathname();
  const defaultSidebarWidth = DEFAULT_SIDEBAR_WIDTH;
  const { setSidebarWidth } = useSidebarStore();
  
  const profilPagePathname = "/dashboard/profil";
  const botPagePathname = "/dashboard/bot";

  const pathnameMatch = pathname === profilPagePathname || pathname === botPagePathname;
  useEffect(() => {
    if (pathnameMatch) {
      setSidebarWidth(90);
    } else {
      setSidebarWidth(defaultSidebarWidth);
    }
  }, [pathnameMatch,defaultSidebarWidth,setSidebarWidth]);
};

export default useSidebarWidthEffect;
