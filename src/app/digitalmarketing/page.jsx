import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPaintBrush,
  FaPalette,
  FaPenFancy,
  FaFont,
  FaImage,
  FaVideo,
  FaRocket,
  FaUsers,
  FaStar,
  FaClock,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaDownload,
  FaChartLine,
  FaShoppingCart,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaCamera,
  FaMagic,
  FaVectorSquare,
} from "react-icons/fa";
import {
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlinePhotograph,
  HiOutlineColorSwatch,
} from "react-icons/hi";
import {
  MdSecurity,
  MdDashboard,
  MdAnalytics,
  MdDesignServices,
} from "react-icons/md";
import { BsGraphUpArrow, BsBrush, BsPencilFill } from "react-icons/bs";
import {
  TbBrandAdobe,
  TbBrandFigma,
  TbBrandSketch,
  TbBrandCanva,
} from "react-icons/tb";
import { GiPaintBrush, GiModernCity, GiAbstract001 } from "react-icons/gi";

export const metadata = {
  title: "Graphic Design | NexQbyte - Creative Design Solutions",
  description:
    "Transform your brand with stunning visual designs. Learn why professional graphic design is essential for your business and how NexQbyte can help you stand out.",
};

const Page = () => {
  const benefits = [
    {
      title: "First Impressions Matter",
      description:
        "Users form an opinion about your brand in just 0.05 seconds. Professional design creates instant trust and credibility.",
      icon: <FaStar className="text-3xl text-[#5aba70]" />,
      stat: "0.05s",
      statLabel: "to make first impression",
    },
    {
      title: "Brand Recognition",
      description:
        "Consistent visual identity increases brand recognition by up to 80%. Stand out from competitors with unique designs.",
      icon: <FaPalette className="text-3xl text-[#5aba70]" />,
      stat: "80%",
      statLabel: "higher brand recognition",
    },
    {
      title: "Increased Engagement",
      description:
        "Visual content is 40x more likely to be shared on social media. Good design drives engagement and conversions.",
      icon: <FaChartLine className="text-3xl text-[#5aba70]" />,
      stat: "40x",
      statLabel: "more social shares",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Well-designed websites and marketing materials can increase conversion rates by up to 200%.",
      icon: <FaShoppingCart className="text-3xl text-[#5aba70]" />,
      stat: "200%",
      statLabel: "higher conversion rates",
    },
    {
      title: "Professional Credibility",
      description:
        "75% of consumers judge a company's credibility by its website design. Poor design drives customers away.",
      icon: <MdSecurity className="text-3xl text-[#5aba70]" />,
      stat: "75%",
      statLabel: "judge credibility by design",
    },
    {
      title: "Emotional Connection",
      description:
        "Great design evokes emotions and creates lasting connections with your audience, building brand loyalty.",
      icon: <FaHeart className="text-3xl text-[#5aba70]" />,
      stat: "90%",
      statLabel: "of decisions are emotional",
    },
  ];

  const services = [
    {
      title: "Logo & Brand Identity",
      description:
        "Create a memorable brand identity with custom logos, color palettes, and brand guidelines.",
      icon: <FaPenFancy className="text-4xl text-[#084885]" />,
      deliverables: [
        "Logo Design",
        "Brand Guidelines",
        "Business Cards",
        "Letterheads",
      ],
    },
    {
      title: "Marketing Materials",
      description:
        "Eye-catching brochures, flyers, posters, and banners that convert viewers into customers.",
      icon: <FaImage className="text-4xl text-[#084885]" />,
      deliverables: ["Brochures", "Flyers", "Posters", "Banners"],
    },
    {
      title: "Social Media Graphics",
      description:
        "Engaging social media posts, covers, and ads that stop the scroll and drive engagement.",
      icon: <FaInstagram className="text-4xl text-[#084885]" />,
      deliverables: ["Posts", "Stories", "Cover Photos", "Ad Creatives"],
    },
    {
      title: "Packaging Design",
      description:
        "Beautiful product packaging that stands out on shelves and creates unboxing experiences.",
      icon: <FaVectorSquare className="text-4xl text-[#084885]" />,
      deliverables: [
        "Product Boxes",
        "Labels",
        "Packaging Inserts",
        "Shopping Bags",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered designs for websites and apps that are both beautiful and functional.",
      icon: <MdDesignServices className="text-4xl text-[#084885]" />,
      deliverables: ["Wireframes", "Prototypes", "Mobile UI", "Web UI"],
    },
    {
      title: "Motion Graphics",
      description:
        "Animated logos, explainer videos, and social media animations that capture attention.",
      icon: <FaVideo className="text-4xl text-[#084885]" />,
      deliverables: [
        "Logo Animations",
        "Explainer Videos",
        "Social Animations",
        "GIFs",
      ],
    },
  ];

  const stats = [
    { number: "500+", label: "Design Projects", icon: <FaPaintBrush /> },
    { number: "98%", label: "Client Satisfaction", icon: <FaStar /> },
    { number: "200+", label: "Happy Clients", icon: <FaUsers /> },
    { number: "8+", label: "Years Experience", icon: <FaClock /> },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We understand your brand, target audience, and design requirements.",
      icon: <HiOutlineLightBulb />,
    },
    {
      step: "02",
      title: "Research",
      description:
        "Market research and competitor analysis to inform design direction.",
      icon: <FaChartLine />,
    },
    {
      step: "03",
      title: "Concept",
      description: "Create initial concepts and mood boards for your feedback.",
      icon: <HiOutlineColorSwatch />,
    },
    {
      step: "04",
      title: "Design",
      description:
        "Develop detailed designs with multiple rounds of refinement.",
      icon: <FaPaintBrush />,
    },
    {
      step: "05",
      title: "Review",
      description: "Present designs for feedback and make necessary revisions.",
      icon: <FaCheckCircle />,
    },
    {
      step: "06",
      title: "Delivery",
      description:
        "Provide final files in all required formats with source files.",
      icon: <FaDownload />,
    },
  ];

  const whyNexQbyte = [
    {
      title: "Creative Excellence",
      description:
        "Our designers combine artistic talent with strategic thinking to create designs that work.",
      icon: <FaMagic className="text-3xl text-[#5aba70]" />,
    },
    {
      title: "Industry Experience",
      description:
        "We've designed for diverse industries from hospitality to finance, understanding each unique need.",
      icon: <GiModernCity className="text-3xl text-[#5aba70]" />,
    },
    {
      title: "Latest Tools",
      description:
        "We use industry-leading tools like Adobe Creative Suite, Figma, and Sketch for premium results.",
      icon: <TbBrandAdobe className="text-3xl text-[#5aba70]" />,
    },
    {
      title: "Fast Turnaround",
      description:
        "Quick iterations and efficient workflows mean you get your designs when you need them.",
      icon: <FaClock className="text-3xl text-[#5aba70]" />,
    },
    {
      title: "Unlimited Revisions",
      description:
        "We're not happy until you're happy. We offer unlimited revisions until design perfection.",
      icon: <FaCheckCircle className="text-3xl text-[#5aba70]" />,
    },
    {
      title: "Commercial Rights",
      description:
        "You get full commercial rights to all designs. No hidden fees or royalties.",
      icon: <FaStar className="text-3xl text-[#5aba70]" />,
    },
  ];

  const tools = [
    { name: "Adobe Photoshop", icon: <TbBrandAdobe /> },
    { name: "Adobe Illustrator", icon: <TbBrandAdobe /> },
    { name: "Adobe InDesign", icon: <TbBrandAdobe /> },
    { name: "Figma", icon: <TbBrandFigma /> },
    { name: "Sketch", icon: <TbBrandSketch /> },
    { name: "Canva", icon: <TbBrandCanva /> },
    { name: "Procreate", icon: <FaPaintBrush /> },
    { name: "After Effects", icon: <FaVideo /> },
  ];

  const portfolio = [
    {
      title: "Luxury Hotel Branding",
      category: "Brand Identity",
      image: "/design/hotel-branding.jpg",
    },
    {
      title: "Tech Startup Website",
      category: "UI/UX Design",
      image: "/design/website.jpg",
    },
    {
      title: "Product Packaging",
      category: "Packaging Design",
      image: "/design/packaging.jpg",
    },
    {
      title: "Social Media Campaign",
      category: "Marketing Design",
      image: "/design/social.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#084885] to-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #5aba70 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Animated Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#5aba70]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#084885]/40 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        {/* Floating Icons */}
        <div className="absolute top-40 right-20 text-[#5aba70]/10 hidden lg:block">
          <FaPaintBrush className="text-8xl rotate-12 animate-float" />
        </div>
        <div className="absolute bottom-40 left-20 text-[#5aba70]/10 hidden lg:block">
          <FaPalette className="text-8xl -rotate-12 animate-float animation-delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#5aba70]/10 px-4 py-2 rounded-full mb-6 border border-[#5aba70]/30 animate-fadeIn">
              <HiOutlineSparkles className="text-[#5aba70]" />
              <span className="text-[#5aba70] font-medium">Graphic Design</span>
              <HiOutlineSparkles className="text-[#5aba70]" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slideUp">
              Design That <span className="text-[#5aba70]">Speaks</span> Volumes
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto animate-slideUp animation-delay-200">
              Great design isn't just about looking good – it's about
              communicating your brand's story, building trust, and driving
              business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-400">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#5aba70] text-black rounded-full font-semibold hover:bg-[#084885] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Start Your Design Project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-[#5aba70]/20 hover:border-[#5aba70]/30 transition-all duration-300 transform hover:scale-105"
              >
                View Our Work
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

      {/* Why Design Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why <span className="text-[#5aba70]">Design</span> Matters for
              Your Business
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Professional design is an investment that pays for itself through
              increased trust, engagement, and sales
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

      {/* Design Services */}
      <section className="py-20 bg-gradient-to-b from-[#5aba70]/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-[#5aba70]">Design</span> Services
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive design solutions for every aspect of your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#5aba70]/30 transition-all duration-500 hover:-translate-y-2 group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#084885]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#5aba70] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-[#5aba70] text-xs" />
                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tools We <span className="text-[#5aba70]">Master</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Industry-leading software for premium design results
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-[#5aba70]/30 hover:bg-[#5aba70]/10 transition-all duration-300 hover:-translate-y-1 animate-fadeIn flex items-center gap-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-[#5aba70]">{tool.icon}</span>
                <span className="text-white/70 hover:text-[#5aba70] transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Collaborate with NexQbyte */}
      <section className="py-20 bg-gradient-to-b from-[#084885]/30 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why <span className="text-[#5aba70]">Choose</span> NexQbyte for
              Design?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We combine artistic creativity with business strategy to create
              designs that work
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

      {/* Design Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-[#5aba70]">Design</span> Process
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A collaborative approach to bring your vision to life
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

      {/* Portfolio Preview */}
      <section className="py-16 bg-gradient-to-b from-[#5aba70]/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Recent <span className="text-[#5aba70]">Work</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A glimpse of our recent design projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group relative h-48 bg-gradient-to-br from-[#5aba70]/20 to-[#084885]/40 rounded-xl overflow-hidden cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FaImage className="text-3xl text-[#5aba70] mx-auto mb-2" />
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-white/50 text-xs">{item.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm">View Project</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#5aba70] hover:text-white transition-colors"
            >
              View Full Portfolio <FaExternalLinkAlt className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-[#5aba70]/30 transition-all">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-[#5aba70]/20 flex items-center justify-center">
                  <FaUsers className="text-4xl text-[#5aba70]" />
                </div>
                <div>
                  <p className="text-white/80 text-lg italic mb-4">
                    NexQbyte completely transformed our brand identity. Their
                    designs helped us stand out in a crowded market, and we've
                    seen a 150% increase in engagement since launching our new
                    branding.
                  </p>
                  <div>
                    <p className="text-white font-semibold">- Priya Sharma</p>
                    <p className="text-white/50 text-sm">
                      Marketing Director, Himalayan Tea
                    </p>
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
              Ready to Transform Your{" "}
              <span className="text-[#5aba70]">Brand</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Let's create stunning designs that capture your brand's essence
              and captivate your audience.
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
                View Portfolio
              </Link>
            </div>
            <p className="text-white/30 text-sm mt-6">
              No obligation. Just a friendly chat about your design needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
