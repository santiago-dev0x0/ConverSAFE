import axios, {type AxiosInstance, type AxiosRequestConfig} from "axios" 

const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
}

const api: AxiosInstance = axios.create(config);

export default api;