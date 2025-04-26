
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: "Sour Cream Crisps",
    image: "/lovable-uploads/fdb72023-31dd-4af3-9937-cd0513ee32cb.png",
    color: "yuvan-blue",
    slug: "/products/sour-cream-crisps"
  },
  {
    id: 2,
    title: "Ring Jeera Crisps",
    image: "/lovable-uploads/0fa007da-7553-47dc-9dbd-25f16d8f63f0.png",
    color: "yuvan-orange",
    slug: "/products/ring-jeera-crisps"
  },
  {
    id: 3,
    title: "Sriracha Crisps",
    image: "/lovable-uploads/fdb72023-31dd-4af3-9937-cd0513ee32cb.png",
    color: "yuvan-blue",
    slug: "/products/sriracha-crisps"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-yuvan-orange">Discover Other Products</h2>
        <div className="flex justify-center items-center mb-12">
          <div className="w-16 h-1 bg-yuvan-blue rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              color={product.color}
              slug={product.slug}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
