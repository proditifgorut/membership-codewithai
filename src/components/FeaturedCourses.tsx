import React from 'react';
import { ChevronRight, Code, Palette, Smartphone, BarChart3, Database, Globe } from 'lucide-react';

interface Course {
  title: string;
  type: string;
  category: string;
  image: string;
  icon: React.ReactNode;
}

const FeaturedCourses: React.FC = () => {
  const courses: Course[] = [
    {
      title: 'Frontend Development',
      type: 'reguler',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'JavaScript Fundamentals',
      type: 'jeni',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'UI/UX Design',
      type: 'reguler',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
      icon: <Palette className="w-6 h-6" />
    },
    {
      title: 'Mobile Development',
      type: 'reguler',
      category: 'Mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: '2in1 Live Tanpa Koding: Buat Aplikasi Tiketing Taman Hiburan dan Terapi Anxiety',
      type: 'reguler',
      category: 'No-Code',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Buat aplikasi CRM Tanpa Koding dengan Srcbook dan Firebase',
      type: 'reguler',
      category: 'No-Code',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      icon: <Database className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Kursus Unggulan</h2>
            <p className="text-gray-400">Pelajari skill yang paling diminati industri</p>
          </div>
          <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            Lihat Semua
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="course-card group cursor-pointer">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                    {course.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black bg-opacity-50 rounded-full p-2">
                  {course.icon}
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">{course.category}</div>
                <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {course.title.length > 50 
                    ? 'Kita akan membuat aplikasi 2in1 ( sekaligus 2 aplikasi...'
                    : 'Pelajari fundamental dan best practices dalam pengembangan.'
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
