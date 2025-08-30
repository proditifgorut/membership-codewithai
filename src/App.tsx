import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './components/DashboardLayout';
import CoursesPage from './pages/CoursesPage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import CreatorDashboardPage from './pages/CreatorDashboardPage';
import MembershipPage from './pages/MembershipPage';
import CheckoutPage from './pages/CheckoutPage';
import CourseCheckoutPage from './pages/CourseCheckoutPage';
import TransactionReceiptPage from './pages/TransactionReceiptPage';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<CoursesPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="creator" element={<CreatorDashboardPage />} />
          <Route path="membership" element={<MembershipPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="course-checkout" element={<CourseCheckoutPage />} />
          <Route path="receipt" element={<TransactionReceiptPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
