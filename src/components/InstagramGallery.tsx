
import React, { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

interface ImageProps {
  src: string;
  alt: string;
  delay?: number;
}

const InstagramImage: React.FC<ImageProps> = ({ src, alt, delay = 0 }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={imageRef}
      className="relative overflow-hidden rounded-lg group opacity-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover social-image aspect-square"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-30">
        <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
      </div>
    </div>
  );
};

const InstagramGallery = () => {
  const images = [
    "/lovable-uploads/42e5585a-b17f-4ebb-85e3-f17a81d8bf38.png",
    "/lovable-uploads/0fa007da-7553-47dc-9dbd-25f16d8f63f0.png",
    "/lovable-uploads/41f283c9-7c81-4d27-a7a1-815cadb40663.png",
    "/lovable-uploads/050d5af6-4973-4475-93d1-eddbf6432f61.png",
    "/lovable-uploads/f67e1aa6-07ab-46ec-ba4b-aeebf43b9fea.png",
    "/lovable-uploads/1bb2d990-fa86-4075-a4ed-e67ec6da6911.png",
    "/lovable-uploads/fdb72023-31dd-4af3-9937-cd0513ee32cb.png",
    "/lovable-uploads/fdb72023-31dd-4af3-9937-cd0513ee32cb.png",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-yuvan-yellow">Get Social With Us!</h2>
        <div className="flex justify-center items-center mb-12">
          <div className="w-16 h-1 bg-yuvan-blue rounded"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((src, index) => (
            <InstagramImage 
              key={index} 
              src={src} 
              alt={`Instagram post ${index + 1}`} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
