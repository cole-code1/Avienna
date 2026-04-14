import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ChevronRight, Shield, Clock, Award, X, Menu, ArrowRight } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';


// Image paths from your cloudinary uploads
const IMAGES = {
  logo:'https://res.cloudinary.com/daqtttdb0/image/upload/v1776005159/logoavienna_c6zog0.jpg',
  colorGuide: 'https://res.cloudinary.com/daqtttdb0/image/upload/v1776006303/specavienna_qwvkyj.jpg',
  terracotta:'https://res.cloudinary.com/daqtttdb0/image/upload/v1774977114/avienna6_wdhkfs.jpg',
  Maroon:'https://res.cloudinary.com/daqtttdb0/image/upload/v1774977113/avienna12_um4fqt.jpg',
  Black:'https://res.cloudinary.com/daqtttdb0/image/upload/v1774977113/avienna5_s3bxdt.jpg',
  CoffeeBrown:'https://res.cloudinary.com/daqtttdb0/image/upload/v1774977111/avienna7_qltfv6.jpg',
  BlackwithPatches:'https://res.cloudinary.com/daqtttdb0/image/upload/v1774977112/avienna10_divffg.jpg',
  TerracottawithPatches:'https://res.cloudinary.com/daqtttdb0/image/upload/v1774977114/avienna9_jcrysu.jpg',
  CoffeeBrownwithPatches:'https://res.cloudinary.com/daqtttdb0/image/upload/v1776152185/coffee_brown_with_patches_ifqatr.jpg',
  redWave: 'https://res.cloudinary.com/daqtttdb0/image/upload/v1774977111/avienna16_rfhqcw.jpg',
  brown:'https://res.cloudinary.com/daqtttdb0/image/upload/v1774977112/avienna13_wetl0w.jpg'
};

// Color definitions based on the explanatory photo (avienna3.jpeg)
const COLOR_DEFINITIONS = [
  {
    name: "Maroon",
    hex: "#8B2323",
    description: "Rich deep red tone with elegant finish",
    image: IMAGES.Maroon
  },
  {
    name: "RedWave",
    hex: "#923838",
    description: "Vibrant red with dynamic wave pattern",
    image: IMAGES.redWave
  },
  {
    name: "Black",
    hex: "#1C1C1C",
    description: "Classic matte black for modern architecture",
    image: IMAGES.Black
  },
  {
    name: "Terracotta",
    hex: "#A0522D",
    description: "Warm earthy orange-brown traditional look",
    image: IMAGES.terracotta
  },
  {
    name: "Coffee Brown",
    hex: "#4A3728",
    description: "Rich chocolate brown with premium texture",
    image: IMAGES.CoffeeBrown
  },
  {
    name: "Black with Patches",
    hex: "#2C2C2C",
    description: "Textured black with dimensional stone patches",
    image: IMAGES.BlackwithPatches
  },
  {
    name: "Terracotta with Patches",
    hex: "#B5651D",
    description: "Multi-toned terracotta with depth variation",
    image: IMAGES.TerracottawithPatches
  },
  {
    name: "Coffee Brown with Patches",
    hex: "#5C4033",
    description: "Layered brown tones with natural stone texture",
    image: IMAGES.CoffeeBrownwithPatches
  },
  {
    name: "Brown",
    hex: "#5C4033",
    description: "Classic brown with a smooth finish",
    image: IMAGES.brown
  }
];

const FloatingMabati = ({ src, alt, className, delay = 0 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const animate = () => {
      const time = Date.now() / 1000 + delay;
      setPosition({
        x: Math.sin(time * 0.5) * 20,
        y: Math.cos(time * 0.3) * 15
      });
    };
    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div 
      className={`absolute transition-transform duration-100 ease-out ${className}`}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.25))'
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

const Navigation = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Products', page: 'products' },
    { name: 'Contact', page: 'contact' }
  ];

  return (
<nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
  ${
    isOpen
      ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
      : scrolled
      ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
  }`}
>      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            </div>
            <img className="h-20 w-auto" src={IMAGES.logo} alt="Avienna Logo" />
          </div>

          {/* Desktop Nav */} 
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setPage(item.page)}
                className={`text-sm font-medium transition-colors ${currentPage === item.page ? 'text-orange-400' : 'text-slate-300 hover:text-white'}`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => setPage('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
  ${isOpen ? 'max-h-96 opacity-100 mt-4 pb-4 pt-4' : 'max-h-0 opacity-0'}
  border-t border-white/20`}
>
  {navItems.map((item) => (
    <button
      key={item.page}
      onClick={() => {
        setPage(item.page);
        setIsOpen(false);
      }}
      className="block w-full text-left py-3 text-white/80 hover:text-white font-medium transition-colors"
    >
      {item.name}
    </button>
  ))}
