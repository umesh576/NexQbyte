"use client";

import React, { useState } from "react";
// import ServiceCard from "@/components/ServiceCard";
// import CategoryFilter from "@/components/CategoryFilter";
// import StatsSection from "@/components/StatsSection";
// import TestimonialSection from "@/components/TestimonialSection";
// import FAQSection from "@/components/FAQSection";
import { services } from "@/lib/servicesData";
import StatsSection from "@/component/package/StatsSection";
import CategoryFilter from "@/component/package/CategoryFilter";
import ServiceCard from "@/component/package/ServiceCard";
import TestimonialSection from "@/component/package/TestimonialSection";
import FAQSection from "@/component/package/FAQSection";

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            IT Services Pricing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transparent pricing for web development, mobile apps, graphic
            design, and comprehensive IT solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-colors">
              Get Free Quote
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Stats Section */}
        <StatsSection />

        {/* Category Filter */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Service
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Select from our comprehensive range of IT services. Each package is
            tailored to meet specific business needs.
          </p>
        </div>

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Every business is unique. Contact us for a personalized quote
            tailored to your specific requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="grow px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Get Custom Quote
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <TestimonialSection />

        {/* FAQ Section */}
        <FAQSection />
      </div>

      {/* Footer Note */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">
            All prices are in USD. Payment plans available for projects over
            $2,000.
          </p>
          <p className="text-gray-400 mt-2">
            Prices may vary based on project complexity and specific
            requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
