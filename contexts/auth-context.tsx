"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type User = {
  name: string
  email: string
} | null

interface AuthContextType {
  user: User
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)

  const login = async (email: string, password: string) => {
    // This is a mock implementation
    console.log("Login with", email, password)
    setUser({
      name: "Demo User",
      email: email,
    })
  }

  const logout = () => {
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
