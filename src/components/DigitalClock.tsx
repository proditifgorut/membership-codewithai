import React, { useState, useEffect } from 'react';

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('id-ID', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-black text-green-400 px-3 py-2 rounded border-2 border-green-400 font-mono text-lg shadow-lg z-10">
      <div className="text-xs text-green-300 mb-1">JAM DIGITAL</div>
      <div className="text-xl font-bold animate-pulse">{time}</div>
    </div>
  );
};

export default DigitalClock;
