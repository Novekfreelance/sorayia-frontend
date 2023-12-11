"use client"
import { SessionProvider as Provider } from "next-auth/react";
import { FC, ReactNode } from "react";

type SessionProviderProps = {
  children: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
