import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowLeft } from 'lucide-react';

interface PaymentInstructionsProps {
  item: { name: string; price: string };
  bankName: string;
  accountNumber: string;
  onBack: () => void;
}

const PaymentInstructions: React.FC<PaymentInstructionsProps> = ({ item, bankName, accountNumber, onBack }) => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleProcessTransfer = () => {
    navigate('/dashboard/receipt', {
      state: { item, paymentDetails: { method: 'Transfer Bank', bankName, accountNumber } },
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-5 h-5" />
        Pilih Metode Lain
      </button>

      <div className="card-base p-8">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Instruksi Pembayaran</h2>
        <p className="text-center text-gray-400 mb-6">Selesaikan pembayaran untuk: <span className="font-bold text-brand-purple">{item.name}</span></p>
        
        <div className="bg-dark-bg p-4 rounded-lg mb-6 text-center">
          <div className="text-sm text-gray-400">Total Pembayaran</div>
          <div className="text-3xl font-extrabold text-white">{item.price}</div>
        </div>

        <div className="bg-dark-bg p-6 rounded-lg">
          <div className="text-sm text-gray-400 mb-2">Transfer ke rekening berikut:</div>
          <div className="font-semibold text-lg text-white">{bankName}</div>
          <div className="flex items-center justify-between mt-2 bg-slate-900 p-3 rounded-md">
            <span className="text-xl font-mono text-brand-purple tracking-wider">{accountNumber}</span>
            <motion.button onClick={copyToClipboard} whileTap={{ scale: 0.9 }} className="text-gray-400 hover:text-white transition-colors">
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <motion.button 
            onClick={handleProcessTransfer}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg transition-colors shadow-lg hover:shadow-green-500/30 mb-3"
            whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}
          >
            Proses Transfer
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInstructions;
