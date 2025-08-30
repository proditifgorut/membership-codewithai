import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Star, Clock, Users, Crown } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  price: string;
  image: string;
  category: string;
}

const CoursesPage: React.FC = () => {
  const navigate = useNavigate();

  const courses: Course[] = [
    { id: 1, title: 'Frontend Development dengan React', instructor: 'Ahmad Pratama', rating: 4.8, students: 1250, duration: '12 jam', level: 'Intermediate', price: 'Rp 299.000', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop', category: 'Web Development' },
    { id: 2, title: 'JavaScript Fundamentals', instructor: 'Sari Dewi', rating: 4.9, students: 2100, duration: '8 jam', level: 'Beginner', price: 'Rp 199.000', image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop', category: 'Programming' },
    { id: 3, title: 'UI/UX Design Complete Course', instructor: 'Rina Kusuma', rating: 4.7, students: 890, duration: '15 jam', level: 'Beginner', price: 'Rp 399.000', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop', category: 'Design' },
    { id: 4, title: 'Mobile App Development', instructor: 'Budi Santoso', rating: 4.6, students: 650, duration: '20 jam', level: 'Advanced', price: 'Rp 499.000', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop', category: 'Mobile' },
    { id: 5, title: 'Database Management with PostgreSQL', instructor: 'Linda Sari', rating: 4.5, students: 420, duration: '10 jam', level: 'Intermediate', price: 'Rp 349.000', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop', category: 'Database' },
    { id: 6, title: 'Python for Data Science', instructor: 'Joko Widodo', rating: 4.8, students: 1800, duration: '18 jam', level: 'Beginner', price: 'Rp 450.000', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop', category: 'Data Science' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Semua Kursus</h1>
        <p className="text-gray-400">Temukan kursus terbaik untuk mengembangkan skill Anda.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Cari kursus..."
            className="w-full pl-12 pr-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple"
          />
        </div>
        <button className="flex items-center space-x-2 px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-gray-300 hover:bg-slate-700 transition-colors">
          <Filter className="w-5 h-5" />
          <span>Filter</span>
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {['Semua', 'Web Development', 'Mobile', 'Design', 'Data Science', 'Database'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === 'Semua'
                ? 'bg-brand-purple text-white'
                : 'bg-dark-card text-gray-300 hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {courses.map((course) => (
          <motion.div key={course.id} className="card-base card-hover flex flex-col cursor-pointer" variants={itemVariants}>
            <div className="relative">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover"/>
              <div className="absolute top-3 left-3 bg-brand-purple text-white text-xs px-2 py-1 rounded-md font-semibold">
                {course.level}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div>
                <div className="text-sm text-brand-purple mb-2 font-semibold">{course.category}</div>
                <h3 className="font-bold text-lg mb-2 text-white h-14 group-hover:text-brand-purple transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">oleh {course.instructor}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1"><Star className="w-4 h-4 text-yellow-400 fill-current" /><span>{course.rating}</span></div>
                  <div className="flex items-center space-x-1"><Users className="w-4 h-4" /><span>{course.students.toLocaleString()}</span></div>
                  <div className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>{course.duration}</span></div>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-dark-border">
                <button 
                  onClick={() => navigate('/dashboard/membership')}
                  className="w-full btn-primary text-sm px-4 py-3 flex items-center justify-center gap-2"
                >
                  <Crown className="w-4 h-4" />
                  Gabung Membership untuk Akses
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoursesPage;
