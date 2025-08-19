import React from 'react'
import Link from 'next/link'
import { Mail, Phone, Instagram, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Crochet Critters by Ashley</h3>
            <p className="text-gray-300 mb-4">
              Handmade with love, each crochet critter is unique and crafted with care. 
              Perfect for gifts, home decor, or adding a touch of whimsy to your life.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:ashley@crochetcritters.com"
                className="text-gray-300 hover:text-primary-300 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-300 transition-colors">
                  About Ashley
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary-300 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-300 hover:text-primary-300 transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by Ashley • © 2025 Crochet Critters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
