import axios, {type AxiosInstance, type AxiosRequestConfig} from "axios" 
import { useAuthStore } from "@/store/auth.store"

const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
}
console.log(config)
const api: AxiosInstance = axios.create(config);

// Interceptor para agregar el token a las peticiones
api.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token;
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;