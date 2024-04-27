// chatDataStore.ts
import { create } from "zustand";
import { ConversationData } from "../app/(dashboard-folders)/dashboard/chat/yourChatData/columns";

interface ChatDataStore {
  chatData: ConversationData[];
  isLoading: boolean;
  setChatData: (newData: ConversationData[]) => void;
  setIsLoading: (loading: boolean) => void;
  addChat: (newChat: ConversationData) => void;
  removeChat: (id: string) => void;
  updateChat: (updatedChat: ConversationData) => void;
}

const useChatDataStore = create<ChatDataStore>((set) => ({
  chatData: [],
  isLoading: false,
  setChatData: (newData: ConversationData[]) => set({ chatData: newData }),
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  addChat: (newChat: ConversationData) =>
    set((state) => ({ chatData: [...state.chatData, newChat] })),
  removeChat: (id: string) =>
    set((state) => ({
      chatData: state.chatData.filter((chat) => chat.id !== id),
    })),
  updateChat: (updatedChat: ConversationData) =>
    set((state) => ({
      chatData: state.chatData.map((chat) =>
        chat.id === updatedChat.id ? updatedChat : chat
      ),
    })),
}));

export default useChatDataStore;
