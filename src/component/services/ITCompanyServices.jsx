// components/services/ITCompanyServices.jsx
import Link from "next/link";
import {
  FaLaptopCode,
  FaUsers,
  FaCode,
  FaChartLine,
  FaServer,
  FaShieldAlt,
  FaMobileAlt,
  FaCloud,
  FaPaintBrush,
  FaShoppingCart,
} from "react-icons/fa";

const ITCompanyServices = () => {
  const services = [
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed specifically for your unique business processes and requirements.",
      icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
      deliverables: [
        "Web Applications (React, Node.js, Next.js)",
        "Mobile Apps (iOS & Android)",
        "Desktop Software (Windows, Mac)",
        "API Development & Integration",
        "Database Design & Management",
        "Legacy System Modernization",
      ],
      pricing: "Starting from NPR 100,000+",
      timeline: "8-16 weeks",
      features: [
        "Requirements Analysis",
        "UI/UX Design",
        "Development & Testing",
        "Deployment & Maintenance",
        "Source Code Delivery",
        "Documentation & Training",
      ],
      onclick: "/custom-software",
    },
    {
      title: "Website Development",
      description:
        "Professional, responsive, and high-performance websites that establish your online presence and drive business growth.",
      icon: <FaCode className="text-green-500 text-3xl" />,
      deliverables: [
        "Business/Corporate Websites",
        "E-commerce Stores (WooCommerce, Shopify)",
        "Portfolio & Blog Sites",
        "Landing Pages & Campaign Sites",
        "Custom Web Applications",
        "CMS Integration (WordPress, Sanity, Strapi)",
      ],
      pricing: "From NPR 10,000 to NPR 500,000+",
      timeline: "2-8 weeks",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading Speed",
        "Admin Dashboard",
        "Payment Integration",
        "Analytics Setup",
      ],
      onclick: "/website",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
      icon: <FaMobileAlt className="text-indigo-500 text-3xl" />,
      deliverables: [
        "iOS Apps (Swift, SwiftUI)",
        "Android Apps (Kotlin, Jetpack)",
        "Cross-Platform Apps (React Native, Flutter)",
        "App Store & Play Store Publishing",
        "Push Notifications",
        "In-App Purchases",
      ],
      pricing: "Starting from NPR 100,000+",
      timeline: "10-20 weeks",
      features: [
        "UI/UX Design",
        "Backend Integration",
        "Offline Functionality",
        "Real-time Features",
        "Analytics & Crash Reporting",
        "Ongoing Support",
      ],
      onclick: "/mobile-app",
    },
    {
      title: "IT Consulting",
      description:
        "Strategic technology guidance to help you make informed decisions, optimize operations, and achieve business goals.",
      icon: <FaUsers className="text-purple-500 text-3xl" />,
      deliverables: [
        "IT Strategy & Roadmap",
        "Technology Stack Selection",
        "System Architecture Review",
        "Infrastructure Audit",
        "Digital Transformation Planning",
        "Vendor Selection & Management",
      ],
      pricing: "NPR 5,000 - NPR 15,000 per hour",
      timeline: "Flexible engagement",
      features: [
        "Expert Consultation",
        "Feasibility Study",
        "Cost-Benefit Analysis",
        "Risk Assessment",
        "Implementation Support",
        "Team Training",
      ],
      onclick: "/it-consulting",
    },
    {
      title: "Digital Marketing Solutions",
      description:
        "Data-driven marketing strategies to increase your online visibility, engage your audience, and maximize ROI.",
      icon: <FaChartLine className="text-orange-500 text-3xl" />,
      deliverables: [
        "Search Engine Optimization (SEO)",
        "Social Media Management",
        "PPC Campaigns (Google, Meta)",
        "Content Marketing",
        "Email Marketing",
        "Marketing Analytics",
      ],
      pricing: "Monthly packages from NPR 15,000 - NPR 200,000+",
      timeline: "3+ months for optimal results",
      features: [
        "Keyword Research",
        "Competitor Analysis",
        "Performance Reporting",
        "A/B Testing",
        "Conversion Optimization",
        "ROI Tracking",
      ],
      onclick: "/digital-marketing",
    },
    {
      title: "Cloud Solutions",
      description:
        "End-to-end cloud services including migration, infrastructure setup, optimization, and management on major cloud platforms.",
      icon: <FaCloud className="text-sky-500 text-3xl" />,
      deliverables: [
        "Cloud Migration Strategy",
        "Infrastructure as Code (IaC)",
        "AWS/Azure/GCP Setup",
        "Serverless Architecture",
        "Containerization (Docker, Kubernetes)",
        "Cloud Security & Compliance",
      ],
      pricing: "Project-based or hourly consulting",
      timeline: "4-12 weeks",
      features: [
        "Scalable Architecture",
        "High Availability",
        "Disaster Recovery",
        "Cost Optimization",
        "Monitoring & Alerting",
        "24/7 Support Available",
      ],
      onclick: "/cloud-solutions",
    },
    {
      title: "Cybersecurity Services",
      description:
        "Comprehensive security solutions to protect your business assets, data, and infrastructure from evolving cyber threats.",
      icon: <FaShieldAlt className="text-red-500 text-3xl" />,
      deliverables: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Vulnerability Scanning",
        "Incident Response Planning",
        "Security Training",
        "Compliance (GDPR, HIPAA, ISO 27001)",
      ],
      pricing: "Project-based from NPR 100,000+",
      timeline: "2-8 weeks depending on scope",
      features: [
        "Risk Assessment",
        "Security Architecture Review",
        "Threat Modeling",
        "Security Monitoring",
        "Employee Training",
        "Compliance Documentation",
      ],
      onclick: "/cybersecurity",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design services that create intuitive, engaging, and beautiful digital experiences for your users.",
      icon: <FaPaintBrush className="text-pink-500 text-3xl" />,
      deliverables: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
        "Design Systems",
      ],
      pricing: "Project-based from NPR 15,000+",
      timeline: "3-8 weeks",
      features: [
        "User Interviews",
        "Competitive Analysis",
        "Information Architecture",
        "High-fidelity Mockups",
        "Interactive Prototypes",
        "Developer Handoff",
      ],
      onclick: "/ui-ux-design",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Complete online store setup and management solutions to help you sell products and scale your business.",
      icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
      deliverables: [
        "Store Setup (Shopify, WooCommerce, Magento)",
        "Product Catalog Management",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing System",
        "Customer Account Portal",
      ],
      pricing: "Starting from NPR 100,000+",
      timeline: "4-10 weeks",
      features: [
        "Mobile Optimized",
        "Multiple Payment Options",
        "Shipping Integration",
        "Tax Configuration",
        "Marketing Tools",
        "Analytics Dashboard",
      ],
      onclick: "/ecommerce",
    },
  ];

  return (
    <section id="it-solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            IT Company Services & Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professional IT solutions to help businesses grow and succeed in the
            digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">
                  Key Deliverables:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-500">Pricing</div>
                  <div className="font-semibold text-gray-800">
                    {service.pricing}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Timeline</div>
                  <div className="font-semibold text-gray-800">
                    {service.timeline}
                  </div>
                </div>
              </div>
              <Link href={service.onclick || "/"}>
                <button className="w-full bg-gray-800 hover:bg-black text-white font-semibold py-3 rounded-lg transition-colors">
                  View More
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Our Development Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understand your requirements and objectives",
              },
              {
                step: "02",
                title: "Planning",
                description: "Create detailed project roadmap and timeline",
              },
              {
                step: "03",
                title: "Development",
                description: "Build and test the solution with regular updates",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploy and provide ongoing maintenance",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITCompanyServices;
