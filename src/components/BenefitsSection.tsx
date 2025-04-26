
import React, { useEffect, useRef } from 'react';

const BenefitCard = ({ 
  title, 
  description, 
  delay = 0 
}: { 
  title: string; 
  description: string; 
  delay?: number; 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-zoom-in');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={cardRef} 
      className="bg-white rounded-xl shadow-lg p-6 lg:p-8 opacity-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 benefits-section">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          <BenefitCard 
            title="No Palm Oil" 
            description="Because clean snacking starts with clean ingredients."
            delay={0}
          />
          <BenefitCard 
            title="No Gluten & No Cholesterol" 
            description="Gentle on digestion and supportive of heart health."
            delay={200}
          />
          <BenefitCard 
            title="Rich in Protein & Dietary Fibre" 
            description="Keeps you full, focused, and fueled."
            delay={400}
          />
          <BenefitCard 
            title="No Refined Sugars or Preservatives" 
            description="Nothing weird, just real ingredients."
            delay={600}
          />
          <BenefitCard 
            title="Premium Quality Crunch" 
            description="Golden-baked to perfection with a seriously satisfying snap."
            delay={800}
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
