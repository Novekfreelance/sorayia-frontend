"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function useBotIsActive() {
  const pathname = usePathname();
  const [isBotActive, setIsBotActive] = useState(false);

  useEffect(() => {
    setIsBotActive(pathname.includes("/bot"));
  }, [pathname]);

  return isBotActive;
}