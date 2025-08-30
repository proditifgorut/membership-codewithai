import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              DETAIL PELANGGAN
            </h3>
            <div className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer mb-2">
              konco***@gmail.com
            </div>
            <div className="text-sm text-gray-400">
              090**148-3114-41-a413-659**16d924
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              ULASAN
            </h4>
            <div className="star-rating mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            Bergabung di KoncoWEB adalah pengalaman yang luar biasa! Platform ini 
            membantu permohonan aplikasi dengan UI tampak mudah dan menyenangkan, 
            terutama untuk pemula. Dengan materi yang jelas dan dukungan komunitas 
            yang kuat, setiap pun bisa belajar tanpa jenis baru yuki semua yang dapat mengunjungi semua 
            tentang database engineering. Sangat direkomendasikan untuk yang ingin 
            meningkat yang sama sakti! UX telah sangat mengalami nilai di KoncoWEB!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
