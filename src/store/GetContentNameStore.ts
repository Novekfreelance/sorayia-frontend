import { create } from "zustand";

interface ContentNameStore {
  contentName: string;
  setContentName: (newData: string) => void;
}

const useGetContentNameStore = create<ContentNameStore>((set) => {
  const storedContentName =
    typeof window !== "undefined"
      ? localStorage.getItem("contentName") || ""
      : "";

  return {
    contentName: storedContentName,
    setContentName: (newData: string) => {
      localStorage.setItem("contentName", newData);
      set({ contentName: newData });
    },
  };
});

export default useGetContentNameStore;
