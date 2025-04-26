
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Export = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="hero-gradient py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 animate-fade-in">Export Opportunities</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Become a Global Partner</h2>
            <p className="text-gray-700 mb-6">
              Yuvan snacks are loved across India, and we're expanding our reach globally. We're looking for distributors and partners who share our passion for healthy, delicious snacking.
            </p>
            <p className="text-gray-700 mb-6">
              Our products are made with premium ingredients, feature clean labels, and meet international food safety standards, making them perfect for global markets.
            </p>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Why Export Yuvan?</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li className="text-gray-700">Premium quality snacks with unique flavors</li>
              <li className="text-gray-700">No palm oil, no gluten, no cholesterol</li>
              <li className="text-gray-700">Rich in protein and dietary fiber</li>
              <li className="text-gray-700">No refined sugars or preservatives</li>
              <li className="text-gray-700">Compliant with international food standards</li>
              <li className="text-gray-700">Flexible packaging and labeling options</li>
              <li className="text-gray-700">Competitive pricing and reliable supply chain</li>
            </ul>
            <button className="bg-yuvan-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Request Export Information
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Markets We Serve</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">North America</li>
                <li className="text-gray-700">Europe</li>
                <li className="text-gray-700">Middle East</li>
                <li className="text-gray-700">Southeast Asia</li>
                <li className="text-gray-700">Australia & New Zealand</li>
                <li className="text-gray-700">Africa</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Export Documentation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-700">FSSAI Certification</li>
                <li className="text-gray-700">ISO 22000 Certification</li>
                <li className="text-gray-700">Non-GMO Verification</li>
                <li className="text-gray-700">Gluten-Free Certification</li>
                <li className="text-gray-700">Export Clearance Documents</li>
                <li className="text-gray-700">Product Specification Sheets</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Export;
