import React from 'react';

const products = [
  {
    name: "Stone Coated Tiles",
    img: "https://res.cloudinary.com/daqtttdb0/image/upload/v1774977112/avienna10_divffg.jpg"
  },
  {
    name: "Red Roofing",
    img: "https://res.cloudinary.com/daqtttdb0/image/upload/v1774977111/avienna16_rfhqcw.jpg"
  },
  {
    name: "Black Roofing",
    img: "https://res.cloudinary.com/daqtttdb0/image/upload/v1774977113/avienna5_s3bxdt.jpg"
  },
  {
    name: "Brown Roofing",
    img: "https://res.cloudinary.com/daqtttdb0/image/upload/v1774977114/avienna9_jcrysu.jpg"
  },
  {
    name: "Gray Roofing",
    img: "https://res.cloudinary.com/daqtttdb0/image/upload/v1774977109/avienna17_dodik8.jpg"
  }
];

export default function Products(){
  return (
    <div className="min-h-screen bg-slate-900 pt-28 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Our Products</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:scale-105 transition">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-white text-lg font-semibold">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
