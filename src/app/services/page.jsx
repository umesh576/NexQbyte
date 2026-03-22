import Link from "next/link";
import {
  FaGlobe,
  FaMobileAlt,
  FaChartLine,
  FaPalette,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export const metadata = {
  title: "Services | NexQbyte - Web, App, Marketing & Design",
  description:
    "Explore NexQbyte services: web design, app design, digital marketing, and graphic design. Get strategic, measurable, and growth-focused digital solutions.",
  keywords:
    "web design, app design, digital marketing, graphic design, branding, SEO, social media marketing, UI UX design",
  openGraph: {
    title: "Services | NexQbyte - Web, App, Marketing & Design",
    description:
      "High-impact digital services built to increase visibility, engagement, and conversions.",
    type: "website",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Web Design",
      href: "/services/website",
      icon: <FaGlobe className="text-3xl text-[#5aba70]" />,
      summary:
        "Conversion-focused websites that look premium, load fast, and guide visitors to action.",
      idealFor: "Businesses that need credibility, leads, and stronger online presence.",
      outcomes: [
        "Responsive UI for all devices",
        "Speed and SEO-ready page structure",
        "Clear service pages and CTAs",
        "Easy-to-manage content layout",
      ],
      timeline: "2-6 weeks",
      value: "Improves trust, visibility, and inquiry quality",
    },
    {
      title: "App Design",
      href: "/services/appdevelopment",
      icon: <FaMobileAlt className="text-3xl text-[#5aba70]" />,
      summary:
        "User-centered app experiences that reduce friction and keep users engaged.",
      idealFor: "Startups and businesses launching new products or redesigning existing apps.",
      outcomes: [
        "UX research and user flow mapping",
        "Wireframes and high-fidelity screens",
        "Component-based design system",
        "Developer-ready handoff and specs",
      ],
      timeline: "3-8 weeks",
      value: "Increases usability, retention, and product adoption",
    },
    {
      title: "Digital Marketing",
      href: "/services/digitalmarketing",
      icon: <FaChartLine className="text-3xl text-[#5aba70]" />,
      summary:
        "Data-driven campaigns that attract qualified traffic and convert it into real revenue.",
      idealFor: "Brands that want predictable growth through search, social, and paid channels.",
      outcomes: [
        "SEO and local search optimization",
        "Social media strategy and creatives",
        "Performance ad campaigns",
        "Monthly reporting with action plan",
      ],
      timeline: "3+ months",
      value: "Boosts reach, leads, and ROI with measurable KPIs",
    },
    {
      title: "Graphic Design",
      href: "/services/graphicsDesigning",
      icon: <FaPalette className="text-3xl text-[#5aba70]" />,
      summary:
        "Brand visuals and marketing creatives that make your business instantly recognizable.",
      idealFor: "Companies improving brand identity, campaign assets, and communication quality.",
      outcomes: [
        "Brand identity and logo packages",
        "Social and ad design creatives",
        "Sales and presentation materials",
        "Print-ready and digital-ready assets",
      ],
      timeline: "1-4 weeks",
      value: "Strengthens brand recall and campaign performance",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#084885] to-black">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <p className="inline-flex items-center rounded-full border border-[#5aba70]/30 bg-[#5aba70]/10 px-4 py-2 text-sm font-semibold text-[#5aba70]">
              Services That Drive Results
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
              Complete Digital Services for
              <span className="text-[#5aba70]"> Modern Businesses</span>
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-3xl mx-auto">
              Choose from our four core services designed to help your business
              grow faster: web design, app design, digital marketing, and
              graphic design. Each service is built with strategy, execution,
              and measurable outcomes in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 hover:border-[#5aba70]/40 transition-all duration-300"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#5aba70]/10">
                  {service.icon}
                </div>

                <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                <p className="mt-3 text-white/70">{service.summary}</p>

                <div className="mt-5 space-y-2 text-sm">
                  <p className="text-white/85">
                    <span className="font-semibold text-[#5aba70]">Route path:</span>{" "}
                    <span className="text-white/70">{service.href}</span>
                  </p>
                  <p className="text-white/85">
                    <span className="font-semibold text-[#5aba70]">Best for:</span>{" "}
                    {service.idealFor}
                  </p>
                  <p className="text-white/85">
                    <span className="font-semibold text-[#5aba70]">Timeline:</span>{" "}
                    {service.timeline}
                  </p>
                  <p className="text-white/85">
                    <span className="font-semibold text-[#5aba70]">Business impact:</span>{" "}
                    {service.value}
                  </p>
                </div>

                <div className="mt-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80 mb-3">
                    What You Get
                  </h3>
                  <ul className="space-y-2">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-white/75 text-sm">
                        <FaCheckCircle className="mt-0.5 text-[#5aba70]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#5aba70] px-5 py-2.5 text-sm font-semibold text-black hover:bg-white transition-colors"
                  >
                    View Details <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#5aba70]/30 bg-[#5aba70]/10 p-7 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Need a Full Growth Package?
            </h2>
            <p className="mt-3 text-white/75 max-w-2xl mx-auto">
              Combine web design, app design, marketing, and graphics into one
              unified strategy for faster brand growth and better conversion
              performance.
            </p>
            <div className="mt-6">
              <Link
                href="/connection"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white hover:text-black transition-colors"
              >
                Get Free Consultation <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Service Page Paths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service) => (
                <Link
                  key={`${service.title}-path`}
                  href={service.href}
                  className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-white/75 hover:border-[#5aba70]/40 hover:text-white transition-colors"
                >
                  <span className="font-semibold text-[#5aba70]">{service.title}:</span>{" "}
                  {service.href}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
