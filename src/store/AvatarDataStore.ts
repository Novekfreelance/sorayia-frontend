// avatarDataStore.ts
import { create } from "zustand";
import { AvatarDataProps } from "../app/(dashboard-folders)/dashboard/avatar/columns";

interface AvatarDataStore {
  avatarData: AvatarDataProps[];
  isLoading: boolean;
  setAvatarData: (newData: AvatarDataProps[]) => void;
  setIsLoading: (loading: boolean) => void;
  addAvatar: (newAvatar: AvatarDataProps) => void;
  removeAvatar: (id: string) => void;
  updateAvatar: (updateAvatar: AvatarDataProps) => void;
}

const useAvatarDataStore = create<AvatarDataStore>((set) => ({
  avatarData: [],
  isLoading: false,
  setAvatarData: (newData: AvatarDataProps[]) => set({ avatarData: newData }),
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  addAvatar: (newAvatar: AvatarDataProps) =>
    set((state) => ({ avatarData: [...state.avatarData, newAvatar] })),
  removeAvatar: (id: string) =>
    set((state) => ({
      avatarData: state.avatarData.filter((avatar) => avatar.id !== id),
    })),
  updateAvatar: (updateAvatar: AvatarDataProps) =>
    set((state) => ({
      avatarData: state.avatarData.map((avatar) =>
        avatar.id === updateAvatar.id ? updateAvatar : avatar
      ),
    })),
}));

export default useAvatarDataStore;
