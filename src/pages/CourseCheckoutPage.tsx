import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, ChevronRight } from 'lucide-react';
import PaymentInstructions from '../components/PaymentInstructions';

// Placeholder logos
const PaymentLogo: React.FC<{ name: string }> = ({ name }) => {
  const styles: { [key: string]: string } = {
    ShopeePay: 'bg-orange-500', OVO: 'bg-purple-700', gopay: 'bg-blue-500',
    DANA: 'bg-blue-400', 'LinkAja!': 'bg-red-500', 'BCA mobile': 'bg-blue-800',
    'ATM Bersama': 'bg-gray-500 text-blue-900', PRIMA: 'bg-red-600', ALTO: 'bg-yellow-500 text-blue-900',
    Alfamart: 'bg-red-600', Indomaret: 'bg-blue-600',
  };
  return (
    <div className={`w-12 h-6 flex items-center justify-center rounded-sm text-white text-[8px] font-bold ${styles[name] || 'bg-gray-600'}`}>
      {name}
    </div>
  );
};

const paymentMethods = [
  { name: 'QRIS', logos: ['ShopeePay', 'OVO', 'gopay', 'DANA', 'LinkAja!', 'BCA mobile'] },
  { name: 'TRANSFER BANK (VA)', logos: ['ATM Bersama', 'PRIMA', 'ALTO'] },
  { name: 'E-WALLET', logos: ['DANA', 'LinkAja!', 'OVO', 'ShopeePay'] },
  { name: 'MINI MARKET', logos: ['Alfamart', 'Indomaret'] }
];

const CourseCheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state || { course: { title: 'Unknown Course', price: 'N/A', image: '', instructor: '' } };
  
  const [selectedMethod, setSelectedMethod] = useState<string | null>('TRANSFER BANK (VA)');
  const [showPaymentView, setShowPaymentView] = useState(false);

  useEffect(() => {
    if (!location.state?.course) {
      navigate('/dashboard/courses');
    }
  }, [location.state, navigate]);
  
  if (showPaymentView) {
    return (
      <PaymentInstructions
        item={{ name: course.title, price: course.price }}
        bankName="SeaBank"
        accountNumber="123455667890" // Original account for courses
        onBack={() => setShowPaymentView(false)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={() => navigate('/dashboard/courses')} 
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Kembali ke Daftar Kursus
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Payment Methods */}
        <div className="lg:col-span-3 bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Metode Pembayaran</h2>
          
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <button
                key={method.name}
                onClick={() => setSelectedMethod(method.name)}
                className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                  selectedMethod === method.name 
                  ? 'bg-gray-700 border-purple-500' 
                  : 'bg-gray-900 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex flex-wrap gap-2 items-center">
                  {method.logos.map(logo => <PaymentLogo key={`${method.name}-${logo}`} name={logo} />)}
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-sm text-gray-300 whitespace-nowrap">{method.name}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </button>
            ))}
          </div>

          <div className="text-center my-6">
            <a href="#" className="text-purple-400 hover:text-purple-300 font-medium text-sm">
              PUNYA KODE DISKON?
            </a>
          </div>
          
          <button 
            onClick={() => setShowPaymentView(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors text-lg"
          >
            Bayar Sekarang
          </button>
          <p className="text-center text-gray-400 text-sm mt-3">
            Selesaikan transaksi untuk mengakses kursus.
          </p>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 sticky top-6">
            <h2 className="text-2xl font-bold text-white mb-6">Ringkasan Pesanan</h2>
            
            <div className="bg-gray-700 p-4 rounded-lg mb-4 flex items-center gap-4">
              <img src={course.image} alt={course.title} className="w-20 h-16 object-cover rounded-md" />
              <div>
                <h3 className="font-semibold text-white leading-tight">{course.title}</h3>
                <p className="text-sm text-gray-400">oleh {course.instructor}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Harga</span>
                <span className="text-white font-medium">{course.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Pajak (11%)</span>
                <span className="text-white font-medium">Termasuk</span>
              </div>
            </div>
            
            <hr className="border-gray-700 my-4" />
            
            <div className="flex justify-between items-center font-bold text-lg mb-6">
              <span className="text-white">Total</span>
              <span className="text-purple-400">{course.price}</span>
            </div>
            
            <div className="flex items-center justify-center mt-4 text-sm text-gray-400">
              <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
              <span>Pembayaran aman dan terenkripsi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCheckoutPage;
