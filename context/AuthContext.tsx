import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on mount
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true)
    try {
      // Simple mock authentication - replace with real auth
      const mockUser = { id: '1', email, name: email.split('@')[0] }
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      setLoading(false)
      return true
    } catch (error) {
      setLoading(false)
      return false
    }
  }

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setLoading(true)
    try {
      // Simple mock signup - replace with real auth
      const mockUser = { id: '1', email, name }
      setUser(mockUser)
      localStorage.setItem('user', JSON.stringify(mockUser))
      setLoading(false)
      return true
    } catch (error) {
      setLoading(false)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
