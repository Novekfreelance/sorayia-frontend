"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useContentIsActive() {
  const pathname = usePathname();
  const [isContentActive, setIsContentActive] = useState(false);

  useEffect(() => {
    setIsContentActive(pathname.includes("/content"));
  }, [pathname]);

  return isContentActive;
}
