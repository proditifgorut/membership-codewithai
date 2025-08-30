import React from 'react';
import { ChevronRight, Heart, Star } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  price: string;
  image: string;
  rating?: number;
}

const DigitalProducts: React.FC = () => {
  const products: Product[] = [
    {
      title: 'Ebook : Ahli Buat app dengan Lovable ( alternative download',
      description: 'Link download alternatif untuk ebook ahli buat app',
      price: '$0',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop',
      rating: 5
    },
    {
      title: 'Ebook : Ahli Buat app dengan Lovable',
      description: 'sebuah ebook spesial member ( semua paket )',
      price: '$0',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
      rating: 5
    },
    {
      title: 'Swift POS Siap Upload',
      description: 'Aplikasi Kasir Swiftpos siapa Swift Point Of sale yang...',
      price: '$0',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Produk Digital Terbaik</h2>
            <p className="text-gray-400">Template dan tools untuk mempercepat pengembangan bisnis Anda</p>
          </div>
          <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            Lihat Semua
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="product-card group cursor-pointer">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Heart className="w-6 h-6 text-white opacity-70 hover:opacity-100 hover:text-red-400 transition-all" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                {product.rating && (
                  <div className="flex items-center mb-3">
                    <div className="star-rating mr-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({product.rating}.0)</span>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Mulai dari</div>
                  <div className="font-bold text-lg text-purple-400">{product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProducts;
