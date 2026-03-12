import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-[#F8F9FC] shadow-sm font-sans">
      {/* Top bar: contact and tagline */}
      <div className="bg-[#1B1F3B] text-white text-sm py-2.5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between">
          {/* left: contact details */}
          <div className="flex items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400" />
              <span>+977 9849748294</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400" />
              <span>nexqbytesolution@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

          {/* right: "We Serve: Skill, Growth, Experiences" */}
          <div className="text-gray-300 text-sm">
            We Serve:{" "}
            <span className="text-white font-semibold">
              Skill, Growth, Experiences
            </span>
          </div>
        </div>
      </div>

      {/* Main header: Logo + Navigation + Apply button */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-white">
        {/* Logo with dummy image - REPLACE THIS SRC WITH YOUR ACTUAL LOGO */}
        <div className="flex items-center">
          <div className="relative h-12 w-40">
            <Image
              src="/logo.jpeg"
              alt="NexQore Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[#1B1F3B] font-medium">
          <Link href="/" className="hover:text-[#F9A826] transition-colors">
            Home
          </Link>
          <Link
            href="/package"
            className="hover:text-[#F9A826] transition-colors"
          >
            Package
          </Link>
          <Link
            href="/training"
            className="hover:text-[#F9A826] transition-colors"
          >
            Training
          </Link>
          <Link
            href="/services"
            className="hover:text-[#F9A826] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/about-us"
            className="hover:text-[#F9A826] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/connect-us"
            className="hover:text-[#F9A826] transition-colors"
          >
            Connect Us
          </Link>
        </nav>

        {/* Apply Now button */}
        <div className="flex items-center gap-4">
          <button className="bg-[#F9A826] hover:bg-[#e09616] text-[#1B1F3B] text-sm font-bold py-2.5 px-6 rounded-md transition duration-200 shadow-sm">
            Apply Now
          </button>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-[#1B1F3B] hover:text-[#F9A826] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile contact row */}
      <div className="lg:hidden bg-[#1B1F3B] text-gray-300 px-6 py-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
        <div className="flex items-center gap-1">
          <Phone className="w-3 h-3" /> +977 1-1234567
        </div>
        <div className="flex items-center gap-1">
          <Mail className="w-3 h-3" /> info@nexqore.com
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-3 h-3" /> Kathmandu
        </div>
        <div className="text-gray-300 ml-auto">
          <span className="text-white font-medium">Skill, Growth, Exp</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
