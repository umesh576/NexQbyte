import Link from "next/link";
import {
  FaSitemap,
  FaFigma,
  FaCheckCircle,
  FaUsers,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

export const metadata = {
  title: "App Design Services | NexQbyte",
  description:
    "UI/UX app design services for Android, iOS, and SaaS platforms with user flows, prototypes, and developer-ready handoff.",
};

const designDeliverables = [
  {
    title: "Product Discovery",
    points: [
      "User personas and JTBD mapping",
      "Feature prioritization with business goals",
      "Information architecture and journey mapping",
    ],
  },
  {
    title: "UX Design",
    points: [
      "Low-fidelity wireframes for core flows",
      "Navigation system and usability logic",
      "Error/edge-state and empty-state planning",
    ],
  },
  {
    title: "UI Design",
    points: [
      "High-fidelity app screens and component library",
      "Visual language for trust and readability",
      "Accessibility-friendly typography and spacing",
    ],
  },
  {
    title: "Prototype & Handoff",
    points: [
      "Interactive clickable prototype",
      "Design specs and developer annotations",
      "Asset export and implementation support",
    ],
  },
];

const valueMetrics = [
  {
    label: "Faster Development",
    detail: "Clear UX and UI handoff reduces rework during implementation.",
    icon: <FaSitemap className="text-2xl text-[#5aba70]" />,
  },
  {
    label: "Better User Adoption",
    detail: "Simple and intuitive flows improve onboarding completion rates.",
    icon: <FaUsers className="text-2xl text-[#5aba70]" />,
  },
  {
    label: "Stronger Retention",
    detail: "Thoughtful interaction design helps users return and engage longer.",
    icon: <FaRocket className="text-2xl text-[#5aba70]" />,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#084885] to-black">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex rounded-full border border-[#5aba70]/40 bg-[#5aba70]/10 px-4 py-2 text-sm font-semibold text-[#5aba70]">
              App Design Service
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
              App Design That Feels Natural to Use
            </h1>
            <p className="mt-5 text-white/70 text-lg">
              We design app experiences for mobile and web products with a clear
              focus on usability, retention, and conversion. From user flow to
              final screens, every detail supports business outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/connection"
                className="rounded-full bg-[#5aba70] px-7 py-3 font-semibold text-black hover:bg-white transition-colors"
              >
                Discuss App Design
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white hover:bg-white hover:text-black transition-colors"
              >
                See App Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueMetrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#5aba70]/10">
                  {metric.icon}
                </div>
                <h2 className="text-xl font-bold text-white">{metric.label}</h2>
                <p className="mt-2 text-sm text-white/70">{metric.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            What You Get In Our App Design Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designDeliverables.map((block) => (
              <article
                key={block.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#5aba70]/10 text-[#5aba70]">
                  <FaFigma className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">{block.title}</h3>
                <ul className="mt-4 space-y-2">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-white/70">
                      <FaCheckCircle className="mt-0.5 text-[#5aba70]" />
                      <span>{point}</span>
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
              Start App Design Project <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
