"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function useChatIsActive() {
  const pathname = usePathname();
  const [isChatActive, setIsChatActive] = useState(false);

  useEffect(() => {
    setIsChatActive(pathname.includes("/chat"));
  }, [pathname]);

  return isChatActive;
}
