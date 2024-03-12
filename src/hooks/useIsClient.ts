"use client";
import { useEffect, useState } from "react";

const useIsClient = () => {
  // this is used to prevent hydration error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

	return isClient;
};

export default useIsClient;
