import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  BookOpen, 
  Package, 
  User, 
  BarChart3, 
  Crown,
  Zap
} from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  badge?: string;
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', path: '/' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Courses', path: '/dashboard/courses' },
    { icon: <Package className="w-5 h-5" />, label: 'Products', path: '/dashboard/products' },
    { icon: <User className="w-5 h-5" />, label: 'Profile', path: '/dashboard/profile' },
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Creator Dashboard', path: '/dashboard/creator' },
    { icon: <Crown className="w-5 h-5" />, label: 'Membership', path: '/dashboard/membership', badge: 'New' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-dark-card border-r border-dark-border z-50">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-10">
          <Zap className="w-8 h-8 text-brand-purple"/>
          <h2 className="text-xl font-bold text-white">LearnPlatform</h2>
        </div>
        
        <nav className="space-y-2 flex-grow">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path === '/dashboard/courses' && location.pathname === '/dashboard');
            
            return (
              <motion.button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className="w-full relative flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors duration-200 group"
                whileHover={{ backgroundColor: '#334155' }}
                whileTap={{ scale: 0.98 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-brand-purple rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="relative flex items-center space-x-3">
                  <div className={`${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors`}>
                    {item.icon}
                  </div>
                  <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>{item.label}</span>
                </div>
                
                {item.badge && (
                  <motion.span 
                    className="relative bg-brand-pink text-white text-xs px-2 py-1 rounded-full font-medium"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 500 }}
                  >
                    {item.badge}
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </nav>

        <div className="mt-auto">
            <div className="bg-slate-800/50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-400">© 2025 LearnPlatform</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
