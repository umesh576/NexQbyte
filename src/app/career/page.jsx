import Link from "next/link";
import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaClock,
  FaCode,
  FaComments,
  FaLaptopCode,
  FaLightbulb,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaPeopleCarry,
  FaRocket,
  FaUserFriends,
} from "react-icons/fa";

export const metadata = {
  title: "Career | Join NexQbyte Team",
  description:
    "Build your career with NexQbyte. Explore open roles in engineering, design, and growth with a collaborative team and clear learning path.",
  keywords:
    "NexQbyte career, jobs Nepal, software engineer jobs, UI UX jobs, digital marketing jobs, IT career",
  openGraph: {
    title: "Career | Join NexQbyte Team",
    description:
      "Find your next role at NexQbyte and grow with real client projects, mentorship, and modern digital tools.",
    type: "website",
  },
};

const values = [
  {
    icon: <FaRocket className="text-2xl text-[#F9A826]" />,
    title: "Growth First",
    description:
      "Every role includes a practical learning roadmap with mentorship, shadowing, and monthly progression reviews.",
  },
  {
    icon: <FaUserFriends className="text-2xl text-[#F9A826]" />,
    title: "People-Centered Culture",
    description:
      "We value clarity, ownership, and teamwork. You will work in small cross-functional squads with transparent goals.",
  },
  {
    icon: <FaLightbulb className="text-2xl text-[#F9A826]" />,
    title: "Innovation Mindset",
    description:
      "From strategy to delivery, we reward creative thinking and experimentation that drives business outcomes.",
  },
];

const roles = [
  {
    icon: <FaLaptopCode className="text-xl text-[#5aba70]" />,
    title: "Frontend Developer",
    type: "Full-Time",
    location: "Kathmandu / Hybrid",
    exp: "2+ years",
    stack: ["Next.js", "Tailwind", "React", "Animation"],
  },
  {
    icon: <FaCode className="text-xl text-[#5aba70]" />,
    title: "Full Stack Developer",
    type: "Full-Time",
    location: "Kathmandu / Onsite",
    exp: "3+ years",
    stack: ["Node.js", "Next.js", "MongoDB", "API Design"],
  },
  {
    icon: <FaComments className="text-xl text-[#5aba70]" />,
    title: "Digital Marketing Specialist",
    type: "Full-Time",
    location: "Kathmandu / Hybrid",
    exp: "2+ years",
    stack: ["Meta Ads", "Google Ads", "SEO", "Analytics"],
  },
  {
    icon: <FaBriefcase className="text-xl text-[#5aba70]" />,
    title: "Graphic Designer",
    type: "Full-Time",
    location: "Kathmandu / Onsite",
    exp: "1+ years",
    stack: ["Figma", "Illustrator", "Branding", "Social Creatives"],
  },
];

const benefits = [
  "Performance-based salary reviews",
  "Paid training and certification support",
  "Flexible work schedule for high-performing teams",
  "Project bonus and milestone rewards",
  "Health and wellbeing support",
  "Team retreats and quarterly events",
];

