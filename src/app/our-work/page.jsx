import Link from "next/link";
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaCheckCircle,
  FaGlobe,
  FaMobileAlt,
  FaPalette,
  FaSearch,
  FaUsers,
} from "react-icons/fa";

export const metadata = {
  title: "Our Work | NexQbyte Portfolio",
  description:
    "Explore selected NexQbyte projects across web development, app design, digital marketing, and branding with measurable business outcomes.",
  keywords:
    "NexQbyte portfolio, our work, case studies, web projects, app projects, marketing results, design showcase",
  openGraph: {
    title: "Our Work | NexQbyte Portfolio",
    description:
      "See how NexQbyte helps businesses scale with conversion-focused digital products and campaigns.",
    type: "website",
  },
};

const highlights = [
  {
    label: "Projects Delivered",
    value: "120+",
  },
  {
    label: "Average Conversion Lift",
    value: "38%",
  },
  {
    label: "Industries Served",
    value: "14",
  },
  {
    label: "Client Satisfaction",
    value: "4.9/5",
  },
];

const cases = [
  {
    title: "Hospital Booking Platform",
    category: "Web Platform",
    summary:
      "Redesigned patient booking flow, integrated real-time scheduling, and reduced appointment drop-off dramatically.",
    services: ["UX Strategy", "Next.js Development", "API Integration"],
    result: "52% increase in successful booking completion",
    icon: <FaGlobe className="text-[#F9A826]" />,
  },
  {
    title: "Retail Mobile App Relaunch",
    category: "Mobile Experience",
    summary:
      "Rebuilt app information architecture and checkout UX, improving retention and repeat purchases.",
    services: ["Product Design", "React Native", "Growth Analytics"],
    result: "41% increase in 30-day active users",
    icon: <FaMobileAlt className="text-[#F9A826]" />,
  },
  {
    title: "Education Lead Generation Campaign",
    category: "Performance Marketing",
    summary:
      "Built a full-funnel ad and landing strategy for admissions season with audience segmentation.",
    services: ["Google Ads", "Landing Pages", "Tracking Setup"],
    result: "63% lower cost per qualified lead",
    icon: <FaChartLine className="text-[#F9A826]" />,
  },
  {
    title: "Brand Identity Revamp",
    category: "Creative & Branding",
    summary:
      "Created new identity system, campaign templates, and social visual toolkit for consistency.",
    services: ["Brand Strategy", "Visual Identity", "Social Creative Kit"],
    result: "2.4x increase in social engagement",
    icon: <FaPalette className="text-[#F9A826]" />,
  },
];

const workflow = [
  {
    title: "Discover",
    detail: "Business goals, audience insights, and current friction mapping.",
    icon: <FaSearch className="text-[#5aba70]" />,
  },
  {
    title: "Design",
    detail: "Journey architecture, wireframes, and conversion-driven UX decisions.",
    icon: <FaBolt className="text-[#5aba70]" />,
  },
  {
    title: "Develop",
    detail: "Fast iteration cycles with quality checks and release readiness.",
    icon: <FaCheckCircle className="text-[#5aba70]" />,
  },
  {
    title: "Scale",
    detail: "Performance monitoring, optimization, and growth experimentation.",
    icon: <FaUsers className="text-[#5aba70]" />,
  },
];

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#081529] via-[#0a2548] to-[#060d1f] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,168,38,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(90,186,112,0.2),transparent_30%)]" />
        <div className="container mx-auto px-4 py-20 md:py-24 relative">
          <p className="inline-flex rounded-full border border-[#F9A826]/35 bg-[#F9A826]/10 px-4 py-2 text-sm font-semibold text-[#F9A826]">
            Our Work
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl font-bold leading-tight">
            Results-Driven Work Built For
            <span className="text-[#F9A826]"> Real Business Growth</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/75">
            We design and ship digital experiences that increase visibility,
            improve conversion, and accelerate revenue for growing brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#F9A826] px-6 py-3 text-sm font-semibold text-[#1B1F3B] hover:bg-white transition-colors"
            >
              Explore Services <FaArrowRight className="text-xs" />
            </Link>
            <Link
              href="/connection"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#1B1F3B] transition-colors"
            >
              Start Your Project
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/15 bg-white/5 p-4"
              >
                <p className="text-2xl md:text-3xl font-bold text-[#F9A826]">{item.value}</p>
                <p className="mt-1 text-xs md:text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Case Studies</h2>
          <p className="mt-4 text-white/70">
            A snapshot of work where strategy, execution, and measurable impact
            came together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-6 hover:border-[#F9A826]/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F9A826]/10">
                  {item.icon}
                </span>
                <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/75">
                  {item.category}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-snug">{item.title}</h3>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">{item.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.services.map((service) => (
                  <span
                    key={`${item.title}-${service}`}
                    className="rounded-full border border-[#5aba70]/35 bg-[#5aba70]/10 px-3 py-1 text-xs text-[#a6e4b4]"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-[#F9A826]/30 bg-[#F9A826]/10 p-3 text-sm text-white/85">
                <span className="font-semibold text-[#f8cb80]">Result:</span> {item.result}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">How We Deliver Consistent Outcomes</h2>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.map((step) => (
              <div
                key={step.title}
                className="rounded-xl border border-white/10 bg-black/25 p-4"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#5aba70]/10 mb-3">
                  {step.icon}
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-2xl border border-[#5aba70]/30 bg-linear-to-r from-[#5aba70]/20 via-[#5aba70]/10 to-transparent p-8 md:p-10">
          <h2 className="max-w-3xl text-3xl md:text-4xl font-bold">
            Want Your Brand To Be Our Next Success Story?
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Tell us your business goals and we will propose the right strategy,
            scope, and timeline for measurable growth.
          </p>
          <div className="mt-7">
            <Link
              href="/connection"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#103362] hover:bg-[#F9A826] hover:text-[#1B1F3B] transition-colors"
            >
              Book A Discovery Call <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
