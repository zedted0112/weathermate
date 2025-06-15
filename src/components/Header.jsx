import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">WeatherMate</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 hover:scale-105 transition">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 hover:scale-105 transition">About</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 hover:scale-105 transition">Services</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 hover:scale-105 transition">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Services</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;