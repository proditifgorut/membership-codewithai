import React, { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';

const WelcomePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-yellow-300 to-orange-300 border-4 border-red-500 rounded-lg p-6 m-4 max-w-md shadow-2xl animate-bounce">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2">
            <Star className="w-6 h-6 text-red-600 animate-spin" />
            <h2 className="text-2xl font-bold text-red-800">SELAMAT DATANG!</h2>
            <Star className="w-6 h-6 text-red-600 animate-spin" />
          </div>
          <button
            onClick={handleClose}
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-red-700 mb-3">
            🌟 PORTAL WEB KLASIK 🌟
          </p>
          <p className="text-sm text-red-600 mb-4">
            Selamat datang di portal web bergaya tahun 2000-an! 
            Nikmati nostalgia internet klasik dengan tautan-tautan populer.
          </p>
          <button
            onClick={handleClose}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded border-2 border-red-700 transition-colors"
          >
            MASUK PORTAL
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
