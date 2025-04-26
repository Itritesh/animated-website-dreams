
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  image: string;
  title: string;
  color: string;
  delay?: number;
  slug?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, color, delay = 0, slug = '#' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up');
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
      className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 snack-card opacity-0 bg-white"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link to={slug}>
        <div className={`p-8 flex justify-center items-center bg-white`}>
          <img src={image} alt={title} className="h-64 object-contain hover:scale-105 transition-transform duration-300" />
        </div>
        <div className={`p-4 text-center bg-${color} bg-opacity-10`}>
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
