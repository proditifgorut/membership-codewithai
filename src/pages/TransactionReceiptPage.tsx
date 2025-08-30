import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

const TransactionReceiptPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item, paymentDetails } = location.state || {
    item: { name: 'Produk Tidak Ditemukan', price: 'N/A' },
    paymentDetails: { method: 'N/A', bankName: 'N/A', accountNumber: 'N/A' },
  };

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!location.state) {
      navigate('/dashboard/courses');
    }
  }, [location.state, navigate]);

  const handleCheckout = () => setShowPopup(true);
  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/dashboard/courses');
  };

  const receiptVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <>
      <motion.div 
        className="max-w-2xl mx-auto card-base overflow-hidden"
        variants={receiptVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white">Struk Pembayaran</h1>
            <p className="text-gray-400">Transaksi Anda sedang diproses.</p>
          </div>

          <div className="bg-dark-bg p-6 rounded-lg space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-dark-border">
              <span className="text-gray-400">Produk</span>
              <span className="font-semibold text-white text-right">{item.name}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-dark-border">
              <span className="text-gray-400">Metode Pembayaran</span>
              <span className="font-semibold text-white">{paymentDetails.method}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-dark-border">
              <span className="text-gray-400">Tujuan Transfer</span>
              <div className="text-right">
                <p className="font-semibold text-white">{paymentDetails.bankName}</p>
                <p className="font-mono text-gray-300">{paymentDetails.accountNumber}</p>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-gray-400 text-lg">Total</span>
              <span className="text-2xl font-bold text-brand-purple">{item.price}</span>
            </div>
          </div>

          <div className="mt-8">
            <motion.button
              onClick={handleCheckout}
              className="w-full btn-primary text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Selesaikan
            </motion.button>
          </div>
        </div>
        <div className="bg-dark-bg px-8 py-4 text-center text-xs text-gray-500">
          ID Transaksi: {`txn_${new Date().getTime()}`}
        </div>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative bg-dark-card p-8 rounded-lg border border-dark-border max-w-sm w-full text-center shadow-2xl"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button 
                onClick={handleClosePopup}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <X/>
              </motion.button>
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-3">Terima Kasih!</h2>
              <p className="text-gray-300 mb-6">
                Pembayaran Anda sedang diverifikasi. Anda akan mendapatkan notifikasi jika sudah selesai.
              </p>
              <motion.button
                onClick={handleClosePopup}
                className="bg-brand-purple hover:bg-purple-500 text-white font-medium py-2 px-8 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tutup
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TransactionReceiptPage;
