import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Crown, Star, Zap, Upload, Sparkles } from 'lucide-react';

const MembershipPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBuyNow = (planDetails: object) => {
    navigate('/dashboard/checkout', { state: { plan: planDetails } });
  };
  
  const plans = [
    { name: 'Basic', price: 'GRATIS', period: '', description: 'Untuk pemula yang ingin mulai belajar', features: ['Akses 3 kursus gratis', 'Materi dasar programming', 'Forum komunitas'], buttonText: 'Mulai Gratis', popular: false, color: 'gray' },
    { name: 'Premium', price: 'Rp 99.000', period: '/bulan', description: 'Untuk developer yang serius', features: ['Akses semua kursus', 'Materi premium & project', 'Mentoring 1-on-1', 'Job placement assistance', 'Priority support'], buttonText: 'Beli Sekarang', popular: true, color: 'purple' },
    { name: 'Enterprise', price: 'Custom', period: '', description: 'Untuk tim dan perusahaan', features: ['Semua fitur Premium', 'Custom learning path', 'Team management', 'Advanced analytics'], buttonText: 'Hubungi Sales', popular: false, color: 'gold' }
  ];

  const customPlans = [
    { duration: 1, name: 'Bulanan', price: 99000, discount: 0, popular: true },
    { duration: 3, name: '3 Bulan', price: 89000, discount: 10, popular: false },
    { duration: 6, name: '6 Bulan', price: 79000, discount: 20, popular: false },
    { duration: 12, name: '12 Bulan', price: 69000, discount: 30, popular: false },
  ];

  const [selectedCustomPlan, setSelectedCustomPlan] = useState(customPlans[0]);

  const BuyNowButtonGroup: React.FC<{plan: object}> = ({ plan }) => (
    <div className="flex items-center gap-2 mt-6">
      <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="p-3 border-2 border-brand-blue rounded-lg text-brand-blue hover:bg-blue-500/10 transition-colors">
        <Upload className="w-5 h-5" />
      </motion.button>
      <motion.button 
        onClick={() => handleBuyNow(plan)}
        className="flex-1 bg-brand-blue hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg hover:shadow-glow-blue"
        whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
      >
        Beli Sekarang
      </motion.button>
    </div>
  );

  return (
    <div className="space-y-12">
      <div className="text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-text">Upgrade</span> untuk Akses Tanpa Batas
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Buka semua potensi Anda dengan akses ke seluruh kursus, materi premium, dan mentoring eksklusif.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div 
            key={index} 
            className={`flex flex-col justify-between relative card-base ${plan.popular ? 'border-brand-purple' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1"><Sparkles className="w-4 h-4"/> Populer</span>
              </div>
            )}
            
            <div>
              <div className="text-center p-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-brand-purple' : 'text-white'}`}>{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 p-6 pt-0">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 pt-0">
              {plan.name === 'Premium' ? (
                <BuyNowButtonGroup plan={{name: plan.name, price: plan.price, period: plan.period}} />
              ) : (
                <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors mt-6 ${
                  plan.name === 'Enterprise'
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}>
                  {plan.buttonText}
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="card-base border-brand-blue">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Pilih Durasi Langganan Custom</h3>
          <p className="text-gray-400 text-center mb-8">Lebih hemat dengan berlangganan jangka panjang!</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {customPlans.map((plan) => (
              <motion.button 
                key={plan.duration}
                onClick={() => setSelectedCustomPlan(plan)}
                className={`relative p-4 rounded-lg border-2 text-center transition-all ${
                  selectedCustomPlan.duration === plan.duration 
                    ? 'bg-blue-900/50 border-brand-blue' 
                    : 'bg-dark-card border-dark-border hover:border-slate-500'
                }`}
                whileHover={{ y: -5 }}
              >
                {plan.discount > 0 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-pink text-white px-2 py-0.5 rounded-full text-xs font-medium">
                      Hemat {plan.discount}%
                    </span>
                  </div>
                )}
                <div className="font-bold text-lg text-white">{plan.name}</div>
                <div className="text-sm text-gray-300">
                  {(plan.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}/bln
                </div>
              </motion.button>
            ))}
          </div>

          <div className="text-center bg-dark-bg p-6 rounded-lg">
            <div className="text-gray-400">Total Pembayaran</div>
            <div className="text-4xl font-extrabold text-white my-2">
              {(selectedCustomPlan.price * selectedCustomPlan.duration).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
            </div>
            <div className="text-sm text-gray-400">
              untuk {selectedCustomPlan.duration} bulan
            </div>
            <BuyNowButtonGroup plan={{
              name: `Premium (${selectedCustomPlan.name})`,
              price: (selectedCustomPlan.price * selectedCustomPlan.duration).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }),
              period: `/${selectedCustomPlan.duration} bulan`
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
