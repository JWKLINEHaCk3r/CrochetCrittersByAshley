import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Sparkles, Heart, Truck, Clock, Gift, Shield, Users, Instagram, ChevronRight, Check, ArrowRight, Play, MessageCircle, ShoppingBag, TrendingUp } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { sampleProducts } from '../data/products'

const EnhancedHomePage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 })
  const [customerCount, setCustomerCount] = useState(1247)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const featuredProducts = sampleProducts.filter(product => product.featured).slice(0, 6)
  const limitedProducts = sampleProducts.slice(0, 3)

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Austin, TX",
      image: "/testimonials/sarah.jpg",
      text: "The sparkle unicorn I got for my daughter's birthday was absolutely magical! The quality is incredible and she hasn't put it down since.",
      rating: 5,
      product: "Sparkle Unicorn"
    },
    {
      name: "Mike R.",
      location: "Seattle, WA",
      image: "/testimonials/mike.jpg",
      text: "I collect handmade items and these critters are museum-quality. The attention to detail is unmatched. Already ordered 3 more!",
      rating: 5,
      product: "Charlie Chameleon"
    },
    {
      name: "Emma L.",
      location: "Denver, CO",
      image: "/testimonials/emma.jpg",
      text: "Bought the bunny for my niece's Easter gift. She squealed with joy! The packaging was beautiful too - perfect for gifting.",
      rating: 5,
      product: "Rosie Rabbit"
    }
  ]

  const instagramPosts = [
    { id: 1, image: "/instagram/1.jpg", likes: 234, comments: 12 },
    { id: 2, image: "/instagram/2.jpg", likes: 189, comments: 8 },
    { id: 3, image: "/instagram/3.jpg", likes: 312, comments: 15 },
    { id: 4, image: "/instagram/4.jpg", likes: 156, comments: 7 },
    { id: 5, image: "/instagram/5.jpg", likes: 278, comments: 11 },
    { id: 6, image: "/instagram/6.jpg", likes: 198, comments: 9 }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 45, seconds: 30 }
      })
    }, 1000)

    const counterTimer = setInterval(() => {
      setCustomerCount(prev => prev + Math.floor(Math.random() * 3))
    }, 8000)

    return () => {
      clearInterval(timer)
      clearInterval(counterTimer)
    }
  }, [])

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(testimonialInterval)
  }, [testimonials.length])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 3000)
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Exit Intent Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl max-w-md mx-4 text-center animate-bounce-gentle">
            <Sparkles className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Welcome to the Critter Family! 🎉</h3>
            <p className="text-gray-600">Check your email for a special 15% off coupon!</p>
          </div>
        </div>
      )}

      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">
              {customerCount}+ Happy Customers! Join them today
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>⏰ Sale ends in: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Video Background */}
      <section className="relative ambient-purple-bg py-32 overflow-hidden">
        {/* Floating Trust Badges */}
        <div className="absolute top-4 right-4 flex gap-2 z-20">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-xs font-medium">Secure Checkout</span>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
            <Truck className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium">Free Shipping $50+</span>
          </div>
        </div>

        {/* Video Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="mb-6">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Featured on Etsy & Instagram
                </span>
              </div>
              
              <h1 className="handwritten-title text-gray-800 mb-6">
                Handmade
                <span className="block text-primary-600">Crochet Critters</span>
                <span className="text-2xl text-purple-600 font-normal">✨ Made with Love ✨</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Each adorable critter is lovingly handcrafted with premium yarn and attention to detail. 
                Perfect for gifts, collectors, or adding a touch of whimsy to any space.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link href="/products" className="btn-primary text-lg px-8 py-3 group">
                  Shop Now
                  <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="btn-secondary text-lg px-8 py-3 flex items-center gap-2" title="Watch how our critters are made" aria-label="Watch how our critters are made">
                  <Play className="w-5 h-5" />
                  Watch Process
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">1,247+ Happy Customers</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative">
                <div className="w-96 h-96 relative animate-float">
                  <Image 
                    src="/hero-critter.svg"
                    alt="Adorable Crochet Critter"
                    fill
                    className="object-cover rounded-full shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 animate-bounce-gentle">
                    <Sparkles size={24} className="text-yellow-800" />
                  </div>
                </div>
                
                {/* Floating Reviews */}
                <div className="absolute -top-20 left-0 bg-white rounded-lg shadow-lg p-3 animate-bounce-gentle-delayed">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">"Absolutely magical!"</p>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features with Icons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Handmade with Love</h3>
              <p className="text-gray-600">Each critter is carefully crafted by hand with love and attention to detail.</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Made with high-quality, soft yarn that's safe for all ages and built to last.</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Gift className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gift Ready</h3>
              <p className="text-gray-600">Beautiful packaging perfect for gifting. Include a personal message!</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Truck className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick and secure shipping to get your new critter friend to you safely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Edition Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              Limited Edition - Only 3 Left Each!
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Limited Edition Critters</h2>
            <p className="text-xl text-gray-600">Once they're gone, they're gone forever!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {limitedProducts.map((product, index) => (
              <div key={product.id} className="relative group">
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-3 py-1 text-sm font-bold z-10">
                  Only {3 - index} left!
                </div>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real critter lovers</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-4 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</p>
                    <p className="text-sm text-purple-600">Purchased: {testimonials[currentTestimonial].product}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-purple-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-bold text-gray-800">@CrochetCrittersByAshley</h2>
            </div>
            <p className="text-xl text-gray-600">Follow us for behind-the-scenes and new releases!</p>
            <Link href="https://instagram.com/crochetcrittersbyashley" className="text-purple-600 hover:underline">
              Follow on Instagram →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {instagramPosts.map(post => (
              <div key={post.id} className="relative group aspect-square">
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover rounded-lg group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    <p className="text-sm font-semibold">{post.likes} likes</p>
                    <p className="text-xs">{post.comments} comments</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products with Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Items</h2>
            <p className="text-xl text-gray-600">Our most loved handmade creations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="relative">
                {index === 0 && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full px-3 py-1 text-sm font-bold z-10">
                    Best Seller
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full px-3 py-1 text-sm font-bold z-10">
                    New
                  </div>
                )}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary text-lg px-8 py-3 group">
              View All Products
              <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview with Stats */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
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
                
                {/* Stats Overlay */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">1,247+</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
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
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-purple-600">500+</p>
                  <p className="text-sm text-gray-600">Critters Made</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-purple-600">4.9★</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                Each critter is made with love in my cozy studio, using only the finest yarns and materials. 
                I believe every piece should be special, which is why I put so much care into every stitch.
              </p>
              
              <Link href="/about" className="btn-primary group">
                Read My Story
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter with Incentive */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <Gift className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-4">Get 15% Off Your First Order 💜</h2>
              <p className="text-xl text-white/90 mb-8">
                Plus get early access to new critters and exclusive member-only deals!
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
                  required
                />
                <button 
                  type="submit"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors group"
                >
                  Get My Coupon ✨
                  <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
            
            <p className="text-sm text-white/80 mt-4">
              Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 z-40">
                <button className="bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-700 transition-colors" title="Chat with us">
                  <MessageCircle className="w-6 h-6" />
                </button>
      </div>

      {/* Shopping Bag Reminder */}
      <div className="fixed bottom-4 left-4 z-40">
        <div className="bg-white rounded-lg shadow-lg p-3 flex items-center gap-3">
          <ShoppingBag className="w-5 h-5 text-purple-600" />
          <div>
            <p className="text-sm font-semibold">Your cart is waiting!</p>
            <p className="text-xs text-gray-600">Complete your order</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnhancedHomePage
