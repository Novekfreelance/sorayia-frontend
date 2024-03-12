import type { Bot, Chat, CreateChatContext } from "@/types/CreateChatContext";
import { create } from "zustand";

const CreateChatProcess = create<CreateChatContext>((set) => ({
  step: "1",
  chat: {
    id: "",
    name: "",
  },
  bot: {
    id: "",
  },
  setStep: (newStep: string) => set({ step: newStep }),
  setBot: (newBot: Bot) => set({ bot: newBot }),
  setChatName: (newChat: Chat) => set({ chat: newChat }),
}));

export default CreateChatProcess;
