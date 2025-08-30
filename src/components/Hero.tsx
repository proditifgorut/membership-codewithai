import React from 'react';
import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/dashboard/courses');
  };

  const handleViewCourses = () => {
    navigate('/dashboard/courses');
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Tingkatkan Karir & Penghasilan{' '}
          <span className="gradient-text">Anda</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Platform pembelajaran premium untuk mengembangkan skill digital dan 
          mencipatakan produk yang menghasilkan
        </p>
        
        {/* Member Count */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gray-800 rounded-full px-6 py-3 flex items-center space-x-2 border border-gray-700">
            <Users className="w-5 h-5 text-purple-400" />
            <span className="text-gray-300">Bergabung bersama</span>
            <span className="font-bold text-white">996</span>
            <span className="text-gray-300">member</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleStartLearning}
            className="btn-primary text-lg px-8 py-4"
          >
            Mulai Belajar
          </button>
          <button 
            onClick={handleViewCourses}
            className="btn-secondary text-lg px-8 py-4"
          >
            Lihat Kursus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
