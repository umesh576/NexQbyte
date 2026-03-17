"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaChevronRight,
  FaCheckCircle,
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaRobot,
  FaMobile,
  FaGlobe,
} from "react-icons/fa";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [clientsServed, setClientsServed] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);

  // Statistics animation
  useEffect(() => {
    const animateCount = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
      return timer;
    };

    const timer1 = animateCount(setProjectsCompleted, 350, 2500);
    const timer2 = animateCount(setClientsServed, 180, 1800);
    const timer3 = animateCount(setTeamMembers, 25, 3000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);

  const handleVideoControl = () => {
    const video = document.getElementById("hero-video");
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Featured Services
  const featuredServices = [
    {
      name: "Web Development",
      duration: "Responsive",
      icon: "🌐",
    },
    {
      name: "Mobile App Dev",
      duration: "iOS/Android",
      icon: "📱",
    },
    {
      name: "Digital Marketing",
      duration: "360° Solutions",
      icon: "📈",
      projects: "200+",
    },
    {
      name: "Graphics Design",
      duration: "Creative",
      icon: "🎨",
    },
    {
      name: "AI Services",
      duration: "ML/AI Solutions",
      icon: "🤖",
    },
    {
      name: "UI/UX Design",
      duration: "User Centric",
      icon: "✨",
    },
  ];

  const benefits = [
    "10+ Satisfied Clients Worldwide",
    "Expert Team of 15+ Developers",
    "24/7 Technical Support",
    "On-Time Project Delivery",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          id="hero-video"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover brightness-90"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-linear-to-br from-[#0a2463] via-[#1e3a8a] to-[#3b82f6]"></div>
        </video>

        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/40"></div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-3 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
        <button
          onClick={handleVideoControl}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
        </button>
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="text-white hover:text-blue-300 transition-colors"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 relative py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full mb-6 border border-blue-400/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">
                Digital Innovation Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-blue-300">Digital Solutions,</span>
              <span className="block">Real Results</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Nexqbyte IT Solutions delivers world-class website development,
              mobile applications, digital marketing, graphics design, and
              AI-powered services. We turn your ideas into digital reality.
            </p>

            {/* Benefits Highlights */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-400 shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/30"
              >
                Explore Our Services
                <FaChevronRight className="ml-2" />
              </Link>
              <Link
                href="/connection"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Right Content - Stats & Services */}
          <div className="space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">
                  {projectsCompleted}+
                </div>
                <div className="text-sm text-blue-200">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">
                  {clientsServed}+
                </div>
                <div className="text-sm text-blue-200">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-1">
                  {teamMembers}+
                </div>
                <div className="text-sm text-blue-200">Expert Team</div>
              </div>
            </div>

            {/* Featured Services */}
            <div className="bg-linear-to-br from-[#0a2463]/40 to-[#1e3a8a]/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Our Core Services
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {featuredServices.map((service) => (
                  <div
                    key={service.name}
                    className="flex flex-col items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <div className="text-xs font-medium text-white text-center mb-1">
                      {service.name}
                    </div>
                    <div className="text-xs text-blue-300">
                      {service.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators - Updated for IT Company */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <h3 className="text-center text-xl font-bold text-white mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Startups", icon: "🚀", count: "5+" },
              { name: "E-commerce", icon: "🛒", count: "1+" },
              { name: "Healthcare", icon: "🏥", count: "2+" },
              { name: "Education", icon: "📚", count: "2+" },
              { name: "Hopitality", icon: "🏨", count: "2+" },
              { name: "Fashion", icon: "👗", count: "1+" },
            ].map((industry) => (
              <div key={industry.name} className="text-center">
                <div className="text-3xl mb-2">{industry.icon}</div>
                <div className="text-white font-bold">{industry.count}</div>
                <div className="text-sm text-gray-300">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-12 text-center">
          <p className="text-sm text-blue-200 mb-3">
            Powered by cutting-edge technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Node.js", "Python", "AWS", "MongoDB", "Figma"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-20 flex flex-col gap-3">
        <a
          href="tel:+9779849748294"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <span className="text-xl">📞</span>
          <span className="font-semibold">Call Now</span>
        </a>
        <a
          href="https://wa.me/+9779849748294"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <span className="text-xl">💬</span>
          <span className="font-semibold">WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
