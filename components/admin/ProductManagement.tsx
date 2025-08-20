import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Upload, 
  Save, 
  X, 
  Star,
  Package,
  DollarSign
} from 'lucide-react'
import toast from 'react-hot-toast'

interface Product {
  id: string
  name: string
  price: number
  category: string
  description: string
  image: string
  featured: boolean
  inStock: boolean
  stockQuantity: number
  rating: number
  reviews: number
}

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  // Form state for product creation/editing
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    category: 'Animals',
    description: '',
    image: '/placeholder-product.png',
    featured: false,
    inStock: true,
    stockQuantity: 1,
    rating: 5,
    reviews: 0
  })

  // Load products from localStorage or use mock data
  useEffect(() => {
    const savedProducts = localStorage.getItem('adminProducts')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      // Initialize with sample products
      const sampleProducts: Product[] = [
        {
          id: '1',
          name: 'Purple Unicorn',
          price: 45.00,
          category: 'Animals',
          description: 'Magical purple unicorn with sparkly horn',
          image: '/unicorn.svg',
          featured: true,
          inStock: true,
          stockQuantity: 5,
          rating: 4.8,
          reviews: 24
        },
        {
          id: '2',
          name: 'Blue Dragon',
          price: 52.00,
          category: 'Animals',
          description: 'Friendly blue dragon with soft wings',
          image: '/dragon.svg',
          featured: true,
          inStock: true,
          stockQuantity: 3,
          rating: 4.9,
          reviews: 18
        },
        {
          id: '3',
          name: 'Pink Bunny Set',
          price: 68.00,
          category: 'Toys',
          description: 'Adorable pink bunny with accessories',
          image: '/bunny.svg',
          featured: false,
          inStock: true,
          stockQuantity: 8,
          rating: 4.7,
          reviews: 31
        }
      ]
      setProducts(sampleProducts)
      localStorage.setItem('adminProducts', JSON.stringify(sampleProducts))
    }
  }, [])

  const saveProducts = (updatedProducts: Product[]) => {
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts))
    setProducts(updatedProducts)
  }

  const handleCreateProduct = () => {
    setEditingProduct(null)
    setFormData({
      name: '',
      price: 0,
      category: 'Animals',
      description: '',
      image: '/placeholder-product.png',
      featured: false,
      inStock: true,
      stockQuantity: 1,
      rating: 5,
      reviews: 0
    })
    setIsModalOpen(true)
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setFormData(product)
    setIsModalOpen(true)
  }

  const handleDeleteProduct = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(p => p.id !== productId)
      saveProducts(updatedProducts)
      toast.success('Product deleted successfully')
    }
  }

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || formData.price <= 0) {
      toast.error('Please fill in all required fields')
      return
    }

    let updatedProducts: Product[]
    
    if (editingProduct) {
      // Update existing product
      updatedProducts = products.map(p => 
        p.id === editingProduct.id 
          ? { ...formData, id: editingProduct.id } as Product
          : p
      )
      toast.success('Product updated successfully')
    } else {
      // Create new product
      const newProduct: Product = {
        ...formData,
        id: Date.now().toString()
      } as Product
      updatedProducts = [...products, newProduct]
      toast.success('Product created successfully')
    }

    saveProducts(updatedProducts)
    setIsModalOpen(false)
    setEditingProduct(null)
  }

  const toggleFeatured = (productId: string) => {
    const updatedProducts = products.map(p => 
      p.id === productId 
        ? { ...p, featured: !p.featured }
        : p
    )
    saveProducts(updatedProducts)
    toast.success('Product updated')
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Product Management</h2>
          <p className="text-gray-600 mt-1">Manage your crochet critter inventory</p>
        </div>
        <button
          onClick={handleCreateProduct}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            title="Filter by category"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-1">
                {product.featured && (
                  <span className="bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
              <p className="text-lg font-bold text-gray-900 mb-2">${product.price.toFixed(2)}</p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                </div>
                <div className="flex items-center">
                  <Package className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-600">{product.stockQuantity} left</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center space-x-1"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => toggleFeatured(product.id)}
                  className="bg-yellow-50 text-yellow-600 px-3 py-2 rounded-lg hover:bg-yellow-100 transition-colors"
                  title="Toggle Featured"
                >
                  <Star className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors"
                  title="Delete Product"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter product name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        required
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      title="Select product category"
                    >
                      <option value="Animals">Animals</option>
                      <option value="Toys">Toys</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Holiday">Holiday</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe your product..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.stockQuantity}
                    onChange={(e) => setFormData({ ...formData, stockQuantity: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter stock quantity"
                  />
                </div>

                <div className="flex items-center space-x-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Featured Product</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.inStock}
                      onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">In Stock</span>
                  </label>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                  >
                    <Save className="h-4 w-4" />
                    <span>{editingProduct ? 'Update' : 'Create'} Product</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductManagement
