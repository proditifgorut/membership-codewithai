import React from 'react';
import { BookOpen, Briefcase, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-purple-400" />,
      title: 'Pembelajaran Terstruktur',
      description: 'Kurikulum yang dirancang khusus untuk membantu Anda menguasai skill digital step by step'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-400" />,
      title: 'Berbasis Proyek',
      description: 'Bangun portfolio nyata dan dapatkan feedback untuk meningkatkan kemampuan Anda'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Sumber Daya Premium',
      description: 'Akses eksklusif ke tools dan template untuk memaksimalkan produktivitas Anda'
    }
  ];

  return (
    <footer className="py-16 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Learning Platform. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
