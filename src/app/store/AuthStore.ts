import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface User {
	id: string;
  username: string;
  email: string;
	password: string;
	token: string;
};

interface AuthStore {
	user: User | null;
	setUser: (user: User) => void;
}

const useUserStore = create(
	persist <AuthStore>(
		(set) => ({
			user: null, // Initialize user as null
			setUser: (user: User) => set({ user }),
		}),
		{ 
			name: "auth",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);

export default useUserStore;