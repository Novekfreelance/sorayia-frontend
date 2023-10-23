"use client";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import { signIn } from "next-auth/react";

interface GoogleSignInButtonProps {
  children: ReactNode;
  className?: string;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({
  children,
  className,
}) => {
  const loginWithGoogle = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
  };
  return (
    <span
      onClick={loginWithGoogle}
      className={cn(
        "cursor-pointer rounded-[50%] w-12 h-12 bg-transparent border border-gray-200 flex items-center justify-center",
        className
      )}
    >
      {children}
    </span>
  );
};

export default GoogleSignInButton;
