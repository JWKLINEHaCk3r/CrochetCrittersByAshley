import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart, Star, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { sampleProducts } from '../../data/products'
import ProductCard from '../../components/ProductCard'

const ProductDetailPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const product = sampleProducts.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = sampleProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  // Mock images for gallery (in real app, this would come from product data)
  const productImages = [
    product.image,
    product.image, // In real app, these would be different angles
    product.image,
    product.image
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-500">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary-500">Products</Link>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-primary-500 mb-6"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={productImages[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square relative bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    activeImage === index ? 'border-primary-500' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-gray-600">(4.8 out of 5 stars)</span>
              </div>
              <p className="text-primary-600 text-xs font-semibold uppercase tracking-wide">
                {product.category}
              </p>
            </div>

            <div className="text-4xl font-bold text-primary-600">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold text-gray-800">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    disabled={!product.inStock}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    disabled={!product.inStock}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-colors ${
                    product.inStock
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart size={20} />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Truck className="text-primary-500" size={24} />
                  <div>
                    <p className="font-semibold">Fast Shipping</p>
                    <p className="text-sm text-gray-600">3-5 business days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="text-primary-500" size={24} />
                  <div>
                    <p className="font-semibold">Safe Materials</p>
                    <p className="text-sm text-gray-600">Child-safe yarn</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="text-primary-500" size={24} />
                  <div>
                    <p className="font-semibold">Easy Returns</p>
                    <p className="text-sm text-gray-600">30-day returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default ProductDetailPage
