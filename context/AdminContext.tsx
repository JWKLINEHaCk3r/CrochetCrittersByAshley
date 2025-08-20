import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AdminUser {
  id: string
  email: string
  name: string
  role: 'admin'
}

interface AdminContextType {
  adminUser: AdminUser | null
  isAdminLoggedIn: boolean
  adminLogin: (email: string, password: string) => Promise<boolean>
  adminLogout: () => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

interface AdminProviderProps {
  children: ReactNode
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  useEffect(() => {
    // Check if admin is logged in on app start
    const savedAdmin = localStorage.getItem('adminUser')
    if (savedAdmin) {
      const admin = JSON.parse(savedAdmin)
      setAdminUser(admin)
      setIsAdminLoggedIn(true)
    }
  }, [])

  const adminLogin = async (email: string, password: string): Promise<boolean> => {
    try {
      // Admin credentials - in production, this would be handled by a secure backend
      if (email === 'akline1812@gmail.com' && password === 'CrochetAdmin2025!') {
        const admin: AdminUser = {
          id: 'admin-1',
          email: 'akline1812@gmail.com',
          name: 'Ashley Kline',
          role: 'admin'
        }
        
        setAdminUser(admin)
        setIsAdminLoggedIn(true)
        localStorage.setItem('adminUser', JSON.stringify(admin))
        return true
      }
      return false
    } catch (error) {
      console.error('Admin login error:', error)
      return false
    }
  }

  const adminLogout = () => {
    setAdminUser(null)
    setIsAdminLoggedIn(false)
    localStorage.removeItem('adminUser')
  }

  return (
    <AdminContext.Provider value={{
      adminUser,
      isAdminLoggedIn,
      adminLogin,
      adminLogout
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}
