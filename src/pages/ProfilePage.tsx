import React from 'react';
import { Camera, Edit, Mail, Phone, MapPin } from 'lucide-react';

const ProfilePage: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Profil</h1>
        <p className="text-gray-400">Kelola informasi dan pengaturan akun Anda</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-600"
                />
                <button className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Ahmad Pratama</h3>
              <p className="text-gray-400 mb-4">Full Stack Developer</p>
              <button className="btn-primary w-full text-sm flex items-center justify-center">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profil
              </button>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">Informasi Pribadi</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  defaultValue="Ahmad Pratama"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  defaultValue="ahmad_pratama"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    defaultValue="ahmad@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Nomor Telepon
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    defaultValue="+62 812 3456 7890"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Alamat
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    defaultValue="Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta"
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 resize-none"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button className="btn-primary">
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-6">Progress Pembelajaran</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
            <div className="text-gray-400">Kursus Diselesaikan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">156</div>
            <div className="text-gray-400">Jam Belajar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">8</div>
            <div className="text-gray-400">Sertifikat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
