"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import useUserStore from "@/app/store/AuthStore";


type UserAvatarProps = {
  className?: string;
};

const UserAvatar = ({ className }: UserAvatarProps) => {
  const user = useUserStore((state) => state.user);
  return (
    <Avatar className={`${className}`}>
      {/* <AvatarImage src="" /> */}
      <AvatarFallback>
        {user && user.username.slice(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
