"use client";
import { ReactNode, FC } from "react";

type BotLayoutProps = {
  children: ReactNode;
};

const BotLayout: FC<BotLayoutProps> = ({ children }) => {
  return (
      <div>{children}</div>
  );
};

export default BotLayout;
