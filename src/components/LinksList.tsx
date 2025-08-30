import React from 'react';
import { ExternalLink, Globe, Play, Users, MessageCircle, Camera, Mail, Tv, BookOpen } from 'lucide-react';

interface LinkItem {
  name: string;
  url: string;
  icon: React.ReactNode;
  description: string;
}

const LinksList: React.FC = () => {
  const links: LinkItem[] = [
    {
      name: 'Google',
      url: 'https://www.google.com',
      icon: <Globe className="w-4 h-4" />,
      description: 'Mesin pencari terpopuler di dunia'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com',
      icon: <Play className="w-4 h-4" />,
      description: 'Platform video terbesar'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      icon: <Users className="w-4 h-4" />,
      description: 'Jejaring sosial populer'
    },
    {
      name: 'Twitter/X',
      url: 'https://twitter.com',
      icon: <MessageCircle className="w-4 h-4" />,
      description: 'Microblogging platform'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
      icon: <Camera className="w-4 h-4" />,
      description: 'Berbagi foto dan cerita'
    },
    {
      name: 'Wikipedia',
      url: 'https://www.wikipedia.org',
      icon: <BookOpen className="w-4 h-4" />,
      description: 'Ensiklopedia bebas online'
    },
    {
      name: 'Gmail',
      url: 'https://mail.google.com',
      icon: <Mail className="w-4 h-4" />,
      description: 'Layanan email Google'
    },
    {
      name: 'Netflix',
      url: 'https://www.netflix.com',
      icon: <Tv className="w-4 h-4" />,
      description: 'Streaming film dan serial'
    }
  ];

  const playClickSound = () => {
    // Create a simple click sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  const handleLinkClick = (url: string) => {
    playClickSound();
    window.open(url, '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 border-4 border-blue-500 rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center animate-pulse">
          🔗 TAUTAN POPULER 🔗
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(link.url)}
              className="group bg-white border-2 border-blue-400 rounded-lg p-4 hover:bg-yellow-100 hover:border-red-400 hover:scale-105 transform transition-all duration-200 text-left shadow-md hover:shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-blue-600 group-hover:text-red-600 transition-colors">
                  {link.icon}
                </div>
                <div className="font-bold text-blue-800 group-hover:text-red-800 transition-colors flex items-center">
                  {link.name}
                  <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                </div>
              </div>
              <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                {link.description}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksList;
