import Link from "next/link";
import {
  FaCode,
  FaSearch,
  FaBolt,
  FaMobileAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export const metadata = {
  title: "Web Design Services | NexQbyte",
  description:
    "Custom web design services focused on speed, user experience, SEO readiness, and conversion growth.",
};

const servicePackages = [
  {
    name: "Business Starter Website",
    timeline: "2-3 weeks",
    bestFor: "Local businesses and professionals",
    features: [
      "Up to 6 conversion-focused pages",
      "Mobile-first responsive layout",
      "Basic on-page SEO setup",
      "Lead form and WhatsApp integration",
    ],
  },
  {
    name: "Growth Website",
    timeline: "4-6 weeks",
    bestFor: "Scaling brands with multiple services",
    features: [
      "Custom UI system and reusable sections",
      "Service landing pages for SEO",
      "Performance optimization (Core Web Vitals)",
      "Analytics and conversion tracking setup",
    ],
  },
  {
    name: "Advanced Web Platform",
    timeline: "6-10 weeks",
    bestFor: "Businesses with workflows and integrations",
    features: [
      "Custom dashboard or user portal",
      "API/integration-ready architecture",
      "Security hardening and role permissions",
      "Scalable deployment and handover docs",
    ],
  },
];

const outcomes = [
  {
    title: "Design That Converts",
    icon: <FaCode className="text-2xl text-[#5aba70]" />,
    description:
      "Every section is built around user intent, clarity, and action-driven CTAs.",
  },
  {
    title: "Search-Ready Structure",
    icon: <FaSearch className="text-2xl text-[#5aba70]" />,
    description:
      "Clean page hierarchy and metadata help search engines index and rank faster.",
  },
  {
    title: "Fast Loading Experience",
    icon: <FaBolt className="text-2xl text-[#5aba70]" />,
    description:
      "Speed optimization reduces bounce rate and improves engagement quality.",
  },
  {
    title: "Built for Mobile Users",
    icon: <FaMobileAlt className="text-2xl text-[#5aba70]" />,
    description:
      "Responsive design ensures strong user experience across all devices.",
  },
  {
    title: "Secure and Reliable",
    icon: <FaShieldAlt className="text-2xl text-[#5aba70]" />,
    description:
      "Modern standards for security and maintainability are applied by default.",
  },
  {
    title: "Measurable Growth",
    icon: <FaCheckCircle className="text-2xl text-[#5aba70]" />,
    description:
      "Reporting-ready setup lets you track leads, traffic, and conversion performance.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#084885] to-black">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex rounded-full border border-[#5aba70]/40 bg-[#5aba70]/10 px-4 py-2 text-sm font-semibold text-[#5aba70]">
              Web Design Service
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
              Web Design That Builds Trust and Drives Leads
            </h1>
            <p className="mt-5 text-white/70 text-lg">
              We design business websites that combine premium visuals, clean UX,
              and conversion strategy so your site performs as a growth channel,
              not just a digital brochure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/connection"
                className="rounded-full bg-[#5aba70] px-7 py-3 font-semibold text-black hover:bg-white transition-colors"
              >
                Book Web Design Consultation
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white hover:bg-white hover:text-black transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#5aba70]/10">
                  {item.icon}
                </div>
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Web Design Packages
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {servicePackages.map((pkg) => (
              <article
                key={pkg.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-2 text-sm text-[#5aba70]">Timeline: {pkg.timeline}</p>
                <p className="mt-2 text-sm text-white/80">Best for: {pkg.bestFor}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                      <FaCheckCircle className="mt-0.5 text-[#5aba70]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/connection"
              className="inline-flex items-center gap-2 rounded-full border border-[#5aba70]/40 bg-[#5aba70]/10 px-6 py-3 text-white hover:bg-[#5aba70] hover:text-black transition-colors"
            >
              Start Your Website Project <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
