import { createBrowserRouter } from "react-router-dom"
import App from "@/App"
import  LoginForm  from "@/components/auth/LoginForm"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <LoginForm />,
    },
])

export default router;