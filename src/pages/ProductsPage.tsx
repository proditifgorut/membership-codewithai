import React from 'react';
import { Search, Filter, Star, Download } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  rating: number;
  downloads: number;
  image: string;
  category: string;
  isFree: boolean;
}

const ProductsPage: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: 'Ebook: Ahli Buat App dengan Lovable',
      description: 'Panduan lengkap membuat aplikasi modern dengan Lovable framework',
      price: 'GRATIS',
      rating: 5.0,
      downloads: 2400,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop',
      category: 'Ebook',
      isFree: true
    },
    {
      id: 2,
      title: 'Swift POS Template',
      description: 'Template aplikasi Point of Sale siap pakai dengan fitur lengkap',
      price: 'Rp 299.000',
      originalPrice: 'Rp 599.000',
      rating: 4.8,
      downloads: 850,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
      category: 'Template',
      isFree: false
    },
    {
      id: 3,
      title: 'UI Kit Dashboard Admin',
      description: 'Komponen UI lengkap untuk membuat dashboard admin modern',
      price: 'Rp 199.000',
      rating: 4.7,
      downloads: 1200,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
      category: 'UI Kit',
      isFree: false
    },
    {
      id: 4,
      title: 'Ebook: Mobile App Marketing',
      description: 'Strategi pemasaran aplikasi mobile untuk meningkatkan download',
      price: 'Rp 149.000',
      rating: 4.6,
      downloads: 680,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
      category: 'Ebook',
      isFree: false
    },
    {
      id: 5,
      title: 'React Component Library',
      description: 'Koleksi komponen React yang dapat digunakan kembali',
      price: 'GRATIS',
      rating: 4.9,
      downloads: 3200,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop',
      category: 'Library',
      isFree: true
    },
    {
      id: 6,
      title: 'E-commerce Template',
      description: 'Template e-commerce lengkap dengan fitur payment gateway',
      price: 'Rp 499.000',
      originalPrice: 'Rp 799.000',
      rating: 4.8,
      downloads: 560,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop',
      category: 'Template',
      isFree: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Produk Digital</h1>
        <p className="text-gray-400">Template, tools, dan resources untuk mempercepat pengembangan Anda</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
          <Filter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>

      {/* Product Categories */}
      <div className="flex flex-wrap gap-2">
        {['Semua', 'Template', 'Ebook', 'UI Kit', 'Library', 'Tools'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === 'Semua'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card group cursor-pointer">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`text-white text-xs px-2 py-1 rounded ${
                  product.isFree ? 'bg-green-600' : 'bg-blue-600'
                }`}>
                  {product.category}
                </span>
              </div>
              {product.isFree && (
                <div className="absolute top-3 right-3">
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                    GRATIS
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{product.description}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{product.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>{product.downloads.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className={`text-lg font-bold ${
                    product.isFree ? 'text-green-400' : 'text-purple-400'
                  }`}>
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <button className="btn-primary text-sm px-4 py-2">
                  {product.isFree ? 'Download' : 'Beli'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
