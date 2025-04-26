
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import ProductGrid from '../components/ProductGrid';
import BenefitsSection from '../components/BenefitsSection';
import InstagramGallery from '../components/InstagramGallery';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <ProductGrid />
        <BenefitsSection />
        <InstagramGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
