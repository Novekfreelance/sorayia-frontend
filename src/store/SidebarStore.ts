import { DEFAULT_SIDEBAR_WIDTH } from "@/constants/Sidebar/DefaultWidthConstant";
import { create } from "zustand";

type SidebarStore = {
  sidebarWidth: number;
  setSidebarWidth: (width: number) => void;
};

const useSidebarStore = create<SidebarStore>((set) => ({
  sidebarWidth: DEFAULT_SIDEBAR_WIDTH,
  setSidebarWidth: (width) => set({ sidebarWidth: width }),
}));


export default useSidebarStore;
