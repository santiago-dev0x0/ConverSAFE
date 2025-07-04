export interface AuthError {
    message: string;
    statusCode: number;
}

export interface LoginResponse {
    message: string;
    token: string;
}
