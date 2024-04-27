// useUser.ts
import { useState } from "react";
import UserStore from "./AuthStore";

export function UserSession() {
  const [session, setSession] = useState(false);
  const user = UserStore().user;
  if (user) {
    setSession(true);
  } else {
    setSession(false);
  }
  return session;
}
