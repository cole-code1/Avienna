import React from 'react';

export default function Home(){
  return (
    <div className="min-h-screen bg-slate-900 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">50 Year Warranty Guaranteed</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Premium Roofing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Solutions</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            Avienna delivers world-class stone-coated and corrugated roofing materials.
            Built to withstand the elements, designed to elevate your architecture.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all">
              Explore Products
            </button>
            <button className="border-2 border-slate-600 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all">
              Contact Us
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">26</div>
              <div className="text-sm text-slate-400">Gauge Thickness</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2.8kg</div>
              <div className="text-sm text-slate-400">Per Tile Weight</div>
            </div>
            <div className="w-px h-12 bg-slate-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50yr</div>
              <div className="text-sm text-slate-400">Warranty</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
            <img
              src="https://res.cloudinary.com/daqtttdb0/image/upload/v1774977112/avienna10_divffg.jpg"
              alt="Roofing"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}