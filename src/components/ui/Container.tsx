import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={`${className} w-full max-w-[1200px] mx-auto pr-6 pl-6`}>{children}</div>
  );
};

export default Container;
