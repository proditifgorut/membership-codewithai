import React from 'react';
import Hero from '../components/Hero';
import TestimonialSection from '../components/TestimonialSection';
import FeaturedCourses from '../components/FeaturedCourses';
import DigitalProducts from '../components/DigitalProducts';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* Featured Courses Section */}
      <FeaturedCourses />
      
      {/* Digital Products Section */}
      <DigitalProducts />
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
