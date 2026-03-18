import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaGithub,
  FaAward,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaStar,
  FaClock,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdSecurity, MdDashboard } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbApi, TbBrandReact } from "react-icons/tb";

export const metadata = {
  title: "Our Portfolio | NexQbyte - Digital Solutions",
  description:
    "Explore our successful projects in web development, mobile apps, e-commerce, and digital solutions across various industries.",
};

const Page = () => {
  // Featured Projects
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      client: "Nepal Mart",
      description:
        "A full-featured e-commerce platform with inventory management, payment gateway integration, and real-time order tracking.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: [
        "500+ products listed",
        "10,000+ monthly visitors",
        "99.9% uptime",
        "Mobile responsive",
      ],
      results: "150% increase in online sales within 3 months",
      link: "#",
      github: "#",
      featured: true,
      icon: <FaShoppingCart className="text-[#5aba70]" />,
    },
    {
      id: 2,
      title: "Hotel Booking System",
      category: "Web Application",
      client: "Pokhara Paradise Hotels",
      description:
        "Complete hotel management system with online booking, room management, and automated confirmation emails.",
      image: "/projects/hotel.jpg",
      technologies: ["Next.js", "PostgreSQL", "Tailwind", "Redis"],
      features: [
        "50+ hotels integrated",
        "Real-time availability",
        "Multi-language support",
        "Payment integration",
      ],
      results:
        "40% increase in direct bookings, saved 20+ hours/week manual work",
      link: "#",
      github: "#",
      featured: true,
      icon: <FaGlobe className="text-[#084885]" />,
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile App",
      client: "Himalayan Bank",
      description:
        "Secure mobile banking application with biometric login, fund transfers, bill payments, and transaction history.",
      image: "/projects/banking.jpg",
      technologies: ["React Native", "Node.js", "MySQL", "Firebase"],
      features: [
        "50,000+ downloads",
        "4.8★ app store rating",
        "Bank-grade security",
        "24/7 support",
      ],
      results: "Processed 100,000+ transactions in first month",
      link: "#",
      github: "#",
      featured: true,
      icon: <MdSecurity className="text-[#5aba70]" />,
    },
  ];

  // All Projects
  const projects = [
    {
      id: 4,
      title: "Restaurant POS System",
      category: "Desktop Software",
      client: "Foodie's Paradise",
      description:
        "Complete point-of-sale system with inventory tracking, employee management, and sales analytics.",
      image: "/projects/pos.jpg",
      technologies: ["Electron", "React", "SQLite", "Chart.js"],
      results: "Reduced order processing time by 60%",
      link: "#",
    },
    {
      id: 5,
      title: "Healthcare Portal",
      category: "Web App",
      client: "City Hospital",
      description:
        "Patient management portal with appointment scheduling, medical records, and doctor consultations.",
      image: "/projects/healthcare.jpg",
      technologies: ["Vue.js", "Django", "PostgreSQL", "AWS"],
      results: "Serving 10,000+ patients monthly",
      link: "#",
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "Web Development",
      client: "Nepal Properties",
      description:
        "Property listing platform with advanced search, virtual tours, and agent dashboards.",
      image: "/projects/realestate.jpg",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Google Maps"],
      results: "1,500+ properties listed in 6 months",
      link: "#",
    },
    {
      id: 7,
      title: "Inventory Management",
      category: "Web App",
      client: "Nepal Distributors",
      description:
        "Real-time inventory tracking system with barcode scanning and automated reordering.",
      image: "/projects/inventory.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      results: "Reduced stockouts by 80%",
      link: "#",
    },
    {
      id: 8,
      title: "Fitness Tracker App",
      category: "Mobile App",
      client: "FitNepal",
      description:
        "Mobile app for workout tracking, nutrition planning, and progress monitoring.",
      image: "/projects/fitness.jpg",
      technologies: ["Flutter", "Firebase", "GetX"],
      results: "10,000+ active users",
      link: "#",
    },
    {
      id: 9,
      title: "Educational LMS",
      category: "Web Platform",
      client: "Nepal Online School",
      description:
        "Learning management system with video courses, quizzes, and student progress tracking.",
      image: "/projects/lms.jpg",
      technologies: ["Next.js", "Node.js", "MongoDB", "FFmpeg"],
      results: "5,000+ students enrolled",
      link: "#",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <FaRocket /> },
    { number: "98%", label: "Client Satisfaction", icon: <FaStar /> },
    { number: "10+", label: "Industry Experts", icon: <FaUsers /> },
    { number: "5+", label: "Years Experience", icon: <FaClock /> },
  ];

  const industries = [
    "E-commerce",
    "Hospitality",
    "Banking & Finance",
    "Healthcare",
    "Education",
    "Real Estate",
    "Retail",
    "Logistics",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#084885] to-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #5aba70 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#5aba70]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#084885]/40 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#5aba70]/10 px-4 py-2 rounded-full mb-6 border border-[#5aba70]/30 animate-fadeIn">
              <HiOutlineSparkles className="text-[#5aba70]" />
              <span className="text-[#5aba70] font-medium">Our Portfolio</span>
              <HiOutlineSparkles className="text-[#5aba70]" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slideUp">
              Transforming Ideas Into{" "}
              <span className="text-[#5aba70]">Digital Reality</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto animate-slideUp animation-delay-200">
              Explore our successful projects across various industries. From
              e-commerce platforms to mobile apps, we deliver solutions that
              drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:border-[#5aba70]/30 transition-all duration-500 hover:-translate-y-2 group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl text-[#5aba70] mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-[#5aba70]">Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our best work that showcases our expertise and dedication to
              quality
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#5aba70]/30 transition-all duration-500 hover:-translate-y-2 group animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-[#5aba70]/20 to-[#084885]/40 flex items-center justify-center overflow-hidden">
                  <div className="w-16 h-16 bg-[#5aba70]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#5aba70]/20 backdrop-blur-sm px-3 py-1 rounded-full animate-pulse">
                    <span className="text-[#5aba70] text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#5aba70] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/40 text-sm">{project.client}</p>
                    </div>
                  </div>

                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-white/70 mb-2">
                      Technologies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/60 hover:bg-[#5aba70]/20 hover:text-[#5aba70] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-white/70 mb-2">
                      Key Features:
                    </div>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-white/60 flex items-center gap-2"
                        >
                          <FaCheckCircle className="text-[#5aba70] text-xs" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-[#5aba70]/10 rounded-lg border border-[#5aba70]/20">
                    <span className="text-[#5aba70] text-sm font-medium">
                      Result:{" "}
                    </span>
                    <span className="text-white/70 text-sm">
                      {project.results}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={project.link}
                      className="flex-1 py-2 bg-[#5aba70] text-black rounded-lg font-medium text-sm hover:bg-[#084885] hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
                    >
                      <FaExternalLinkAlt className="text-xs" /> View Project
                    </Link>
                    <Link
                      href={project.github}
                      className="p-2 bg-white/5 rounded-lg hover:bg-[#5aba70]/20 transition-all duration-300"
                    >
                      <FaGithub className="text-white/70" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gradient-to-b from-[#5aba70]/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We <span className="text-[#5aba70]">Serve</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We have experience across diverse industries, delivering tailored
              solutions for each sector
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-[#5aba70]/30 hover:bg-[#5aba70]/10 transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-white/70 hover:text-[#5aba70] transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              More <span className="text-[#5aba70]">Projects</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explore our complete portfolio of successful deliveries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#5aba70]/30 transition-all duration-300 hover:-translate-y-1 group animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#5aba70] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-xs">{project.client}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-[#5aba70]/20 text-[#5aba70] rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-white/60 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-1 bg-white/5 rounded-full text-white/50 hover:bg-[#5aba70]/20 hover:text-[#5aba70] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] px-2 py-1 bg-white/5 rounded-full text-white/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#5aba70] text-xs font-medium">
                    {project.results}
                  </span>
                  <Link
                    href={project.link}
                    className="text-white/40 hover:text-[#5aba70] transition-colors text-sm flex items-center gap-1"
                  >
                    Details <FaExternalLinkAlt className="text-xs" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your{" "}
              <span className="text-[#5aba70]">Project</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Let&apos;s discuss how we can help bring your ideas to life with
              the same quality and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#5aba70] text-black rounded-full font-semibold hover:bg-[#084885] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/why-website"
                className="px-8 py-3 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-[#5aba70]/20 hover:border-[#5aba70]/30 transition-all duration-300 transform hover:scale-105"
              >
                Learn Why Website Matters
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
