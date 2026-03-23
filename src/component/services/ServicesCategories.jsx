// components/services/ServicesCategories.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaRobot,
  FaChartLine,
  FaCloud,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ServicesCategories = () => {
  const [activeCategory, setActiveCategory] = useState("web-dev");

  const categories = [
    {
      id: "web-dev",
      title: "Web Development",
      href: "/services/website",
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      description:
        "Custom websites, web applications, and e-commerce solutions",
      color: "from-blue-500 to-blue-600",
      count: 6,
    },
    {
      id: "app-dev",
      title: "App Development",
      href: "/services/appdevelopment",
      icon: <FaMobileAlt className="text-green-500 text-2xl" />,
      description: "Native iOS, Android, and cross-platform mobile apps",
      color: "from-green-500 to-green-600",
      count: 4,
    },
    {
      id: "graphics",
      title: "Graphics Design",
      href: "/services/graphicsDesigning",
      icon: <FaPalette className="text-purple-500 text-2xl" />,
      description: "Brand identity, UI/UX design, and creative visuals",
      color: "from-purple-500 to-purple-600",
      count: 5,
    },
    {
      id: "ai-services",
      title: "AI & Automation",
      href: null,
      icon: <FaRobot className="text-orange-500 text-2xl" />,
      description: "Machine learning, AI solutions, and process automation",
      color: "from-orange-500 to-orange-600",
      count: 4,
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      href: "/services/digitalmarketing",
      icon: <FaChartLine className="text-pink-500 text-2xl" />,
      description: "SEO, social media, PPC, and content marketing",
      color: "from-pink-500 to-pink-600",
      count: 5,
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      href: null,
      icon: <FaCloud className="text-cyan-500 text-2xl" />,
      description: "Cloud migration, hosting, and infrastructure management",
      color: "from-cyan-500 to-cyan-600",
      count: 3,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            End-to-end IT solutions for businesses of all sizes
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`cursor-pointer ${
                activeCategory === category.id ? "ring-4 ring-blue-200" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gray-100">
                    {category.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-500">
                    {category.count} services
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                {category.href ? (
                  <Link
                    href={category.href}
                    className="inline-flex items-center justify-center rounded-lg bg-gray-800 px-4 py-2 text-sm font-semibold text-white hover:bg-black transition-colors"
                  >
                    View Service
                  </Link>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-500">
                    Coming Soon
                  </span>
                )}
                <div
                  className={`mt-4 h-2 w-full rounded-full bg-linear-to-r ${category.color}`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Category Description */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-linear-to-r from-gray-50 to-blue-50 rounded-3xl p-8"
        >
          <div className="flex items-center mb-6">
            <div className="p-3 bg-blue-600 text-white rounded-xl mr-4">
              {categories.find((c) => c.id === activeCategory)?.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {categories.find((c) => c.id === activeCategory)?.title}
              </h3>
              <p className="text-gray-600">
                {categories.find((c) => c.id === activeCategory)?.description}
              </p>
              {categories.find((c) => c.id === activeCategory)?.href && (
                <Link
                  href={categories.find((c) => c.id === activeCategory)?.href}
                  className="mt-2 inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Go to Service Page
                </Link>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activeCategory === "web-dev" &&
              [
                "Custom Website Development",
                "E-commerce Solutions",
                "CMS Development",
                "Web Portals",
                "Progressive Web Apps",
                "API Integration",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="text-2xl mb-2">🌐</div>
                  <div className="font-medium text-gray-800">{item}</div>
                  <div className="text-xs text-blue-600 mt-1">
                    Starting at Rs 70,000
                  </div>
                </div>
              ))}

            {activeCategory === "app-dev" &&
              [
                "iOS App Development",
                "Android App Development",
                "Cross-Platform Apps",
                "App Maintenance",
                "App Store Optimization",
                "Enterprise Apps",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="text-2xl mb-2">📱</div>
                  <div className="font-medium text-gray-800">{item}</div>
                  <div className="text-xs text-green-600 mt-1">
                    Starting at RS 100,000
                  </div>
                </div>
              ))}

            {activeCategory === "graphics" &&
              [
                "Logo & Brand Identity",
                "UI/UX Design",
                "Social Media Graphics",
                "Print Design",
                "Motion Graphics",
                "Packaging Design",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-medium text-gray-800">{item}</div>
                  <div className="text-xs text-purple-600 mt-1">
                    Starting at Rs 15,000
                  </div>
                </div>
              ))}

            {activeCategory === "ai-services" &&
              [
                "Machine Learning Models",
                "Chatbot Development",
                "Data Analytics",
                "Process Automation",
                "Computer Vision",
                "Predictive Analytics",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="font-medium text-gray-800">{item}</div>
                  <div className="text-xs text-orange-600 mt-1">
                    Custom Pricing
                  </div>
                </div>
              ))}

            {activeCategory === "digital-marketing" &&
              [
                "SEO Optimization",
                "Social Media Marketing",
                "PPC Campaigns",
                "Content Marketing",
                "Email Marketing",
                "Analytics & Reporting",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="text-2xl mb-2">📈</div>
                  <div className="font-medium text-gray-800">{item}</div>
                  <div className="text-xs text-pink-600 mt-1">
                    Starting at Rs 30000 /month
                  </div>
                </div>
              ))}

            {activeCategory === "cloud" &&
              [
                "Cloud Migration",
                "AWS/Azure Services",
                "Cloud Hosting",
                "Infrastructure Management",
                "DevOps Services",
                "Backup & Security",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="text-2xl mb-2">☁️</div>
                  <div className="font-medium text-gray-800">{item}</div>
                  <div className="text-xs text-cyan-600 mt-1">Custom Plans</div>
                </div>
              ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: "⚡",
              title: "Fast Delivery",
              desc: "On-time project completion",
            },
            {
              icon: "🔒",
              title: "Secure Code",
              desc: "Best security practices",
            },
            {
              icon: "💬",
              title: "24/7 Support",
              desc: "Round-the-clock assistance",
            },
            { icon: "📊", title: "Scalable", desc: "Grow with your business" },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-4">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-bold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCategories;
