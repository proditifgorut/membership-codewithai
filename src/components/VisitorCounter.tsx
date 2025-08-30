import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Simulate visitor count (in real app, this would come from backend)
    const baseCount = 15847; // Starting number to look realistic
    const storedCount = localStorage.getItem('visitorCount');
    
    if (storedCount) {
      setCount(parseInt(storedCount));
    } else {
      const randomIncrement = Math.floor(Math.random() * 100) + 1;
      const newCount = baseCount + randomIncrement;
      setCount(newCount);
      localStorage.setItem('visitorCount', newCount.toString());
    }

    // Increment occasionally to simulate activity
    const interval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every 30 seconds
        setCount(prev => {
          const newCount = prev + 1;
          localStorage.setItem('visitorCount', newCount.toString());
          return newCount;
        });
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-200 border-2 border-green-600 rounded-lg p-3 shadow-md">
      <div className="flex items-center space-x-2 text-green-800">
        <Users className="w-5 h-5" />
        <div>
          <div className="text-xs font-bold">PENGUNJUNG:</div>
          <div className="text-lg font-bold font-mono">{count.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;
