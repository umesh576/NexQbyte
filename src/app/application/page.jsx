import Link from "next/link";
import { FaArrowRight, FaCircle } from "react-icons/fa";
import CareerApplicationForm from "@/component/career/CareerApplicationForm";

export const metadata = {
  title: "Application | NexQbyte Careers",
  description:
    "Apply for open roles at NexQbyte. Submit your profile, portfolio, and experience through our structured application form.",
};

export default function ApplicationPage() {
  return (
    <main className="min-h-screen bg-white text-[#1B1F3B]">
      <section className="relative overflow-hidden border-b border-[#1B1F3B]/10">
        <div className="container relative mx-auto px-4 py-16 md:py-20">
          <p className="inline-flex rounded-full border border-[#F9A826]/45 bg-[#F9A826]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#1B1F3B]">
            NexQbyte Hiring
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Apply For Your Next Role With A
            <span className="text-[#F9A826]"> Structured Hiring Process</span>
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#4e556f] md:text-base">
            We are always looking for builders, designers, and growth marketers
            who enjoy meaningful work. Fill in your details and our hiring team
            will review your profile quickly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/career"
              className="inline-flex items-center gap-2 rounded-full border border-[#1B1F3B]/25 bg-white px-6 py-3 text-sm font-semibold text-[#1B1F3B] transition-colors hover:border-[#1B1F3B] hover:bg-[#1B1F3B] hover:text-white"
            >
              View Career Page <FaArrowRight className="text-xs" />
            </Link>
            <Link
              href="/connection"
              className="inline-flex items-center gap-2 rounded-full bg-[#5aba70] px-6 py-3 text-sm font-semibold text-[#1B1F3B] transition-colors hover:bg-[#F9A826]"
            >
              Contact HR Team
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
            <p className="inline-flex items-center gap-2 rounded-xl border border-[#1B1F3B]/10 bg-white/85 px-4 py-3">
              <FaCircle className="text-[8px] text-[#F9A826]" /> Resume and portfolio based shortlisting
            </p>
            <p className="inline-flex items-center gap-2 rounded-xl border border-[#1B1F3B]/10 bg-white/85 px-4 py-3">
              <FaCircle className="text-[8px] text-[#F9A826]" /> Feedback within 3 to 5 business days
            </p>
            <p className="inline-flex items-center gap-2 rounded-xl border border-[#1B1F3B]/10 bg-white/85 px-4 py-3">
              <FaCircle className="text-[8px] text-[#F9A826]" /> Transparent hiring and onboarding plan
            </p>
          </div>
        </div>
      </section>

      <CareerApplicationForm />
    </main>
  );
}
