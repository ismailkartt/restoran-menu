import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white text-gray-900 shadow-md' : 'bg-transparent text-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold">Restoran</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:opacity-75 transition-opacity">Home</a>
            <a href="#menu" className="hover:opacity-75 transition-opacity">Menu</a>
            <a href="#about" className="hover:opacity-75 transition-opacity">About</a>
            <a href="#contact" className="hover:opacity-75 transition-opacity">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">Home</a>
            <a href="#menu" className="block px-3 py-2 rounded-md hover:bg-gray-100">Menu</a>
            <a href="#about" className="block px-3 py-2 rounded-md hover:bg-gray-100">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-100">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;