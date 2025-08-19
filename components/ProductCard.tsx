import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Heart } from 'lucide-react'
import { Product } from '../context/CartContext'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <div className="card group">
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Out of Stock
              </span>
            </div>
          )}
          {product.featured && (
            <div className="absolute top-2 left-2 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 text-gray-800 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </span>
          
          <div className="flex gap-2">
            <button 
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              title="Add to Wishlist"
            >
              <Heart size={20} />
            </button>
            
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`p-2 rounded-lg transition-colors ${
                product.inStock 
                  ? 'bg-primary-500 text-white hover:bg-primary-600' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              title={product.inStock ? 'Add to Cart' : 'Out of Stock'}
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
