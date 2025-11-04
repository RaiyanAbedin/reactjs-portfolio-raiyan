import React, { useState, useEffect } from 'react';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} py-4 flex justify-between items-center sticky top-0 z-50`}>
      <div className="text-2xl font-bold text-white ml-8 gradient-text">
        
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden mr-8">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {/* Hamburger icon */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Navigation links for larger screens */}
      <nav className="hidden md:flex space-x-4 mr-8">
        <a href="#home" className="nav-item text-lg font-bold">Home</a>
        <a href="#about" className="nav-item text-lg font-bold">About Me</a>
        <a href="#projects" className="nav-item text-lg font-bold">Projects</a>
        <a href="#technologies-education" className="nav-item text-lg font-bold">Education</a>
        <a href="#contact" className="nav-item text-lg font-bold">Contact</a>
      </nav>

      {/* Mobile menu (visible when toggled) */}
      {menuOpen && (
        <nav className="absolute top-16 right-8 bg-purple-900 p-6 rounded-lg shadow-lg z-40 md:hidden">
          <a href="#home" className="block nav-item text-lg font-bold text-white mb-4" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block nav-item text-lg font-bold text-white mb-4" onClick={toggleMenu}>About Me</a>
          <a href="#projects" className="block nav-item text-lg font-bold text-white mb-4" onClick={toggleMenu}>Projects</a>
          <a href="#technologies-education" className="block nav-item text-lg font-bold text-white mb-4" onClick={toggleMenu}>Education</a>
          <a href="#contact" className="block nav-item text-lg font-bold text-white mb-4" onClick={toggleMenu}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
