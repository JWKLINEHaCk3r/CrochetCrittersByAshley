import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Package, Truck, Home } from 'lucide-react'

const OrderConfirmationPage: React.FC = () => {
  // In a real app, you'd get this from the router query or state
  const orderNumber = 'CC' + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-500" size={48} />
            </div>

            {/* Success Message */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Thank you for your purchase! Your order has been successfully placed.
            </p>
            <p className="text-gray-600 mb-8">
              Order Number: <span className="font-semibold text-primary-600">#{orderNumber}</span>
            </p>

            {/* What's Next */}
            <div className="text-left mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">What happens next?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Order Processing</h3>
                    <p className="text-gray-600 text-sm">We'll prepare your crochet critters with love and care.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Shipping</h3>
                    <p className="text-gray-600 text-sm">Your order will be shipped within 3-5 business days.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Home className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Delivery</h3>
                    <p className="text-gray-600 text-sm">Your critters will arrive at your doorstep ready for cuddles!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary">
                Continue Shopping
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t text-center">
              <p className="text-gray-600 mb-2">
                Questions about your order?
              </p>
              <Link href="/contact" className="text-primary-600 hover:text-primary-800 font-semibold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmationPage
