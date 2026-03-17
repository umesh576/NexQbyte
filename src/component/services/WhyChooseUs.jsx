"use client";
// components/services/WhyChooseUs.jsx
import {
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaCode,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WhyChooseUs = () => {
  const router = useRouter();
  const benefits = [
    {
      icon: <FaRocket className="text-blue-500 text-2xl" />,
      title: "Fast Time-to-Market",
      description:
        "Agile development methodology delivering projects 30% faster than industry average",
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-2xl" />,
      title: "Secure & Scalable",
      description:
        "Enterprise-grade security with scalable architecture for future growth",
    },
    {
      icon: <FaHeadset className="text-purple-500 text-2xl" />,
      title: "24/7 Technical Support",
      description:
        "Round-the-clock maintenance and support for all your digital solutions",
    },
    {
      icon: <FaCode className="text-orange-500 text-2xl" />,
      title: "Modern Tech Stack",
      description:
        "Latest technologies including React, Node.js, Python, AI/ML, and Cloud",
    },
    {
      icon: <FaClock className="text-red-500 text-2xl" />,
      title: "On-Time Delivery",
      description:
        "95% of projects delivered on or before deadline with transparent tracking",
    },
    {
      icon: <FaDollarSign className="text-emerald-500 text-2xl" />,
      title: "Cost-Effective Solutions",
      description:
        "Competitive pricing with flexible engagement models and no hidden costs",
    },
    {
      icon: <FaUsers className="text-pink-500 text-2xl" />,
      title: "Dedicated Team",
      description:
        "25+ skilled developers, designers, and strategists working on your project",
    },
    {
      icon: <FaAward className="text-yellow-500 text-2xl" />,
      title: "Quality Assured",
      description:
        "ISO-certified processes with rigorous testing and quality checks",
    },
  ];
  const patnerCompany = [
    {
      companyName: "fadeXPlay",
      logo: "/patner/fadeXplay.jpeg",
    },
    {
      companyName: "Hookan69",
      logo: "/patner/hookah69.jpg",
    },
    {
      companyName: "Paradise Engineering",
      logo: "/patner/paradise.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-blue-600">Nexqbyte Solution?</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business understanding to
            deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex flex-col items-start">
                <div className="p-3 rounded-xl bg-blue-50 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Trusted By</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {patnerCompany.map((company, index) => (
              <div key={index} className="group relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200">
                  <Image
                    width={1000}
                    height={1000}
                    src={company.logo}
                    alt={company.companyName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full shadow-md">
                    {company.companyName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              router.push("/connection");
            }}
            className="px-10 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Project Today
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Free consultation • No commitment • 24hr response
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
