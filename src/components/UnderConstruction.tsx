import React from 'react';
import { Hammer, AlertTriangle } from 'lucide-react';

const UnderConstruction: React.FC = () => {
  return (
    <div className="bg-yellow-300 border-4 border-orange-500 rounded-lg p-4 shadow-lg mb-6">
      <div className="flex items-center justify-center space-x-3 text-orange-800">
        <Hammer className="w-6 h-6 animate-bounce" />
        <AlertTriangle className="w-6 h-6 animate-pulse" />
        <div className="text-center">
          <div className="font-bold text-lg">UNDER CONSTRUCTION</div>
          <div className="text-sm">Portal ini terus dikembangkan untuk pengalaman yang lebih baik!</div>
        </div>
        <AlertTriangle className="w-6 h-6 animate-pulse" />
        <Hammer className="w-6 h-6 animate-bounce" />
      </div>
    </div>
  );
};

export default UnderConstruction;
