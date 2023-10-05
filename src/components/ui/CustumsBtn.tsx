import Link from "next/link";
import { ReactNode } from "react";

export const SocialLinkBtn = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <li
      className={`${className} rounded-[50%] w-10 h-10 bg-primary flex items-center justify-center`}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    </li>
  );
};

export const NavigationBtn = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <div
        className={`${className} slider-arrow filter drop-shadow-xl rounded-[50%] !w-[36px] !h-[36px] bg-gray-300 flex items-center justify-center`}
      >
        {children}
      </div>
    </>
  );
};
