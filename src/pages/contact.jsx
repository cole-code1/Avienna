import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTiktok, FaInstagram } from 'react-icons/fa';

const FloatingIcon = ({ children, delay, className, href, label }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const i = setInterval(() => {
      const t = Date.now()/1000 + delay;
      setPos({ x: Math.sin(t)*30, y: Math.cos(t)*30 });
    }, 50);
    return ()=>clearInterval(i);
  }, [delay]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ transform:`translate(${pos.x}px,${pos.y}px)` }}
      className={`absolute text-6xl ${className} hover:scale-110 transition-transform duration-300 cursor-pointer`}
    >
      {children}
    </a>
  );
};

export default function Contact(){
  return (
    <div className="h-screen relative bg-slate-900 overflow-hidden">
      {/* WhatsApp */}
      <FloatingIcon
        delay={0}
        className="top-20 left-20 text-green-500"
        href="https://wa.me/254700000000"
        label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </FloatingIcon>

      {/* Instagram */}
      <FloatingIcon
        delay={2}
        className="top-40 right-20 text-pink-500"
        href="https://instagram.com/yourusername"
        label="Visit Instagram"
      >
        <FaInstagram />
      </FloatingIcon>

      {/* TikTok */}
      <FloatingIcon
        delay={4}
        className="bottom-20 left-1/2 text-white"
        href="https://tiktok.com/@yourusername"
        label="Visit TikTok"
      >
        <FaTiktok />
      </FloatingIcon>

      <div className="flex items-center justify-center h-full">
