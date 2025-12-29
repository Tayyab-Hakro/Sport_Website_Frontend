import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function Footer() {
  return (
    <div className="w-[88%] bg-[#f4f5f7] font-sans">
      {/* 1. NEWSLETTER BANNER SECTION */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="relative overflow-hidden bg-[#e9ecef] rounded-sm flex flex-col md:flex-row items-center justify-between min-h-[320px] px-8 md:px-16">
          
          {/* Text and Input */}
          <div className="z-10 py-12 w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-[#2d3436] leading-[0.9] tracking-tighter uppercase">
              Newsletter<br />
              <span className="text-gray-400">Subscription</span>
            </h2>
            
            <div className="mt-8 flex w-full max-w-md border border-gray-400 rounded-sm overflow-hidden bg-white/40 backdrop-blur-sm">
              <input 
                type="email" 
                placeholder="shovon.khan0099@gmail.com" 
                className="bg-transparent px-4 py-4 w-full outline-none text-gray-700 placeholder-gray-400 font-medium"
              />
              <button className="bg-[#2d3436] text-white px-5 hover:bg-black transition-colors">
                <ArrowUpRight size={24} />
              </button>
            </div>
          </div>

          {/* Athlete Image Placeholder */}
          <div className="relative md:absolute right-0 bottom-0 h-full w-full md:w-1/2 flex justify-end items-end pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=800" 
              alt="Athlete" 
              className="h-[115%] object-contain object-bottom"
              style={{ filter: 'grayscale(20%)' }}
            />
          </div>
        </div>

        {/* Socials & Pagination Bar */}
        <div className="mt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-300">
          <div className="flex gap-3">
            {[<Facebook size={18} fill="currentColor"/>, <Instagram size={18}/>, <Twitter size={18} fill="currentColor"/>].map((icon, i) => (
              <div key={i} className="bg-[#2d3436] p-2.5 text-white rounded-sm cursor-pointer hover:bg-gray-600 transition-all">
                {icon}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 text-gray-400 font-bold">
            <button className="bg-gray-300 p-2 rounded-sm text-white"><ChevronLeft size={24} /></button>
            <div className="flex items-center gap-6">
              <span className="bg-[#2d3436] text-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">1</span>
              <span className="cursor-pointer hover:text-black">2</span>
              <span className="cursor-pointer hover:text-black">3</span>
              <span className="cursor-pointer hover:text-black">4</span>
            </div>
            <button className="bg-[#2d3436] p-2 rounded-sm text-white"><ChevronRight size={24} /></button>
          </div>
        </div>
      </div>

      {/* 2. SITE FOOTER SECTION */}
      <footer className=" text-gray-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Info */}
            <div className="space-y-4">
              <h3 className="text-white text-xl font-black uppercase tracking-widest">Logo.</h3>
              <p className="text-sm leading-relaxed">
                Elevating the game through premium content and community engagement. Join us on the journey to excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Latest News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Player Stats</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Upcoming Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop Merchandise</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Get In Touch</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3"><MapPin size={16} /> 123 Stadium Way, NY</li>
                <li className="flex items-center gap-3"><Phone size={16} /> +1 (555) 000-9988</li>
                <li className="flex items-center gap-3"><Mail size={16} /> contact@brand.com</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-700 text-center text-xs text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Your Brand Name. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;