import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, ChevronRight, QrCode, Landmark, Wallet, Store } from 'lucide-react';
import PaymentInstructions from '../components/PaymentInstructions';
import { motion, AnimatePresence } from 'framer-motion';

const paymentMethodConfig = {
  'QRIS': { icon: <QrCode/>, logos: ['ShopeePay', 'OVO', 'gopay', 'DANA', 'LinkAja!'] },
  'TRANSFER BANK (VA)': { icon: <Landmark/>, logos: ['ATM Bersama', 'PRIMA', 'ALTO'] },
  'E-WALLET': { icon: <Wallet/>, logos: ['DANA', 'LinkAja!', 'OVO', 'ShopeePay'] },
  'MINI MARKET': { icon: <Store/>, logos: ['Alfamart', 'Indomaret'] }
};

const PaymentLogo: React.FC<{ name: string }> = ({ name }) => {
  const styles: { [key: string]: string } = {
    ShopeePay: 'bg-orange-500', OVO: 'bg-purple-700', gopay: 'bg-blue-500', DANA: 'bg-blue-400', 'LinkAja!': 'bg-red-500',
    'ATM Bersama': 'bg-gray-500 text-blue-900', PRIMA: 'bg-red-600', ALTO: 'bg-yellow-500 text-blue-900', Alfamart: 'bg-red-600', Indomaret: 'bg-blue-600',
  };
  return <div className={`w-12 h-6 flex items-center justify-center rounded-sm text-white text-[8px] font-bold ${styles[name] || 'bg-gray-600'}`}>{name}</div>;
};

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan } = location.state || { plan: { name: 'Unknown Plan', price: 'N/A', period: '' } };
  const [selectedMethod, setSelectedMethod] = useState<string | null>('TRANSFER BANK (VA)');
  const [showPaymentView, setShowPaymentView] = useState(false);

  return (
    <AnimatePresence>
      {showPaymentView ? (
        <motion.div key="payment-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <PaymentInstructions
            item={{ name: plan.name, price: plan.price }}
            bankName="SeaBank"
            accountNumber="081354803858"
            onBack={() => setShowPaymentView(false)}
          />
        </motion.div>
      ) : (
        <motion.div key="checkout-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="max-w-5xl mx-auto">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Kembali
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="card-base p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Metode Pembayaran</h2>
                
                <div className="space-y-4">
                  {Object.entries(paymentMethodConfig).map(([name, config]) => (
                    <motion.button
                      key={name}
                      onClick={() => setSelectedMethod(name)}
                      className={`w-full p-4 rounded-lg border-2 transition-all ${selectedMethod === name ? 'bg-slate-700/50 border-brand-purple' : 'bg-dark-bg border-dark-border hover:border-slate-600'}`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="text-brand-purple">{config.icon}</div>
                          <span className="font-semibold text-sm text-white">{name}</span>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-transform ${selectedMethod === name ? 'text-brand-purple' : 'text-gray-400'}`} />
                      </div>
                      {selectedMethod === name && (
                        <motion.div 
                          className="flex flex-wrap gap-2 mt-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                        >
                          {config.logos.map(logo => <PaymentLogo key={`${name}-${logo}`} name={logo} />)}
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="sticky top-8">
                <div className="card-base p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Ringkasan Pesanan</h2>
                  
                  <div className="bg-dark-bg p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">{plan.name}</span>
                      <span className="text-gray-300">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center"><span className="text-gray-400">Harga</span><span className="text-white font-medium">{plan.price}</span></div>
                    <div className="flex justify-between items-center"><span className="text-gray-400">Pajak (11%)</span><span className="text-white font-medium">Termasuk</span></div>
                  </div>
                  
                  <hr className="border-dark-border my-6" />
                  
                  <div className="flex justify-between items-center font-bold text-xl mb-6">
                    <span className="text-white">Total</span>
                    <span className="text-brand-purple">{plan.price}</span>
                  </div>
                  
                  <motion.button 
                    onClick={() => setShowPaymentView(true)}
                    className="w-full bg-brand-blue hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-colors text-lg shadow-lg hover:shadow-glow-blue"
                    whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}
                  >
                    Bayar Sekarang
                  </motion.button>
                  
                  <div className="flex items-center justify-center mt-4 text-xs text-gray-400">
                    <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
                    <span>Pembayaran aman dan terenkripsi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutPage;
