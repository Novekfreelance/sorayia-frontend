"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import UserStore from "@/store/AuthStore";
import { useEffect, useState } from "react";

type UserAvatarProps = {
  className?: string;
};

const UserAvatar = ({ className }: UserAvatarProps) => {
  // this is used to prevent hydration error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const user = UserStore((state) => state.user);
  return (
    <Avatar className={`${className}`}>
      {/* <AvatarImage src="" /> */}
      <AvatarFallback>
        {isClient && <>{user?.username.slice(0, 2).toUpperCase()}</>}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
