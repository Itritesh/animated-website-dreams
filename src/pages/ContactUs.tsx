
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="hero-gradient py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 animate-fade-in">Contact Us</h1>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-yuvan-blue focus:border-yuvan-blue"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-yuvan-blue focus:border-yuvan-blue"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-yuvan-blue focus:border-yuvan-blue"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit"
                    className="bg-yuvan-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Connect With Us</h2>
              <div className="mb-8">
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> Ganesh Papad, Industrial Area, Main Road, Gujarat, India
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> info@yuvansnacks.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +91 98765 43210
                </p>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-100 hover:bg-yuvan-blue hover:text-white p-3 rounded-full transition-all duration-300"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 hover:bg-yuvan-blue hover:text-white p-3 rounded-full transition-all duration-300"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-100 hover:bg-yuvan-blue hover:text-white p-3 rounded-full transition-all duration-300"
                >
                  <Youtube size={24} />
                </a>
              </div>
              
              <div className="mt-8">
                <img 
                  src="/lovable-uploads/1bb2d990-fa86-4075-a4ed-e67ec6da6911.png" 
                  alt="Connect with us" 
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
