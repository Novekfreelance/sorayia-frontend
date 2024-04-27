import { BotDataProps } from "@/app/(dashboard-folders)/dashboard/bot/columns";
import { create } from "zustand";

// interface BotId {
//   id: string;
// }

interface BotDataStore {
  botData: BotDataProps[];
  isLoading: boolean;
  setBotData: (newData: BotDataProps[]) => void;
  setIsLoading: (loading: boolean) => void;
  // chooseBot: (newBot: BotId) => void;
  removeBot: (id: string) => void;
  updateBot: (updateBot: BotDataProps) => void;
}

const useBotDataStore = create<BotDataStore>((set) => ({
  botData: [],
  // botId: { id: "" },
  isLoading: false,
  setBotData: (newData: BotDataProps[]) => set({ botData: newData }),
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  removeBot: (id: string) =>
    set((state) => ({
      botData: state.botData.filter((bot) => bot.id !== id),
    })),
  // chooseBot: (newBot: BotId) => set({ botId: newBot }),
  updateBot: (updateBot: BotDataProps) =>
    set((state) => ({
      botData: state.botData.map((bot) =>
        bot.id === updateBot.id ? updateBot : bot
      ),
    })),
}));

export default useBotDataStore;
