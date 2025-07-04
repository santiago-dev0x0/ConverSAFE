import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import type { User } from '@/types/auth.types'
import { jwtDecode } from 'jwt-decode'

interface AuthState {
  token: string | null
  user: User | null
  isAuthenticated: boolean
  setAuth: (token: string) => void
  setUser: (user: User) => void
  logout: () => void
}

const decodeToken = (token:string):User | null=>{
   try {
    const decoded = jwtDecode<User>(token)
    return decoded
   } catch (error) {
    console.error(error)
    return null
   }
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      setAuth: (token) => {
        const user = decodeToken(token)
        set({ token, isAuthenticated: true, user },false, 'setAuth')
      },
      setUser: (user) => set({ user },false, 'setUser'),
      logout: () => set({ token: null, user: null, isAuthenticated: false },false, 'logout'),
    }),
    {
        name: 'auth-storage',
      }
    ),{
      name: 'AuthStore (zustand)'
    }
  )
) 