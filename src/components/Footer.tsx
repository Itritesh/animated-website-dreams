
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      {/* Social Media Banner */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
          <img 
            src="/lovable-uploads/1bb2d990-fa86-4075-a4ed-e67ec6da6911.png" 
            alt="Connect with us" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* E-commerce Partners */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Big_Basket_logo.png" alt="BigBasket" className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png" alt="Amazon" className="h-8 md:h-12 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1q-0AxE6P6suvLnNTpKwF4A4gQApjqmJmz2NEtADl6w&s" alt="Blinkit" className="h-8 md:h-12 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" alt="Zomato" className="h-8 md:h-8 grayscale hover:grayscale-0 transition-all duration-300" />
          <img src="https://logowik.com/content/uploads/images/zepto5353.jpg" alt="Zepto" className="h-8 md:h-8 grayscale hover:grayscale-0 transition-all duration-300" />
        </div>
      </div>

      {/* Nav Links */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8">
          {['Home', 'About', 'Products', 'Contact us', 'Export'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-700 hover:text-yuvan-blue transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <hr className="border-gray-200 mb-8" />
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© Ganesh Papad</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-yuvan-blue transition-colors">
              <Instagram size={20} />
            </Link>
            <Link to="#" className="hover:text-yuvan-blue transition-colors">
              <Facebook size={20} />
            </Link>
            <Link to="#" className="hover:text-yuvan-blue transition-colors">
              <Youtube size={20} />
            </Link>
          </div>
          <p>Design by Innois</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
