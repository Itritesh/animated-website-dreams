
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import BenefitsSection from '../components/BenefitsSection';

const allProducts = [
  {
    id: 1,
    title: "Sour Cream Crisps",
    image: "/lovable-uploads/fdb72023-31dd-4af3-9937-cd0513ee32cb.png",
    color: "yuvan-blue",
    description: "Creamy, tangy flavor in every crispy bite."
  },
  {
    id: 2,
    title: "Ring Jeera Crisps",
    image: "/lovable-uploads/0fa007da-7553-47dc-9dbd-25f16d8f63f0.png",
    color: "yuvan-orange",
    description: "Traditional jeera flavor in a fun ring shape."
  },
  {
    id: 3,
    title: "Sriracha Crisps",
    image: "/lovable-uploads/fdb72023-31dd-4af3-9937-cd0513ee32cb.png",
    color: "yuvan-blue",
    description: "Bold, spicy kick for adventurous snackers."
  },
  {
    id: 4,
    title: "Quinoa Paprika Crisps",
    image: "/lovable-uploads/0fa007da-7553-47dc-9dbd-25f16d8f63f0.png",
    color: "yuvan-red",
    description: "Superfood quinoa with smoky paprika seasoning."
  },
  {
    id: 5,
    title: "Amaranth Millet Crisps",
    image: "/lovable-uploads/fdb72023-31dd-4af3-9937-cd0513ee32cb.png",
    color: "yuvan-green",
    description: "Ancient grain goodness in a modern snack."
  },
  {
    id: 6,
    title: "Madras Lentil Crisps",
    image: "/lovable-uploads/0fa007da-7553-47dc-9dbd-25f16d8f63f0.png",
    color: "yuvan-yellow",
    description: "Protein-packed lentil crisps with South Indian spices."
  }
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">Our Products</h1>
          <p className="text-center text-lg max-w-2xl mx-auto mb-12 animate-fade-in-up">
            Discover our range of delicious, nutritious snacks made with premium ingredients and innovative flavors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {allProducts.map((product, index) => (
              <div key={product.id} className="flex flex-col h-full">
                <ProductCard
                  image={product.image}
                  title={product.title}
                  color={product.color}
                  delay={index * 100}
                />
                <p className="mt-4 text-center text-gray-600 animate-fade-in" style={{ animationDelay: `${(index * 100) + 300}ms` }}>
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
