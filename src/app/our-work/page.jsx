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
    <main className="min-h-screen bg-linear-to-b from-[#f7f9ff] via-[#fef9ef] to-[#f5f9f7] text-[#1B1F3B]">
      <section className="relative overflow-hidden border-b border-[#1B1F3B]/10">
        <div className="pointer-events-none absolute " />
        <div className="container mx-auto px-4 py-20 md:py-24 relative">
          <p className="inline-flex rounded-full border border-[#F9A826]/35 bg-white px-4 py-2 text-sm font-semibold text-[#1B1F3B]">
            Our Work
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl font-bold leading-tight">
            Results-Driven Work Built For
            <span className="text-[#F9A826]"> Real Business Growth</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[#4e556f]">
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
              className="inline-flex items-center gap-2 rounded-full border border-[#1B1F3B]/30 px-6 py-3 text-sm font-semibold text-[#1B1F3B] hover:bg-[#1B1F3B] hover:text-white transition-colors"
            >
              Start Your Project
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-[#1B1F3B]/10 bg-white/85 p-4"
              >
                <p className="text-2xl md:text-3xl font-bold text-[#F9A826]">{item.value}</p>
                <p className="mt-1 text-xs md:text-sm text-[#4e556f]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Case Studies</h2>
          <p className="mt-4 text-[#4e556f]">
            A snapshot of work where strategy, execution, and measurable impact
            came together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#1B1F3B]/10 bg-white/85 p-6 hover:border-[#F9A826]/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  {item.icon}
                </span>
                <span className="rounded-full border border-[#1B1F3B]/15 bg-[#f8f9fd] px-3 py-1 text-xs text-[#4e556f]">
                  {item.category}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4e556f]">{item.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.services.map((service) => (
                  <span
                    key={`${item.title}-${service}`}
                    className="rounded-full border border-[#5aba70]/35 bg-[#5aba70]/10 px-3 py-1 text-xs text-[#2c7440]"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-[#F9A826]/30 bg-white p-3 text-sm text-[#4e556f]">
                <span className="font-semibold text-[#1B1F3B]">Result:</span> {item.result}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="rounded-2xl border border-[#1B1F3B]/10 bg-white/85 p-7 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold">How We Deliver Consistent Outcomes</h2>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.map((step) => (
              <div
                key={step.title}
                className="rounded-xl border border-[#1B1F3B]/10 bg-[#f8f9fd] p-4"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#5aba70]/10 mb-3">
                  {step.icon}
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[#4e556f]">{step.detail}</p>
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
          <p className="mt-4 max-w-2xl text-[#4e556f]">
            Tell us your business goals and we will propose the right strategy,
            scope, and timeline for measurable growth.
          </p>
          <div className="mt-7">
            <Link
              href="/connection"
              className="inline-flex items-center gap-2 rounded-full bg-[#1B1F3B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#F9A826] hover:text-[#1B1F3B] transition-colors"
            >
              Book A Discovery Call <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
