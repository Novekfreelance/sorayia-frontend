"use client";
import Link from "next/link";
import SignOutBtn from "./SignOutBtn";
import UserAvatar from "./UserAvatar";
import useUserStore from "@/app/store/AuthStore";

const UserInfosCard = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="w-full flex justify-between items-center py-5 px-9 bg-primary">
      <div className="flex justify-center items-center gap-8">
        <UserAvatar className="w-40 h-40" />
        <div className="space-y-4">
          {user && <p className="text-white text-3xl-600">{user.username}</p>}
          <span className="text-xl-500 text-white block">
            Marketing manager
          </span>
          {user && (
            <Link
              href="#"
              className="underline underline-offset-2 text-base block text-white"
            >
              {user?.email}
            </Link>
          )}
        </div>
      </div>
      <div>
        <SignOutBtn />
      </div>
    </div>
  );
};

export default UserInfosCard;
