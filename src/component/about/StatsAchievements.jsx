// components/about/StatsAchievements.jsx
"use client";
import { useState, useEffect } from "react";
import { FaTrophy, FaAward, FaStar, FaRibbon } from "react-icons/fa";

const StatsAchievements = () => {
  const [professionals, setProfessionals] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [projects, setProjects] = useState(0);
  const [countries, setCountries] = useState(0);

  const statTargets = {
    professionals: 3200,
    companies: 200,
    projects: 500,
    countries: 3,
  };

  useEffect(() => {
    const animateCount = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
      return timer;
    };

    const timers = [
      animateCount(setProfessionals, statTargets.professionals, 2500),
      animateCount(setCompanies, statTargets.companies, 2000),
      animateCount(setProjects, statTargets.projects, 3000),
      animateCount(setCountries, statTargets.countries, 1500),
    ];

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  const achievements = [
    {
      year: "2023",
      title: "Best IT Training Institute",
      organization: "National Education Awards",
      icon: <FaTrophy className="text-[#F9A826]" />,
    },
    {
      year: "2022",
      title: "Excellence in Skill Development",
      organization: "Asia Pacific Education Council",
      icon: <FaAward className="text-[#1B1F3B]" />,
    },
    {
      year: "2022",
      title: "Top 10 EdTech Startups",
      organization: "Forbes Asia",
      icon: <FaStar className="text-[#5aba70]" />,
    },
    {
      year: "2021",
      title: "Digital Transformation Partner",
      organization: "Government of Nepal",
      icon: <FaRibbon className="text-[#5aba70]" />,
    },
  ];

  const milestones = [
    {
      year: "2024",
      event: "NexQbyte founded with focus on digital skills",
      detail: "Started with a compact trainer team and practical learning tracks.",
    },
    {
      year: "2024",
      event: "Expanded into business and growth programs",
      detail: "Launched structured programs in digital marketing and analytics.",
    },
    {
      year: "2025",
      event: "Built dedicated corporate training division",
      detail: "Partnered with 50+ organizations for workforce upskilling.",
    },
    {
      year: "2025",
      event: "Scaled to multi-city training operations",
      detail: "Strengthened service delivery with regional training access.",
    },
    {
      year: "2025",
      event: "Earned international recognition",
      detail: "Featured among high-growth education and technology initiatives.",
    },
    {
      year: "2026",
      event: "Expanded into software and solution delivery",
      detail: "Started full-cycle digital product and technology consulting services.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="inline-flex rounded-full border border-[#F9A826]/40 bg-[#F9A826]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#1B1F3B]">
            Impact Snapshot
          </p>
          <h2 className="mt-5 text-3xl font-bold text-[#1B1F3B] md:text-4xl">
            By The Numbers
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[#4e556f]">
            Our impact in transforming careers and businesses
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-16 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          <div className="rounded-2xl border border-[#1B1F3B]/10 bg-[#f8f9fd] p-5 text-center md:p-6">
            <div className="mb-2 text-4xl font-bold text-[#1B1F3B] md:text-5xl">
              {professionals.toLocaleString()}+
            </div>
            <div className="font-semibold text-[#4e556f]">
              Professionals Trained
            </div>
          </div>
          <div className="rounded-2xl border border-[#1B1F3B]/10 bg-[#f8f9fd] p-5 text-center md:p-6">
            <div className="mb-2 text-4xl font-bold text-[#5aba70] md:text-5xl">
              {companies}+
            </div>
            <div className="font-semibold text-[#4e556f]">Corporate Clients</div>
          </div>
          <div className="rounded-2xl border border-[#1B1F3B]/10 bg-[#f8f9fd] p-5 text-center md:p-6">
            <div className="mb-2 text-4xl font-bold text-[#F9A826] md:text-5xl">
              {projects}+
            </div>
            <div className="font-semibold text-[#4e556f]">
              Projects Delivered
            </div>
          </div>
          <div className="rounded-2xl border border-[#1B1F3B]/10 bg-[#f8f9fd] p-5 text-center md:p-6">
            <div className="mb-2 text-4xl font-bold text-[#1B1F3B] md:text-5xl">
              {countries}
            </div>
            <div className="font-semibold text-[#4e556f]">
              Countries Presence
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="mb-12 text-center text-2xl font-bold text-[#1B1F3B]">
            Awards & Recognitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#1B1F3B]/10 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 rounded-lg bg-[#f8f9fd] p-3">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#F9A826]">
                      {achievement.year}
                    </div>
                    <h4 className="font-bold text-[#1B1F3B]">
                      {achievement.title}
                    </h4>
                  </div>
                </div>
                <p className="text-sm text-[#4e556f]">
                  {achievement.organization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mt-16">
          <h3 className="mb-12 text-center text-2xl font-bold text-[#1B1F3B]">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-[#1B1F3B]/10 md:left-1/2 md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full pl-12 md:w-1/2 md:pl-0 ${
                      index % 2 === 0
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="rounded-xl border border-[#1B1F3B]/10 bg-white p-6 shadow-sm">
                      <div className="mb-2 text-lg font-bold text-[#F9A826]">
                        {milestone.year}
                      </div>
                      <h4 className="mb-2 font-bold text-[#1B1F3B]">
                        {milestone.event}
                      </h4>
                      <p className="text-sm text-[#4e556f]">
                        {milestone.detail}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-white bg-blue-700 md:left-1/2 md:-translate-x-1/2"></div>
                  <div className="hidden w-1/2 md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsAchievements;
