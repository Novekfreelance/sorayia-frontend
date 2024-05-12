// GetChatNewNameStore.ts

import { create } from "zustand";

interface ChatNameStore {
  chatName: string;
  setChatName: (newData: string) => void;
}

const useGetChatNameStore = create<ChatNameStore>((set) => {
  const storedChatName =
    typeof window !== "undefined" ? localStorage.getItem("chatName") || "" : "";

  return {
    chatName: storedChatName,
    setChatName: (newData: string) => {
      localStorage.setItem("chatName", newData);
      set({ chatName: newData });
    },
  };
});

export default useGetChatNameStore;
