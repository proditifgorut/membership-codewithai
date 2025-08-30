import React from 'react';
import { TrendingUp, Users, BookOpen, DollarSign, Eye, MessageSquare } from 'lucide-react';

const CreatorDashboardPage: React.FC = () => {
  const stats = [
    {
      title: 'Total Pendapatan',
      value: 'Rp 45.2 juta',
      change: '+12%',
      changeType: 'positive',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: 'Siswa Aktif',
      value: '1,247',
      change: '+8%',
      changeType: 'positive',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Kursus Dipublikasi',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: 'Total Views',
      value: '25.4k',
      change: '+15%',
      changeType: 'positive',
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const recentCourses = [
    {
      title: 'React Advanced Patterns',
      students: 234,
      revenue: 'Rp 8.5 juta',
      rating: 4.9,
      status: 'active'
    },
    {
      title: 'Node.js Backend Development',
      students: 189,
      revenue: 'Rp 6.2 juta',
      rating: 4.7,
      status: 'active'
    },
    {
      title: 'GraphQL Complete Guide',
      students: 156,
      revenue: 'Rp 5.1 juta',
      rating: 4.8,
      status: 'draft'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Creator Dashboard</h1>
        <p className="text-gray-400">Kelola kursus dan pantau performa konten Anda</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="text-purple-400">
                {stat.icon}
              </div>
              <div className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.title}</div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Pendapatan Bulanan</h3>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="h-64 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-lg mb-2">Chart akan ditampilkan di sini</div>
              <div className="text-sm">Grafik pendapatan 6 bulan terakhir</div>
            </div>
          </div>
        </div>

        {/* Top Performing Courses */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Kursus Terpopuler</h3>
          <div className="space-y-4">
            {recentCourses.map((course, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">{course.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>{course.students} siswa</span>
                    <span>⭐ {course.rating}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      course.status === 'active' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-yellow-600 text-white'
                    }`}>
                      {course.status === 'active' ? 'Aktif' : 'Draft'}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-green-400">{course.revenue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Aksi Cepat</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center space-x-2 p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
            <BookOpen className="w-5 h-5" />
            <span>Buat Kursus Baru</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span>Lihat Review</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
            <TrendingUp className="w-5 h-5" />
            <span>Analitik Detail</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboardPage;
