import { create } from "zustand";

interface User {
    email: string;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;

    setAuth: (user: User, accessToken: string) => void;
    setAccessToken: (token: string | null) => void;
    setUser: (user: any | null) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    accessToken: null,

    setAuth: (user, accessToken) => {
        set({ user, accessToken })
    },
    setAccessToken: (token) => set({ accessToken: token }),
    setUser: (user) => set({ user }),
    clearAuth: () => {
        set({ accessToken: null, user: null })
    }
}))