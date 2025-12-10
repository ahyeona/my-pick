import { baseAxios } from "../axios";

export interface AuthProps {
    email: string;
    password: string;
}

export const loginApi = (data: AuthProps) => baseAxios.post("/auth/login", data);
export const signupApi = (data: AuthProps) => baseAxios.post("/auth/signup", data);
export const refreshApi = () => baseAxios.get("/auth/refresh");
export const profileApi = () => baseAxios.get("/auth/profile");