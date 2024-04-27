import type { Bot, Chat, CreateChatContext } from "@/types/CreateChatContext";
import { create } from "zustand";

const CreateChatProcess = create<CreateChatContext>((set) => ({
  chat: {
    name: "",
  },
  bot: {
    id: "",
  },
  setBotId: (newBot: Bot) => set({ bot: newBot }),
  setChatName: (newChat: Chat) => set({ chat: newChat }),
}));

export default CreateChatProcess;
