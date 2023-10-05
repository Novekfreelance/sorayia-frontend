import { create } from "zustand";

type useAuthState = {
  formType: "login" | "register";
  toggleForm: () => void;
};

const useAuthStore = create<useAuthState>((set) => ({
  formType: "login",
  toggleForm: () =>
    set((state) => ({
      formType: state.formType === "login" ? "register" : "login",
    })),
}));

export default useAuthStore;
