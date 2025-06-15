import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 px-4">
<div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">        
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold">🌤️ WeatherNow</div>

        {/* Navigation Links */}
        <ul className="flex flex-row flex-wrap items-center gap-4 text-sm">          <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li>
          <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Social Media */}
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-pink-500 transition"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-blue-600 transition"><i className="fab fa-facebook"></i></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-3 text-xs text-gray-400">
        © {new Date().getFullYear()} WeatherNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;