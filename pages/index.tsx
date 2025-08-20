import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Sparkles, Heart, Truck } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { sampleProducts } from '../data/products'

const HomePage: React.FC = () => {
  const featuredProducts = sampleProducts.filter(product => product.featured).slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative ambient-purple-bg py-20 overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-purple-300 animate-bounce-gentle">
            <Sparkles size={32} />
          </div>
          <div className="absolute top-32 right-20 text-pink-300 animate-bounce-gentle-delayed">
            <Heart size={28} />
          </div>
          <div className="absolute bottom-32 left-32 text-purple-400 animate-float">
            <Star size={24} />
          </div>
          <div className="absolute bottom-20 right-32 text-pink-400 animate-bounce-gentle">
            <Sparkles size={20} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="handwritten-title text-gray-800 mb-6">
                Handmade
                <span className="block text-primary-600">Crochet Critters</span>
                <span className="text-2xl text-purple-600 font-normal">✨ Made with Love ✨</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Each adorable critter is lovingly handcrafted with premium yarn and attention to detail. 
                Perfect for gifts, collectors, or adding a touch of whimsy to any space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products" className="btn-primary text-lg px-8 py-3">
                  Shop Now
                </Link>
                <Link href="/about" className="btn-secondary text-lg px-8 py-3">
                  Meet Ashley
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative">
                <div className="w-80 h-80 relative animate-float">
                  <Image 
                    src="/hero-critter.svg"
                    alt="Adorable Crochet Critter"
                    fill
                    className="object-cover rounded-full shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 animate-bounce-gentle">
                  <Sparkles size={24} className="text-yellow-800" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pink-400 rounded-full p-3 animate-bounce-gentle-delayed">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Cool floating logo */}
              <div className="absolute -top-10 -right-10 w-32 h-32 animate-float">
                <Image 
                  src="/crochet-critters-logo.svg"
                  alt="Crochet Critters by Ashley Logo"
                  width={128}
                  height={128}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Handmade with Love</h3>
              <p className="text-gray-600">Each critter is carefully crafted by hand with love and attention to detail.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Made with high-quality, soft yarn that's safe for all ages and built to last.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick and secure shipping to get your new critter friend to you safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Items</h2>
            <p className="text-xl text-gray-600">Our most loved handmade creations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary text-lg px-8 py-3">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <Image 
                    src="/ashley-portrait.svg"
                    alt="Ashley - Crochet Artist"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Ashley</h2>
              <p className="text-lg text-gray-600 mb-6">
                Hi there! I'm Ashley, the creative mind behind Crochet Critters. What started as a hobby 
                during college has blossomed into a passion for creating adorable, huggable friends that 
                bring joy to people of all ages.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Each critter is made with love in my cozy studio, using only the finest yarns and materials. 
                I believe every piece should be special, which is why I put so much care into every stitch.
              </p>
              <Link href="/about" className="btn-primary">
                Read My Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Connected 💜</h2>
          <p className="text-xl text-white/90 mb-8">Get updates on new critters and special offers!</p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Subscribe ✨
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
