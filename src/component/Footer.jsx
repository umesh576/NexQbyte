"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import servicesData from "@/lib/servicesData.json";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Career", href: "/career" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/connection" },
    { name: "Package", href: "/package" },
    { name: "Admin", href: "/admin" },
  ];

  const services = servicesData.map((service) => ({
    name: service.menuTitle,
    href: service.href,
  }));

  const industries = [
    { name: "E-commerce", href: "/industries/ecommerce" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Finance", href: "/industries/finance" },
    { name: "Education", href: "/industries/education" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Startups", href: "/industries/startups" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com/NEXQBYTEbyte",
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/NEXQBYTEbyte",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/NEXQBYTEbyte",
      label: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com/company/NEXQBYTEbyte",
      label: "LinkedIn",
    },
    {
      icon: <FaYoutube />,
      href: "https://youtube.com/NEXQBYTEbyte",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-[#0a1a3a] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <div className="text-2xl font-bold tracking-wider text-white mb-1">
                NEXQBYTE
              </div>
              <div className="text-xs tracking-[0.3em] text-blue-300 font-semibold">
                SOLUTION
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted technology partner for digital transformation. We
              deliver innovative web, mobile, AI, and cloud solutions that help
              businesses grow and succeed in the digital age.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-blue-900 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-800">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-blue-800">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 shrink-0" />
                <span className="text-gray-300">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3 shrink-0" />
                <span className="text-gray-300">+977 9849748294</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3 shrink-0" />
                <span className="text-gray-300">nexqbytesolution@gmail.com
</span>
              </li>
              <li className="flex items-start">
                <FaClock className="text-blue-400 mt-1 mr-3 shrink-0" />
                <span className="text-gray-300">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <h3 className="text-center text-xl font-bold mb-6">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.href}
                className="px-4 py-2 bg-blue-900/50 hover:bg-blue-800 rounded-full text-sm transition-all duration-300 hover:scale-105"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0a1129] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NEXQBYTE IT Solutions. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-40"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
