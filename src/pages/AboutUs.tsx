
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">About Us</h1>
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <p className="text-lg mb-6">
              Yuvan is a premium snacking brand under Ganesh Papad, dedicated to creating gourmet snacks that are both delicious and nutritious.
            </p>
            <p className="mb-6">
              We believe that clean eating doesn't mean compromising on flavor. Our mission is to revolutionize the snacking industry by offering products that are free from harmful ingredients while delivering exceptional taste experiences.
            </p>
            <p className="mb-6">
              As the 2nd largest brand across India, we take pride in our commitment to quality and innovation, using only the finest ingredients to craft snacks that satisfy both your cravings and your health consciousness.
            </p>
            <p>
              Every Yuvan product is made with love, attention to detail, and a passion for creating snacks that bring joy to people's lives.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
