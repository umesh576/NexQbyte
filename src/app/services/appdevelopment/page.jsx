import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaReact,
  FaRocket,
  FaUsers,
  FaStar,
  FaClock,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaDownload,
  FaChartLine,
  FaShoppingCart,
  FaCreditCard,
  FaBell,
  FaMapMarkerAlt,
  FaCamera,
  FaQrcode,
} from "react-icons/fa";
import {
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import { MdSecurity, MdDashboard, MdAnalytics } from "react-icons/md";
import { BsGraphUpArrow, BsPhone } from "react-icons/bs";
import { TbBrandReactNative, TbApi, TbCloudComputing } from "react-icons/tb";
import { GiSmartphone } from "react-icons/gi";

export const metadata = {
  title: "App Development | NexQbyte - Mobile App Solutions",
  description:
    "Transform your business with custom mobile apps. Learn why your company needs an app and how NexQbyte can help you succeed.",
};

const Page = () => {
  const benefits = [
    {
      title: "Direct Customer Access",
      description:
        "Reach customers directly on their most personal device - their smartphone. Push notifications and in-app messaging keep them engaged.",
      icon: <GiSmartphone className="text-3xl text-[#5aba70]" />,
      stat: "90%",
      statLabel: "of time spent on mobile is in apps",
    },
    {
      title: "Increased Engagement",
      description:
        "Apps provide 4x higher engagement than websites. Users spend more time and return more frequently to apps they love.",
      icon: <FaChartLine className="text-3xl text-[#5aba70]" />,
      stat: "4x",
      statLabel: "higher engagement than websites",
    },
    {
      title: "Brand Loyalty",
      description:
        "Build stronger relationships with customers through personalized experiences, loyalty programs, and seamless interactions.",
      icon: <FaStar className="text-3xl text-[#5aba70]" />,
      stat: "70%",
      statLabel: "of users are more loyal to brands with apps",
    },
    {
      title: "Revenue Growth",
      description:
        "Monetize through in-app purchases, subscriptions, and targeted offers. Apps generate 3x more revenue per visitor than mobile sites.",
      icon: <BsGraphUpArrow className="text-3xl text-[#5aba70]" />,
      stat: "3x",
      statLabel: "more revenue than mobile websites",
    },
    {
      title: "Offline Access",
      description:
        "Apps can work without internet connection, allowing users to access content and features anytime, anywhere.",
      icon: <FaDownload className="text-3xl text-[#5aba70]" />,
      stat: "24/7",
      statLabel: "access even without internet",
    },
    {
      title: "Device Features",
      description:
        "Leverage device capabilities like camera, GPS, fingerprint, and notifications for richer user experiences.",
      icon: <FaCamera className="text-3xl text-[#5aba70]" />,
      stat: "15+",
      statLabel: "device features accessible",
    },
  ];

  const appTypes = [
    {
      title: "E-Commerce Apps",
      description:
        "Sell products directly through mobile apps with secure payments, order tracking, and personalized recommendations.",
      icon: <FaShoppingCart className="text-4xl text-[#084885]" />,
      features: [
        "Product catalogs",
        "Secure checkout",
        "Order tracking",
        "Push notifications",
      ],
    },
    {
      title: "Service Apps",
      description:
        "Connect service providers with customers through booking, scheduling, and real-time tracking.",
      icon: <FaMapMarkerAlt className="text-4xl text-[#084885]" />,
      features: [
        "Real-time tracking",
        "Booking system",
        "Rating & reviews",
        "In-app chat",
      ],
    },
    {
      title: "Content Apps",
      description:
        "Deliver rich media content, articles, videos, and courses with offline access and subscriptions.",
      icon: <HiOutlineLightBulb className="text-4xl text-[#084885]" />,
      features: [
        "Offline access",
        "Subscriptions",
        "Push notifications",
        "Analytics",
      ],
    },
    {
      title: "Business Apps",
      description:
        "Streamline internal operations with employee apps for task management, communication, and reporting.",
      icon: <MdDashboard className="text-4xl text-[#084885]" />,
      features: [
        "Task management",
        "Employee portal",
        "Real-time reports",
        "Secure access",
      ],
    },
  ];

  const stats = [
    { number: "50+", label: "Apps Developed", icon: <FaMobileAlt /> },
    { number: "98%", label: "Client Satisfaction", icon: <FaStar /> },
    { number: "4.8★", label: "Avg App Store Rating", icon: <FaStar /> },
    { number: "1M+", label: "Total Downloads", icon: <FaDownload /> },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We understand your business goals, target audience, and app requirements.",
      icon: <HiOutlineLightBulb />,
    },
    {
      step: "02",
      title: "Design",
      description:
        "Create intuitive UI/UX designs with wireframes and prototypes for your approval.",
      icon: <HiOutlineDeviceMobile />,
    },
    {
      step: "03",
      title: "Development",
      description:
        "Build your app using cutting-edge technologies like React Native and Flutter.",
      icon: <TbBrandReactNative />,
    },
    {
      step: "04",
      title: "Testing",
      description:
        "Rigorous testing across devices to ensure perfect performance.",
      icon: <FaCheckCircle />,
    },
    {
      step: "05",
      title: "Launch",
      description:
        "Publish to App Store and Google Play with ASO optimization.",
      icon: <FaRocket />,
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance, updates, and feature enhancements.",
      icon: <FaUsers />,
    },
  ];

  const whyNexQbyte = [
    {
      title: "Cross-Platform Expertise",
      description:
        "We build apps for both iOS and Android using React Native and Flutter, saving you time and money.",
      icon: <TbBrandReactNative className="text-3xl text-[#5aba70]" />,
    },
    {
      title: "UI/UX Excellence",
      description:
        "Our designers create beautiful, intuitive interfaces that users love and keep coming back to.",
      icon: <HiOutlineLightBulb className="text-3xl text-[#5aba70]" />,
    },
    {
      title: "Scalable Architecture",
      description:
        "We build apps that grow with your business, handling increasing users and features seamlessly.",
      icon: <TbCloudComputing className="text-3xl text-[#5aba70]" />,
    },
    {
      title: "API Integration",
      description:
        "Seamless integration with your existing systems, payment gateways, and third-party services.",
      icon: <TbApi className="text-3xl text-[#5aba70]" />,
    },
    {
      title: "App Store Optimization",
      description:
        "We optimize your app listing for better visibility and more downloads in app stores.",
      icon: <FaDownload className="text-3xl text-[#5aba70]" />,
    },
    {
      title: "Post-Launch Support",
      description:
        "We don't disappear after launch. We provide ongoing maintenance and feature updates.",
      icon: <FaUsers className="text-3xl text-[#5aba70]" />,
    },
  ];

  const features = [
    "Push Notifications",
    "Social Login",
    "Payment Integration",
    "In-App Purchases",
    "Real-time Chat",
    "Location Services",
    "Offline Mode",
    "Analytics",
    "Biometric Auth",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#084885] to-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-linear(circle at 2px 2px, #5aba70 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Animated Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#5aba70]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#084885]/40 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        {/* Floating Icons */}
        <div className="absolute top-40 right-20 text-[#5aba70]/10 hidden lg:block">
          <FaAndroid className="text-8xl rotate-12 animate-float" />
        </div>
        <div className="absolute bottom-40 left-20 text-[#5aba70]/10 hidden lg:block">
          <FaApple className="text-8xl -rotate-12 animate-float animation-delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#5aba70]/10 px-4 py-2 rounded-full mb-6 border border-[#5aba70]/30 animate-fadeIn">
              <HiOutlineSparkles className="text-[#5aba70]" />
              <span className="text-[#5aba70] font-medium">
                App Development
              </span>
              <HiOutlineSparkles className="text-[#5aba70]" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slideUp">
              Transform Your Business With a{" "}
              <span className="text-[#5aba70]">Mobile App</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto animate-slideUp animation-delay-200">
              Reach customers where they spend most of their time – on mobile.
              Create powerful, engaging experiences that drive growth and build
              lasting relationships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-400">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#5aba70] text-black rounded-full font-semibold hover:bg-[#084885] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Start Your App Project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-[#5aba70]/20 hover:border-[#5aba70]/30 transition-all duration-300 transform hover:scale-105"
              >
                View Our Apps
              </Link>
            </div>
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

      {/* Why Your Business Needs an App */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Your Business Needs a{" "}
              <span className="text-[#5aba70]">Mobile App</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Mobile apps are no longer optional - they&apos;re essential for
              business growth and customer engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#5aba70]/30 transition-all duration-500 hover:-translate-y-2 group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-[#5aba70]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#5aba70]">
                      {benefit.stat}
                    </span>
                    <p className="text-white/40 text-xs">{benefit.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#5aba70] transition-colors">
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

      {/* Types of Apps We Build */}
      <section className="py-20 bg-linear-to-b from-[#5aba70]/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Types of <span className="text-[#5aba70]">Apps We Build</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From e-commerce to enterprise solutions, we create apps that
              deliver results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {appTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#5aba70]/30 transition-all duration-500 hover:-translate-y-2 group animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#084885]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#5aba70] transition-colors">
                      {type.title}
                    </h3>
                  </div>
                </div>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {type.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-[#5aba70] text-xs" />
                      <span className="text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful <span className="text-[#5aba70]">Features</span> We
              Integrate
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Every app comes packed with essential features for modern mobile
              experiences
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-[#5aba70]/30 hover:bg-[#5aba70]/10 transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-white/70 hover:text-[#5aba70] transition-colors flex items-center gap-2">
                  <FaCheckCircle className="text-[#5aba70] text-xs" />
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Collaborate with NexQbyte */}
      <section className="py-20 bg-linear-to-b from-[#084885]/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why <span className="text-[#5aba70]">Collaborate</span> with
              NexQbyte?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We&apos;re not just developers – we&apos;re your technology
              partners committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyNexQbyte.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#5aba70]/30 transition-all duration-500 hover:-translate-y-2 group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#5aba70]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#5aba70] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
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
              Our <span className="text-[#5aba70]">App Development</span>{" "}
              Process
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A proven methodology to deliver high-quality apps on time and on
              budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#5aba70]/30 transition-all duration-500 hover:-translate-y-2 group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#5aba70] rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {step.step}
                </div>
                <div className="w-14 h-14 bg-[#5aba70]/10 rounded-xl flex items-center justify-center mb-4 text-2xl text-[#5aba70] group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#5aba70] transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-linear-to-b from-[#5aba70]/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#5aba70]/30 transition-all">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-[#5aba70]/20 flex items-center justify-center">
                  <FaUsers className="text-4xl text-[#5aba70]" />
                </div>
                <div>
                  <p className="text-white/80 text-lg italic mb-4">
                    NexQbyte developed our mobile banking app that now serves
                    over 50,000 customers. Their expertise in security and user
                    experience has been invaluable. The app has a 4.8★ rating!
                  </p>
                  <div>
                    <p className="text-white font-semibold">- Rajesh Sharma</p>
                    <p className="text-white/50 text-sm">CTO, Himalayan Bank</p>
                  </div>
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
              Ready to Build Your <span className="text-[#5aba70]">App</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Let&apos;s discuss your app idea and create something amazing
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#5aba70] text-black rounded-full font-semibold hover:bg-[#084885] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-[#5aba70]/20 hover:border-[#5aba70]/30 transition-all duration-300 transform hover:scale-105"
              >
                View Our Apps
              </Link>
            </div>
            <p className="text-white/30 text-sm mt-6">
              No obligation. Just a friendly chat about your app ideas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
