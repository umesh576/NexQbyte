"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import servicesData from "@/lib/servicesData.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (!next) setMobileServicesOpen(false);
      return next;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Package", href: "/package" },
    {
      name: "Services",
      href: "/services",
      dropdown: servicesData.map((service) => ({
        name: service.menuTitle,
        href: service.href,
      })),
    },
    { name: "About Us", href: "/about" },
    { name: "Connect Us", href: "/connection" },
  ];

  const mobileSocialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/NEXQBYTEbyte",
      icon: <FaInstagram className="text-base" />,
      style:
        "from-pink-500/20 to-orange-400/20 border-pink-300/40 text-pink-600 hover:text-pink-700",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@NEXQBYTEbyte",
      icon: <SiTiktok className="text-base" />,
      style:
        "from-slate-900/20 to-cyan-300/20 border-slate-400/40 text-slate-700 hover:text-black",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/NEXQBYTEbyte",
      icon: <FaFacebookF className="text-base" />,
      style:
        "from-blue-500/20 to-indigo-500/20 border-blue-300/40 text-blue-600 hover:text-blue-700",
    },
  ];

  const handleDropdownHover = (index) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  return (
    <header
      className={`w-full font-sans sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Top bar - Hidden on mobile */}
      <div className="hidden lg:block bg-linear-to-r from-[#1B1F3B] to-[#2a2f55] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2.5">
          <div className="flex items-center justify-between">
            {/* Left: contact details */}
            <div className="flex items-center gap-6 text-gray-300 text-sm">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#F9A826] group-hover:rotate-12 transition-transform" />
                <a href="tel:+9779849748294" className="hover:text-[#F9A826]">
                  +977 9849748294
                </a>
              </motion.div>
              <div className="w-px h-4 bg-gray-600"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#F9A826] group-hover:rotate-12 transition-transform" />
                <a
                  href="mailto:nexqbytesolution@gmail.com"
                  className="hover:text-[#F9A826]"
                >
                  nexqbytesolution@gmail.com
                </a>
              </motion.div>
              <div className="w-px h-4 bg-gray-600"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#F9A826]" />
                <span>Kathmandu, Nepal</span>
              </motion.div>
            </div>

            {/* Right: Tagline with animation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-gray-300 text-sm"
            >
              <div>
                We Serve:{" "}
                <span className="text-[#F9A826] font-semibold relative group">
                  Skill, Growth, Experiences
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F9A826] group-hover:w-full transition-all duration-300"></span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                {mobileSocialLinks.map((social) => (
                  <motion.a
                    key={`desktop-${social.name}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ y: -2, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:text-[#F9A826] transition-colors"
                  >
                    <span className="relative z-10">{social.icon}</span>
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`bg-white transition-all duration-300 ${
          scrolled ? "py-2 shadow-md" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative h-12 w-40 sm:h-14 sm:w-44"
            >
              <Image
                src="/logo.jpeg"
                alt="NexQbyte Logo"
                fill
                className="object-contain"
                priority
              />

            </motion.div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleDropdownHover(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-[#1B1F3B] font-medium rounded-lg hover:text-[#F9A826] transition-all duration-300 group-hover:bg-[#F9A826]/5 ${
                        activeDropdown === index
                          ? "text-[#F9A826] bg-[#F9A826]/5"
                          : ""
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                        >
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F9A826]/10 hover:text-[#F9A826] transition-colors border-b border-gray-50 last:border-0"
                              onClick={closeMenu}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-[#1B1F3B] font-medium rounded-lg hover:text-[#F9A826] transition-all duration-300 group-hover:bg-[#F9A826]/5"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F9A826] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Apply Now button */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:inline-flex relative overflow-hidden group bg-linear-to-r from-[#F9A826] to-[#e09616] text-[#1B1F3B] text-sm font-bold py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="relative cursor-pointer z-10">Apply Now</span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-[#F9A826]/10 text-[#1B1F3B] hover:bg-[#F9A826] hover:text-white transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-linear-to-b from-white to-gray-50 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="sticky top-4 ml-auto mr-4 mt-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-md hover:bg-[#F9A826] hover:text-white transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                  <div className="relative h-10 w-32">
                    <Image
                      src="/logo.jpeg"
                      alt="NexQbyte Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <button
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile contact info */}
                <div className="mb-6 space-y-3 pb-4 border-b border-gray-200">
                  <a
                    href="tel:+9779849748294"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#F9A826] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#F9A826]" />
                    <span className="text-sm">+977 9849748294</span>
                  </a>
                  <a
                    href="mailto:nexqbytesolution@gmail.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#F9A826] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#F9A826]" />
                    <span className="text-sm">nexqbytesolution@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-4 h-4 text-[#F9A826]" />
                    <span className="text-sm">Kathmandu, Nepal</span>
                  </div>
                </div>

                {/* Mobile navigation */}
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div className="rounded-xl border border-gray-200 bg-white">
                          <button
                            onClick={() => setMobileServicesOpen((prev) => !prev)}
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium"
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                mobileServicesOpen ? "rotate-180 text-[#F9A826]" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden border-t border-gray-100"
                              >
                                <div className="p-2 space-y-1">
                                  {item.dropdown.map((dropItem) => (
                                    <Link
                                      key={dropItem.name}
                                      href={dropItem.href}
                                      onClick={closeMenu}
                                      className="block px-3 py-2.5 text-sm text-gray-600 hover:text-[#F9A826] hover:bg-[#F9A826]/5 rounded-lg transition-all"
                                    >
                                      {dropItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 hover:text-[#F9A826] hover:bg-[#F9A826]/5 transition-all font-medium"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile tagline */}
                <div className="mt-8 p-4 bg-linear-to-r from-[#F9A826]/10 to-transparent rounded-lg">
                  <p className="text-sm text-gray-600">
                    We Serve:{" "}
                    <span className="text-[#F9A826] font-semibold">
                      Skill, Growth, Experiences
                    </span>
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.08 }}
                    className="mt-4"
                  >
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                      Follow Us
                    </p>
                    <div className="flex items-center gap-3">
                      {mobileSocialLinks.map((social, index) => (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.25,
                            delay: 0.18 + index * 0.08,
                          }}
                          whileHover={{ y: -3, scale: 1.06 }}
                          whileTap={{ scale: 0.92 }}
                          className={`group relative overflow-hidden inline-flex h-10 w-10 items-center justify-center rounded-full border bg-linear-to-br ${social.style} shadow-sm transition-all duration-300`}
                        >
                          <span className="relative z-10">{social.icon}</span>
                          <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/40 transition-opacity duration-300"></span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
