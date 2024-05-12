"use client";
import useGetContentNameStore from "@/store/GetContentNameStore";
import { useEffect, useState } from "react";

const FolderTitle = () => {
  const ContentName = useGetContentNameStore((state) => state.contentName);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <h3 className="text-xl-500 text-primary">
      {isClient ? <>{ContentName}</> : "Folder"}
    </h3>
  );
};

export default FolderTitle;
