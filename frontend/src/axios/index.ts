import axios from "axios";
import { useAuthStore } from "../store/authStore";

const baseURL = "http://localhost:8080"

const baseAxios = axios.create({
  baseURL,
  withCredentials: true,
});

baseAxios.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


baseAxios.interceptors.response.use((res) => res, async (error) => {
  console.log("error", error);

  if (error.response.data.message) {
    const requestUrl = error.config?.url;
    if (requestUrl && requestUrl.includes("/refresh")) {
      return Promise.reject(error);
    }
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
});

export { baseAxios }