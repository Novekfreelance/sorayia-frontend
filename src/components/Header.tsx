import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Header = ({ className, children }: Props) => {
  return <header className={`w-full h-dvh ${className}`}>{children}</header>;
};

export default Header;
