import { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from '../context/CartContext'
import { AuthProvider } from '../context/AuthContext'
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AuthProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </Layout>
      </CartProvider>
    </AuthProvider>
  )
}
