import { ReactNode } from "react";

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
