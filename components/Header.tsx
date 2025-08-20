import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { ShoppingBag, Menu, X, User, LogOut } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { cart } = useCart()
  const { user, logout } = useAuth()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen)

  return (
    <header className="bg-gradient-to-r from-purple-100 to-purple-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <Image 
                src="/crochet-critters-logo.svg" 
                alt="Crochet Critters by Ashley"
                width={48}
                height={48}
                className="rounded-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-800">Crochet Critters</h1>
              <p className="text-sm text-gray-600">by Ashley</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-500 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary-500 transition-colors">
              Shop All
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary-500 transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-primary-500 transition-colors">
              <ShoppingBag size={24} />
              {cart.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.itemCount}
                </span>
              )}
            </Link>

            {/* User Profile */}
            {user ? (
              <div className="relative">
                <button 
                  onClick={toggleProfile}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors"
                >
                  <User size={24} />
                  <span className="hidden sm:block">{user.name}</span>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link 
                      href="/orders" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Orders
                    </Link>
                    {user.email === 'akline1812@gmail.com' && (
                      <Link 
                        href="/admin/dashboard" 
                        className="block px-4 py-2 text-sm text-purple-700 hover:bg-purple-50 border-t border-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        🔐 Admin Dashboard
                      </Link>
                    )}
                    <button 
                      onClick={() => {logout(); setIsProfileOpen(false)}}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut size={16} className="inline mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="btn-primary">
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-primary-500 transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-primary-500 transition-colors">
                Shop All
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-primary-500 transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-500 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
