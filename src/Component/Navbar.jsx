import React from 'react';
import { Search } from 'lucide-react'; // Optional: install lucide-react for the icon

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <h1 className="text-3xl font-bold tracking-tight text-black" style={{ fontFamily: 'cursive' }}>
          Sport News
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-500 font-medium">
        <li className="text-black font-bold cursor-pointer border-b-2 border-black">Home</li>
        <li className="hover:text-black cursor-pointer transition-colors">Category</li>
        <li className="hover:text-black cursor-pointer transition-colors">Trending News</li>
        <li className="hover:text-black cursor-pointer transition-colors">Recent News</li>
        <li className="hover:text-black cursor-pointer transition-colors">Clubs Ranking</li>
        <li className="hover:text-black cursor-pointer transition-colors">Sports Article</li>
      </ul>

      {/* Search Bar Section */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#C1C9D2] text-white placeholder-white pl-10 pr-4 py-2 rounded-lg focus:outline-none w-48"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-white" />
      </div>
    </nav>
  );
}

export default Navbar;