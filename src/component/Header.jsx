"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Study in Nepal", href: "/nepal" },
    { name: "Study Abroad", href: "/abroad" },
    { name: "Destinations", href: "/destinations" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const countries = [
    { name: "Australia", flag: "🇦🇺" },
    { name: "UK", flag: "🇬🇧" },
    { name: "USA", flag: "🇺🇸" },
    { name: "Korea", flag: "🇰🇷" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "Georgia", flag: "🇬🇪" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "Germany", flag: "🇩🇪" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0a2463] to-[#1e3a8a] text-white shadow-lg">
      {/* Top Bar */}
      <div className="border-b border-blue-800 py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-2 md:mb-0">
            <div className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-blue-300"></i>
              <span>+977 1-1234567</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-300"></i>
              <span>info@astraeducation.com</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-300"></i>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Country Flags */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-xs text-blue-300 mr-2">We Serve:</span>
            <div className="flex gap-1">
              {countries.map((country) => (
                <span
                  key={country.name}
                  className="text-lg hover:scale-110 transition-transform cursor-help"
                  title={`Study in ${country.name}`}
                >
                  {country.flag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold tracking-wider text-white">
                ASTRA
              </div>
              <div className="text-xs tracking-[0.3em] text-blue-300 font-semibold mt-1">
                INTERNATIONAL EDUCATION
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button className="ml-4 px-6 py-2 bg-white text-[#0a2463] font-semibold rounded-md hover:bg-blue-100 transition-colors duration-200">
              Apply Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 rounded-md hover:bg-blue-800 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-blue-800">
                <h4 className="text-blue-300 text-sm font-semibold mb-2">
                  Study Destinations:
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {countries.map((country) => (
                    <div
                      key={country.name}
                      className="flex flex-col items-center p-2 bg-blue-900 rounded hover:bg-blue-800"
                    >
                      <span className="text-2xl">{country.flag}</span>
                      <span className="text-xs mt-1">{country.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="mt-4 px-6 py-3 bg-white text-[#0a2463] font-semibold rounded-md hover:bg-blue-100 transition-colors duration-200">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
