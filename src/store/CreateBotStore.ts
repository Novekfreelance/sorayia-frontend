// UseProcessContext.ts
import type {
  Avatar,
  CreateBotContext,
  Folders,
  Preferences,
} from "@/types/CreateBotContext";
import { create } from "zustand";

const UseProcessContext = create<CreateBotContext>((set) => ({
  step: "1",
  preferences: {
    name: "",
    prompt: "",
    description: "",
    language: "",
    model: "OpenAI GPT3.5" || "GPT-3.5-turbo-16k" || "OpenAI GPT4",
  },
  avatar: {
    id: "",
    name: "",
    url: "",
  },
  folders: {
    id: "",
    name: "",
  },
  clearForm: false,
  setStep: (newStep: string) => set({ step: newStep }),
  setClearForm: (newClearForm: boolean) => set({ clearForm: newClearForm }),
  setPreferences: (newPreferences: Preferences) =>
    set({ preferences: newPreferences }),
  setAvatar: (newAvatar: Avatar) => set({ avatar: newAvatar }),
  setFolders: (newFolders: Folders) => set({ folders: newFolders }),
}));

export default UseProcessContext;
