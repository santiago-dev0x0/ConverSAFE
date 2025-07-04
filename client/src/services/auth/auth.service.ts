import type { AxiosResponse } from "axios";
import api from "@/services/api/axios.config";
import { API_ENDPOINTS } from "../api/enpoints";
import type { LoginCredentials } from "@/types/auth.types";
import type { AuthError, LoginResponse } from "./auth.types";

export const authService = {
    login: async (credentials: LoginCredentials): Promise<AxiosResponse<LoginResponse, AuthError>> => {
        const response: AxiosResponse<LoginResponse, AuthError> = 
            await api.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
        return response;
    }
}