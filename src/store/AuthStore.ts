import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

interface Token {
  token: string;
}

interface AuthStore {
  user: User | null;
  token: Token | null;
  setUser: (user: User) => void;
  setToken: (token: Token) => void;
}

const UserStore = create(
  persist<AuthStore>(
    (set) => ({
      user: null, // Initialize user as null
      token: null,
      setUser: (user: User) => set({ user }),
      setToken: (token: Token) => {
        // Définir le cookie avec l'attribut HttpOnly
        document.cookie = `accessToken=${token.token}; path=/; secure; HttpOnly`;
        set({ token });
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default UserStore;