const hiringSteps = [
  {
    title: "Application Review",
    detail: "We review your profile, portfolio, and role alignment.",
    icon: <FaCheckCircle className="text-[#F9A826]" />,
  },
  {
    title: "Skill Assessment",
    detail: "A short practical task focused on real project situations.",
    icon: <FaClock className="text-[#F9A826]" />,
  },
  {
    title: "Team Interview",
    detail: "Meet your potential lead and discuss your growth path.",
    icon: <FaPeopleCarry className="text-[#F9A826]" />,
  },
  {
    title: "Final Offer",
    detail: "Receive your offer, onboarding plan, and first 90-day roadmap.",
    icon: <FaMoneyBillWave className="text-[#F9A826]" />,
  },
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#f7f9ff] via-[#fef9ef] to-[#f5f9f7] text-[#1B1F3B]">
      <section className="relative overflow-hidden border-b border-[#1B1F3B]/10">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#5aba70]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#F9A826]/20 blur-3xl" />

        <div className="container mx-auto px-4 py-20 md:py-24 relative">
          <p className="inline-flex rounded-full border border-[#F9A826]/40 bg-[#F9A826]/10 px-4 py-2 text-sm font-semibold text-[#1B1F3B]">
            Career At NexQbyte
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl font-bold leading-tight">
            Build Meaningful Digital Products With a Team That
            <span className="text-[#F9A826]"> Invests In Your Growth</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-[#4e556f]">
            We are building modern web, app, and growth solutions for ambitious
            businesses. Join us to work on real projects, sharpen your craft,
            and create measurable impact from day one.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/application"
              className="inline-flex items-center gap-2 rounded-full bg-[#F9A826] px-6 py-3 text-sm font-semibold text-[#1B1F3B] hover:bg-white transition-colors"
            >
              Apply For Open Roles <FaArrowRight className="text-xs" />
            </Link>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 rounded-full border border-[#1B1F3B]/30 px-6 py-3 text-sm font-semibold text-[#1B1F3B] hover:bg-[#1B1F3B] hover:text-white transition-colors"
            >
              See Our Work
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
            <div className="rounded-xl border border-[#1B1F3B]/10 bg-white/80 p-4">
              <p className="text-sm text-[#5b637d]">Active Roles</p>
              <p className="mt-1 text-2xl font-bold">08+</p>
            </div>
            <div className="rounded-xl border border-[#1B1F3B]/10 bg-white/80 p-4">
              <p className="text-sm text-[#5b637d]">Avg Hiring Time</p>
              <p className="mt-1 text-2xl font-bold">10 Days</p>
            </div>
            <div className="rounded-xl border border-[#1B1F3B]/10 bg-white/80 p-4">
              <p className="text-sm text-[#5b637d]">Annual Learning Budget</p>
              <p className="mt-1 text-2xl font-bold">NPR 30K</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Why People Join Us</h2>
          <p className="mt-4 text-[#4e556f]">
            We combine a startup mindset with process clarity so talent can grow
            fast without chaos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#1B1F3B]/10 bg-white/80 p-6 hover:border-[#F9A826]/40 transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F9A826]/10">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4e556f]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Open Positions</h2>
            <p className="mt-3 text-[#4e556f]">
              Find a role where your skills, curiosity, and ambition can thrive.
            </p>
          </div>
          <p className="hidden md:block text-sm text-[#5b637d]">Updated Weekly</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <article
              key={role.title}
              className="rounded-2xl border border-[#1B1F3B]/10 bg-white/85 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#5aba70]/15">
                  {role.icon}
                </div>
                <span className="rounded-full border border-[#5aba70]/40 bg-[#5aba70]/15 px-3 py-1 text-xs font-semibold text-[#79d38c]">
                  {role.type}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold">{role.title}</h3>
              <div className="mt-3 space-y-1 text-sm text-[#4e556f]">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#F9A826]" /> {role.location}
                </p>
                <p>
                  Experience: <span className="text-[#1B1F3B]">{role.exp}</span>
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((skill) => (
                  <span
                    key={`${role.title}-${skill}`}
                    className="rounded-full border border-[#1B1F3B]/15 bg-[#f7f9ff] px-3 py-1 text-xs text-[#4e556f]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href="/application"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F9A826] hover:text-[#5aba70] transition-colors"
              >
                Apply For This Role <FaArrowRight className="text-xs" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <article className="rounded-2xl border border-[#1B1F3B]/10 bg-white/85 p-7">
            <h2 className="text-2xl md:text-3xl font-bold">Benefits & Perks</h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#4e556f]">
                  <FaCheckCircle className="mt-0.5 text-[#5aba70]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#1B1F3B]/10 bg-white/85 p-7">
            <h2 className="text-2xl md:text-3xl font-bold">Hiring Process</h2>
            <div className="mt-6 space-y-4">
              {hiringSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-[#1B1F3B]/10 bg-[#f8f9fd] p-4"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#1B1F3B]">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1B1F3B]/10 text-xs text-[#1B1F3B]">
                      {index + 1}
                    </span>
                    {step.icon}
                    <span>{step.title}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#4e556f]">{step.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-2xl border border-[#F9A826]/30 bg-linear-to-r from-[#F9A826]/20 via-[#f5c879]/10 to-transparent p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold max-w-3xl">
            Ready To Build Your Next Career Milestone?
          </h2>
          <p className="mt-4 max-w-2xl text-[#4e556f]">
            Share your resume, portfolio, and preferred role. Our hiring team
            responds quickly and keeps the process transparent.
          </p>
          <div className="mt-7">
            <Link
              href="/application"
              className="inline-flex items-center gap-2 rounded-full bg-[#1B1F3B] px-6 py-3 text-sm font-semibold text-white hover:bg-[#F9A826] hover:text-[#1B1F3B] transition-colors"
            >
              Send Application <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
