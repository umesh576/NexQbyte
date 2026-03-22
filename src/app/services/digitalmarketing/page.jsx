import Link from "next/link";
import {
  FaSearch,
  FaBullseye,
  FaChartLine,
  FaHashtag,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export const metadata = {
  title: "Digital Marketing Services | NexQbyte",
  description:
    "Digital marketing services including SEO, social media, paid ads, and conversion tracking to generate consistent growth.",
};

const channels = [
  {
    title: "SEO & Local SEO",
    icon: <FaSearch className="text-2xl text-[#5aba70]" />,
    points: [
      "Keyword and competitor research",
      "On-page and technical SEO improvements",
      "Local SEO setup and maps visibility",
      "Content plan for long-term organic growth",
    ],
  },
  {
    title: "Paid Ads (Meta & Google)",
    icon: <FaBullseye className="text-2xl text-[#5aba70]" />,
    points: [
      "Campaign strategy and audience targeting",
      "Creative and landing page alignment",
      "A/B testing and bid optimization",
      "Lead and sales conversion reporting",
    ],
  },
  {
    title: "Social Media Growth",
    icon: <FaHashtag className="text-2xl text-[#5aba70]" />,
    points: [
      "Monthly content calendar",
      "Brand-consistent creative direction",
      "Engagement and community response support",
      "Performance insights and iteration loop",
    ],
  },
];

const kpiFocus = [
  "Qualified leads and cost per lead",
  "Organic ranking and impression growth",
  "Landing page conversion rate",
  "Revenue attribution by campaign",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#084885] to-black">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex rounded-full border border-[#5aba70]/40 bg-[#5aba70]/10 px-4 py-2 text-sm font-semibold text-[#5aba70]">
              Digital Marketing Service
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
              Marketing Campaigns Built for Measurable ROI
            </h1>
            <p className="mt-5 text-white/70 text-lg">
              We help your brand grow with practical digital marketing strategy,
              campaign execution, and performance tracking across SEO, paid ads,
              and social media.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/connection"
                className="rounded-full bg-[#5aba70] px-7 py-3 font-semibold text-black hover:bg-white transition-colors"
              >
                Get Marketing Strategy Call
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white hover:bg-white hover:text-black transition-colors"
              >
                See Results
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <FaChartLine className="text-[#5aba70]" /> KPI Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {kpiFocus.map((kpi) => (
                <div key={kpi} className="rounded-xl border border-white/10 bg-black/20 p-4 text-white/75 text-sm">
                  {kpi}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Marketing Services You Can Scale
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {channels.map((channel) => (
              <article
                key={channel.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#5aba70]/10">
                  {channel.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{channel.title}</h3>
                <ul className="mt-4 space-y-2">
                  {channel.points.map((point) => (
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
              Start Digital Marketing <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
