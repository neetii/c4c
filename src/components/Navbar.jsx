import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar({ setRoute }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (routeName) => {
    setRoute(routeName);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#F0DA9D] border-b-4 border-[#CD3838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center"
            >
              <img
                src={logo}
                alt="C4C Logo"
                className="h-12 w-12 mr-2"
              />
              <span className="text-3xl font-bold text-[#CD3838]">C4C</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => handleNavClick("home")} className="text-gray-800 hover:text-[#CD3838] transition-colors font-medium text-lg">
              Home
            </button>
            <button onClick={() => handleNavClick("about")} className="text-gray-800 hover:text-[#CD3838] transition-colors font-medium text-lg">
              About
            </button>
            <button onClick={() => handleNavClick("donation")} className="text-gray-800 hover:text-[#CD3838] transition-colors font-medium text-lg">
              Donate
            </button>
            <button onClick={() => handleNavClick("impact")} className="text-gray-800 hover:text-[#CD3838] transition-colors font-medium text-lg">
              Impact
            </button>
            <button onClick={() => handleNavClick("contact")} className="text-gray-800 hover:text-[#CD3838] transition-colors font-medium text-lg">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#CD3838]/10 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleNavClick("home")}
                className="text-gray-800 hover:text-[#CD3838] transition-colors font-medium text-lg py-2 text-right"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="text-gray-800 hover:text-[#CD3838] transition-colors font-medium text-lg py-2 text-right"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("donation")}
                className="text-gray-800 hover:text-[#CD3838] transition-colors font-medium text-lg py-2 text-right"
              >
                Donate
              </button>
              <button
                onClick={() => handleNavClick("impact")}
                className="text-gray-800 hover:text-[#CD3838] transition-colors font-medium text-lg py-2 text-right"
              >
                Impact
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-gray-800 hover:text-[#CD3838] transition-colors font-medium text-lg py-2 text-right"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
