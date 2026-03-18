import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaSearch,
  FaClock,
  FaHandshake,
  FaRocket,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { MdOutlineSecurity, MdOutlineSupportAgent } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";

export const metadata = {
  title: "Why Your Business Needs a Website | NexQbyte",
  description:
    "Discover why having a professional website is crucial for your business success and why NexQbyte is your perfect technology partner.",
};

const Page = () => {
  const benefits = [
    {
      title: "24/7 Online Presence",
      description:
        "Your business never sleeps. A website works round the clock, showcasing your products and services even when you're closed.",
      icon: <FaClock className="text-3xl text-blue-500" />,
    },
    {
      title: "Global Reach",
      description:
        "Break geographical barriers. Reach customers beyond your local area and expand your business to national and international markets.",
      icon: <FaGlobe className="text-3xl text-green-500" />,
    },
    {
      title: "Credibility & Trust",
      description:
        "93% of consumers check online presence before making a purchase. A professional website builds trust and legitimacy.",
      icon: <FaShieldAlt className="text-3xl text-purple-500" />,
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "Digital marketing through your website costs significantly less than traditional advertising with better ROI tracking.",
      icon: <BsGraphUpArrow className="text-3xl text-orange-500" />,
    },
    {
      title: "24/7 Customer Service",
      description:
        "FAQs, chatbots, and contact forms provide instant support, answering customer queries anytime.",
      icon: <MdOutlineSupportAgent className="text-3xl text-teal-500" />,
    },
    {
      title: "Mobile Accessibility",
      description:
        "With over 60% of web traffic from mobile devices, a responsive website captures this growing market.",
      icon: <FaMobileAlt className="text-3xl text-pink-500" />,
    },
  ];

  const stats = [
    { number: "75%", label: "Consumers judge credibility by website design" },
    { number: "81%", label: "Research online before making a purchase" },
    { number: "3x", label: "More likely to trust businesses with websites" },
    { number: "50%", label: "Increase in sales with professional website" },
  ];

  const whyNexQbyte = [
    {
      title: "Expert Development Team",
      description:
        "10+ years of combined experience in web development, modern technologies, and industry best practices.",
      icon: <FaRocket className="text-3xl text-blue-500" />,
    },
    {
      title: "Tailored Solutions",
      description:
        "We don't use templates. Every website is custom-built to match your brand identity and business goals.",
      icon: <FaCheckCircle className="text-3xl text-green-500" />,
    },
    {
      title: "SEO Optimized",
      description:
        "Built with search engines in mind. Your website will be optimized for better Google rankings from day one.",
      icon: <FaSearch className="text-3xl text-purple-500" />,
    },
    {
      title: "Ongoing Support",
      description:
        "We don't just build and leave. Enjoy 6 months of free maintenance and 24/7 support availability.",
      icon: <FaHandshake className="text-3xl text-orange-500" />,
    },
    {
      title: "Security First",
      description:
        "SSL certificates, regular updates, and security audits to protect your business and customer data.",
      icon: <MdOutlineSecurity className="text-3xl text-teal-500" />,
    },
    {
      title: "Proven Track Record",
      description:
        "50+ successful projects delivered across Nepal with 98% client satisfaction rate.",
      icon: <FaAward className="text-3xl text-pink-500" />,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description:
        "We discuss your business goals, target audience, and website requirements.",
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description:
        "We create a roadmap, sitemap, and wireframes for your approval.",
    },
    {
      step: "03",
      title: "Design & Development",
      description:
        "Our team builds your website with modern technologies and responsive design.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "Rigorous testing across devices before making your site live.",
    },
    {
      step: "05",
      title: "Growth & Support",
      description:
        "We help you grow with SEO, marketing, and ongoing maintenance.",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#1A2F4B] to-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-linear(circle at 2px 2px, #3B82F6 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-6 border border-blue-500/30">
              <HiOutlineSparkles className="text-blue-500" />
              <span className="text-blue-500 font-medium">
                Why Your Business Needs a Website
              </span>
              <HiOutlineSparkles className="text-blue-500" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Digital <span className="text-blue-500">Storefront</span>{" "}
              Matters
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              In today&apos;s digital age, your website is often the first
              interaction potential customers have with your brand. Make it
              count with a professional, high-performance website that converts
              visitors into loyal customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-blue-500 text-black rounded-full font-semibold hover:bg-blue-400 transition-all transform hover:scale-105"
              >
                Get Your Website Today
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-linear-to-b from-blue-500/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                  {stat.number}
                </div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Your <span className="text-blue-500">Business Needs</span> a
              Website
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A professional website is no longer optional - it&apos;s essential
              for business growth and credibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NexQbyte Section */}
      <section className="py-20 bg-linear-to-b from-blue-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why <span className="text-blue-500">Collaborate</span> with
              NexQbyte?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We don&apos;t just build websites – we build digital experiences
              that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyNexQbyte.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-blue-500">Simple Process</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We make getting your website easy and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500 font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-xs">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 border-t-2 border-r-2 border-blue-500/30 rotate-45"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-linear-to-b from-blue-500/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center">
                <FaUsers className="text-4xl text-blue-500" />
              </div>
              <div>
                <p className="text-white/80 text-lg italic mb-4">
                  NexQbyte transformed our online presence completely. Within 3
                  months of launching our new website, we saw a 150% increase in
                  inquiries and our revenue doubled. Their team is professional,
                  responsive, and truly cares about our success.
                </p>
                <div>
                  <p className="text-white font-semibold">- Rajesh Sharma</p>
                  <p className="text-white/50 text-sm">
                    CEO, Mountain Ventures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to <span className="text-blue-500">Grow Your Business</span>{" "}
              Online?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Let&apos;s discuss your project and create a website that drives
              real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-blue-500 text-black rounded-full font-semibold hover:bg-blue-400 transition-all"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all"
              >
                See Our Portfolio
              </Link>
            </div>
            <p className="text-white/30 text-sm mt-6">
              No obligation. Just a friendly chat about your business goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
