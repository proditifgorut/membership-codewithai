import React, { useState, useEffect } from 'react';

const DateDisplay: React.FC = () => {
  const [dateInfo, setDateInfo] = useState<{ date: string; day: string }>({ date: '', day: '' });

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ];
      
      const day = days[now.getDay()];
      const date = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
      
      setDateInfo({ date, day });
    };

    updateDate();
    const interval = setInterval(updateDate, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-8">
      <div className="text-2xl font-bold text-blue-800 mb-2">{dateInfo.day}</div>
      <div className="text-lg text-blue-600">{dateInfo.date}</div>
    </div>
  );
};

export default DateDisplay;
