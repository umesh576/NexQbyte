import Link from "next/link";
import {
  FaPenFancy,
  FaBullhorn,
  FaBoxOpen,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export const metadata = {
  title: "Graphic Design Services | NexQbyte",
  description:
    "Graphic design services for branding, campaign creatives, social media assets, and marketing communication materials.",
};

const designServices = [
  {
    title: "Brand Identity Design",
    icon: <FaPenFancy className="text-2xl text-[#5aba70]" />,
    details: [
      "Logo system and visual identity direction",
      "Typography and brand color framework",
      "Brand guidelines for consistent usage",
      "Business profile and stationery design",
    ],
  },
  {
    title: "Campaign & Ad Creatives",
    icon: <FaBullhorn className="text-2xl text-[#5aba70]" />,
    details: [
      "Social media post and ad creative sets",
      "Display banners and promotional visuals",
      "Seasonal campaign and launch design kits",
      "Performance-oriented visual messaging",
    ],
  },
  {
    title: "Packaging & Print Design",
    icon: <FaBoxOpen className="text-2xl text-[#5aba70]" />,
    details: [
      "Product label and packaging layouts",
      "Brochure, flyer, and poster design",
      "Print-ready production files",
      "Retail and in-store communication assets",
    ],
  },
];

const reasons = [
  "Strong visual identity improves brand recall",
  "Design consistency builds customer trust",
  "Quality creatives improve ad performance",
  "Professional visuals increase perceived value",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#084885] to-black">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex rounded-full border border-[#5aba70]/40 bg-[#5aba70]/10 px-4 py-2 text-sm font-semibold text-[#5aba70]">
              Graphic Design Service
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
              Graphic Design That Makes Your Brand Memorable
            </h1>
            <p className="mt-5 text-white/70 text-lg">
              We create strategic design systems and campaign visuals that help
              businesses communicate clearly, look premium, and stand out in a
              competitive market.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Graphic Design Solutions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {designServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#5aba70]/10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <ul className="mt-4 space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-white/70">
                      <FaCheckCircle className="mt-0.5 text-[#5aba70]" />
                      <span>{detail}</span>
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
              Plan Graphic Design Work <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