</div>
      </div>
    </nav>
  );
};

const HomePage = ({ setPage }) => {
  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      {/* Hero Section with Floating Mabati */}
      <div className="relative min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900/20" />
        
        {/* Floating Mabati Photos */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingMabati 
            src={IMAGES.redWave} 
            alt="Red corrugated roofing" 
            className="w-64 h-40 top-20 right-10 opacity-90"
            delay={0}
          />
          <FloatingMabati 
            src={IMAGES.Black} 
            alt="Black wave roofing" 
            className="w-56 h-36 top-40 left-10 opacity-85"
            delay={2}
          />
          <FloatingMabati 
            src={IMAGES.CoffeeBrown} 
            alt="Gray tile roofing" 
            className="w-60 h-44 bottom-40 right-20 opacity-90"
            delay={4}
          />
          <FloatingMabati 
            src={IMAGES.brown} 
            alt="Brown tile roofing" 
            className="w-52 h-38 bottom-20 left-20 opacity-85"
            delay={1}
          />
          <FloatingMabati 
            src={IMAGES.Maroon} 
            alt="Red stone coated" 
            className="w-48 h-32 top-60 right-1/3 opacity-80"
            delay={3}
          />
          <FloatingMabati 
            src={IMAGES.terracotta} 
            alt="Gray wave roofing" 
            className="w-56 h-40 bottom-60 left-1/3 opacity-85"
            delay={5}
          />
          <FloatingMabati 
            src={IMAGES.TerracottawithPatches} 
            alt="Brown tile roofing" 
            className="w-60 h-44 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90"
            delay={6}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
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
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setPage('products')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Explore Products <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setPage('contact')}
                className="border-2 border-slate-600 hover:border-white text-slate-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
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

          {/* Featured Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
              <img 
                src={IMAGES.display} 
                alt="Avienna Roofing Collection" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-900/80 backdrop-blur-md rounded-xl p-4 border border-slate-700">
                  <p className="text-white font-semibold">Complete Roofing Collection</p>
                  <p className="text-slate-400 text-sm">Stone Coated • Corrugated • Custom Colors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Weather Resistant", desc: "Engineered to withstand extreme weather conditions" },
              { icon: Clock, title: "50 Year Lifespan", desc: "Premium materials built for generations" },
              { icon: Award, title: "Certified Quality", desc: "International standards compliance guaranteed" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-colors group">
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                  <feature.icon className="text-orange-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Color Palette</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Based on our premium stone-coated specifications. Each color is carefully crafted 
            to provide both aesthetic appeal and long-lasting durability.
          </p>
        </div>

        {/* Reference Image */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 p-6">
          <img 
            src={IMAGES.colorGuide} 
            alt="Color Guide Reference" 
            className="w-auto max-w-4xl mx-auto rounded-xl shadow-2xl"
          />
          <p className="text-center text-slate-400 mt-4 text-sm">Official Avienna Color Specification Chart</p>
        </div>

        {/* Color Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLOR_DEFINITIONS.map((color, idx) => (
            <div key={idx} className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-500/10">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={color.image} 
                  alt={color.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: color.hex }} />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{color.name}</h3>
                <p className="text-slate-400 text-sm mb-3">{color.description}</p>
                <div className="flex items-center justify-between">
                  <code className="text-xs bg-slate-900 px-3 py-1 rounded text-slate-300 font-mono">{color.hex}</code>
                  <span className="text-orange-400 text-sm font-medium">In Stock</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Gallery */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Product Gallery</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[IMAGES.Black, IMAGES.CoffeeBrown, IMAGES.redWave, IMAGES.terracotta, IMAGES.TerracottawithPatches, IMAGES.Maroon, IMAGES.brown, IMAGES.CoffeeBrownwithPatches].map((img, idx) => (
              <div key={idx} className="aspect-square rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
                <img src={img} alt={`Product ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Avienna</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Avienna Roofing Solutions has established itself as a premier provider of high-quality 
                roofing materials in the region. With our stone-coated technology, we bring 
                international standards to local architecture.
              </p>
              <p>
                Our products feature a robust 26-gauge steel core, coated with natural stone chips 
                that provide both stunning aesthetics and superior weather protection. Each tile 
                weighs 2.8kg and measures 1.29m in length with 0.39m width.
              </p>
              <p>
                We stand behind our products with an industry-leading 50-year warranty, 
                demonstrating our confidence in the durability and performance of every roof 
                we help create.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-500 mb-1">15+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-500 mb-1">10k+</div>
                <div className="text-slate-400">Roofs Installed</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.redTile} alt="Red tiles" className="rounded-2xl shadow-xl" />
              <img src={IMAGES.grayTile} alt="Gray tiles" className="rounded-2xl shadow-xl mt-8" />
              <img src={IMAGES.brownTile} alt="Brown tiles" className="rounded-2xl shadow-xl -mt-8" />
              <img src={IMAGES.blackWave} alt="Black wave" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Specifications</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">26</div>
              <div className="text-slate-300 font-medium">Steel Gauge</div>
              <div className="text-slate-500 text-sm mt-1">Thickness standard</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">2.8<span className="text-xl">kg</span></div>
              <div className="text-slate-300 font-medium">Tile Weight</div>
              <div className="text-slate-500 text-sm mt-1">Per piece</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">1.29<span className="text-xl">m</span></div>
              <div className="text-slate-300 font-medium">Length</div>
              <div className="text-slate-500 text-sm mt-1">Standard size</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">0.39<span className="text-xl">m</span></div>
              <div className="text-slate-300 font-medium">Width</div>
              <div className="text-slate-500 text-sm mt-1">Coverage width</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const ContactPage = () => {
  return (
<div className="min-h-screen bg-slate-900 pt-44 pb-12">
  <div className="max-w-7xl mx-auto px-6">

    {/* ✅ Heading */}
    <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
      Get Quote via <span className="text-red-300">Email</span> / <span className="text-green-400">WhatsApp</span>
    </h1>

    <div className="grid lg:grid-cols-2 gap-16">

      {/* LEFT: Contact Info */}
      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
            <Phone className="text-orange-500" size={24} />
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Phone</h4>
            <p className="text-slate-400">+254 797 825 403</p>
            <p className="text-slate-400">+254 793 842 939</p>
          </div>
        </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <a href="mailto:Immaculatekiambi@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="text-orange-500" size={24} />
                </a>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <p className="text-slate-400">Immaculatekiambi@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <MapPin className="text-orange-500" size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Location</h4>
                <p className="text-slate-400">Industrial Area, Nairobi</p>
                <p className="text-slate-400">Kenya</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Social Icons */}
          <div className="flex items-center justify-center">
            <div className="flex flex-row gap-6">
              {[
                { icon: FaWhatsapp, link: "https://wa.me/+254797825403", color: "hover:text-green-500" },
                { icon: FaFacebookF, link: "https://web.facebook.com/profile.php?id=61586587001611", color: "hover:text-blue-500" },
                { icon: FaInstagram, link: "https://www.instagram.com/aviennaroofingcompany08?igsh=ajJlb3d1Y2oyNDZq", color: "hover:text-pink-500" },
                { icon: FaTiktok, link: "https://www.tiktok.com/@aviennaroofingcompany8?_r=1&_t=ZS-95WjbA4B2uI", color: "hover:text-pink-500" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-800 border border-slate-700 text-slate-400 transition-all duration-300 ${item.color} hover:-translate-y-1 hover:shadow-xl`}
                  >
                    <Icon size={28} />

                    {/* Hover line */}
                    <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-current transition-all duration-300 group-hover:w-full"></span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/254797825403"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300">
        
        {/* Pulse effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping"></span>

        {/* Icon */}
        <FaWhatsapp size={28} className="text-white relative z-10" />
      </div>
    </a>
  );
};

const Footer = ({ setPage }) => (
  <footer className="bg-slate-950 border-t border-slate-800 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <img src={IMAGES.logo} alt="Avienna Logo" />
            </div>
            <span className="text-2xl font-bold text-white">Avienna</span>
          </div>
          <p className="text-slate-400 max-w-sm">
            Premium stone-coated and corrugated roofing solutions. 
            50-year warranty on all products. Built for Kenya's climate.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li><button onClick={() => setPage('home')} className="hover:text-orange-400 transition-colors">Home</button></li>
            <li><button onClick={() => setPage('about')} className="hover:text-orange-400 transition-colors">About Us</button></li>
            <li><button onClick={() => setPage('products')} className="hover:text-orange-400 transition-colors">Products</button></li>
            <li><button onClick={() => setPage('contact')} className="hover:text-orange-400 transition-colors">Contact</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-slate-400">
            <li>+254 797 825 403</li>
            <li>Immaculatekiambi@gmail.com</li>
            <li>Industrial Area, Nairobi</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">© 2024 Avienna Roofing. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="text-slate-500 text-sm">50 Year Warranty</span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-500 text-sm">26 Gauge Steel</span>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Navigation currentPage={page} setPage={setPage} />
      
      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'products' && <ProductsPage />}
      {page === 'about' && <AboutPage />}
      {page === 'contact' && <ContactPage />}
      
      <Footer setPage={setPage} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;