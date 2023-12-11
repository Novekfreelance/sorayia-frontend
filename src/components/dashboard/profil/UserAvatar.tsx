import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type UserAvatarProps = {
  className?: string;
};

const UserAvatar = ({ className }: UserAvatarProps) => {
  return (
    <Avatar className={`${className}`}>
      {/* <AvatarImage src="" /> */}
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
