// contentDataStore.ts
import { create } from "zustand";
import { ContentDataProps } from "../app/(dashboard-folders)/dashboard/content/columns";

interface ContentDataStore {
  data: ContentDataProps[];
  isLoading: boolean;
  setData: (newData: ContentDataProps[]) => void;
  setIsLoading: (loading: boolean) => void;
  addData: (newData: ContentDataProps) => void;
  removeData: (id: string) => void;
  updateData: (updatedData: ContentDataProps) => void;
}

const useContentDataStore = create<ContentDataStore>((set) => ({
  data: [],
  isLoading: false,
  setData: (newData: ContentDataProps[]) => set({ data: newData }),
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  addData: (newData: ContentDataProps) =>
    set((state) => ({ data: [...state.data, newData] })),
  removeData: (id: string) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),
  updateData: (updatedData: ContentDataProps) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === updatedData.id ? updatedData : item
      ),
    })),
}));

export default useContentDataStore;
