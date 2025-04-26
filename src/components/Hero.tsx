
import React from 'react';
import FloatingChips from './FloatingChips';
import { Circle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen pt-24 pb-16 relative overflow-hidden">
      <FloatingChips className="opacity-50" />
      
      <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
        {/* Hero Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-md mb-6 animate-fade-in">
            Have <span className="text-yuvan-yellow">FUN</span> with Yuvaan
          </h1>
        </div>
        
        {/* Product Highlight */}
        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="relative w-full max-w-md animate-float">
            <img 
              src="/lovable-uploads/fdb72023-31dd-4af3-9937-cd0513ee32cb.png" 
              alt="Yuvan Amaranth Millet Sour Cream Crisps" 
              className="w-full h-auto"
            />
            
            {/* Feature Badges */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-yuvan-green text-white rounded-full p-3 shadow-lg animate-bounce-light">
              <span className="text-sm font-bold">No Palm Oil</span>
            </div>
            
            <div className="absolute top-1/3 right-0 translate-x-1/2 bg-yuvan-green text-white rounded-full p-3 shadow-lg animate-bounce-light" style={{ animationDelay: "0.3s" }}>
              <span className="text-sm font-bold">No Gluten</span>
            </div>
            
            <div className="absolute bottom-1/3 left-0 -translate-x-1/2 bg-yuvan-green text-white rounded-full p-3 shadow-lg animate-bounce-light" style={{ animationDelay: "0.6s" }}>
              <span className="text-sm font-bold">Premium Quality</span>
            </div>
            
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 bg-yuvan-green text-white rounded-full p-3 shadow-lg animate-bounce-light" style={{ animationDelay: "0.9s" }}>
              <span className="text-sm font-bold">No Artificial Colors</span>
            </div>
          </div>
          
          {/* Video Play Button */}
          <div className="flex flex-col items-center mt-8 lg:mt-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <button className="group relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
              <Circle className="absolute w-full h-full text-white opacity-30 animate-ping" />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-12 h-12 text-yuvan-blue group-hover:scale-110 transition-transform"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" 
                />
              </svg>
            </button>
            <span className="mt-4 text-white font-medium">Watch Video</span>
          </div>
        </div>
      </div>
      
      {/* Bottom Banner */}
      <div className="bg-yuvan-yellow py-4 w-full mt-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center">
            <p className="text-xl font-bold text-red-600 animate-float-left-right">2nd largest brand across India</p>
            <p className="text-xl font-bold text-red-600 my-4 md:my-0 animate-float">Asli Swaad Har Pal Har Roj</p>
            <p className="text-xl font-bold text-red-600 animate-float-left-right" style={{ animationDelay: "0.2s" }}>2nd largest brand across India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
