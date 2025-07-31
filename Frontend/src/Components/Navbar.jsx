import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#eac1c1] to-[#d49aad] text-white w-full fixed top-0 left-0 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="h-14 w-14">
          <img src={Logo} alt="Logo" className="h-full w-full object-cover rounded-full" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-white hover:text-[#b88e8e] hover:underline underline-offset-4 transition duration-300 text-lg font-semibold"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#d49aad] space-y-3">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-[#5a2a38] transition-all duration-300 text-lg font-semibold"
              style={{ fontFamily: "'Pacifico', cursive" }}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
