
import React, { useEffect, useRef } from 'react';

const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (textRef.current) {
            textRef.current.classList.add('animate-fade-in');
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img 
              src="/lovable-uploads/0fa007da-7553-47dc-9dbd-25f16d8f63f0.png" 
              alt="Yuvan Quinoa Paprika Crisps" 
              className="w-full h-auto animate-float"
            />
          </div>
          
          <div ref={textRef} className="w-full lg:w-1/2 opacity-0 staggered-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yuvan-orange">
              Snack Smart with <br />
              <span className="text-red-500">YUVAN Quinoa Paprika Crisps</span>
            </h2>
            
            <p className="text-lg mb-6 text-gray-700">
              Dive into the bold crunch of paprika with the goodness of quinoa in every bite.
            </p>
            
            <p className="mb-4 text-gray-700">
              It's not just a snack — it's your go-to munch when you crave something spicy, satisfying, and totally guilt-free.
            </p>
            
            <p className="mb-4 text-gray-700">
              Crafted from wholesome quinoa and seasoned to perfection, these crisps bring the perfect blend of flavor and feel-good nutrition. Whether you're binging your favorite show, working late, or just need a delicious pick-me-up — this is the kind of snack you'll want to hide (or share, if you must).
            </p>
            
            <p className="mb-6 text-gray-700">
              Non-GMO. Gluten-free. Full of fiber and protein.
            </p>
            
            <p className="text-xl font-bold text-gray-800">
              Basically, everything you want in a snack — and none of what you don't.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
