
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/f67e1aa6-07ab-46ec-ba4b-aeebf43b9fea.png" 
              alt="Yuvan Logo" 
              className="h-14 animate-float"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About Us', 'Products', 'Export', 'Contact Us'].map((item, index) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className={`font-medium text-lg transition-all duration-300 hover:text-yuvan-blue 
                ${isScrolled ? 'text-gray-800' : 'text-white'} 
                animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-yuvan-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={28} />
        </button>
        
        {/* Ganesh Logo */}
        <div className="hidden md:block">
          <img 
            src="/lovable-uploads/050d5af6-4973-4475-93d1-eddbf6432f61.png" 
            alt="Ganesh Papad" 
            className="h-12 animate-float" 
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-md animate-fade-in">
          <div className="container mx-auto px-4">
            {['Home', 'About Us', 'Products', 'Export', 'Contact Us'].map((item, index) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="block py-2 text-gray-800 font-medium hover:text-yuvan-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
