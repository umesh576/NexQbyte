"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaClock,
  FaFileAlt,
  FaGlobe,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

const roleOptions = [
  "Frontend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Graphic Designer",
  "Digital Marketing Specialist",
  "SEO Specialist",
  "Content Writer",
  "Other",
];

const processSteps = [
  {
    title: "Application Review",
    detail: "Our team reviews your profile, CV, and role fit.",
    icon: <FaFileAlt className="text-sm text-[#F9A826]" />,
  },
  {
    title: "Skill Evaluation",
    detail: "A short practical task aligned to the selected role.",
    icon: <FaClock className="text-sm text-[#F9A826]" />,
  },
  {
    title: "Team Interview",
    detail: "We discuss your strengths, goals, and project expectations.",
    icon: <FaUserTie className="text-sm text-[#F9A826]" />,
  },
  {
    title: "Offer & Onboarding",
    detail: "You receive an offer and a clear 90-day onboarding plan.",
    icon: <FaCheckCircle className="text-sm text-[#F9A826]" />,
  },
];

export default function CareerApplicationForm() {
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitState({ status: "idle", message: "" });

    const message = [
      `Role Applied: ${data.role}`,
      `Experience: ${data.experience}`,
      `Phone: ${data.phone}`,
      `Current Location: ${data.location || "N/A"}`,
      `Earliest Joining Date: ${data.availability || "N/A"}`,
      `Portfolio/LinkedIn: ${data.portfolio || "N/A"}`,
      `Resume Link: ${data.resumeLink || "N/A"}`,
      "",
      "Cover Letter:",
      data.coverLetter,
    ].join("\n");

    try {
      const payload = {
        name: data.fullName,
        email: data.email,
        purpose: "Career Application",
        message,
      };

      const response = await fetch(
        "https://nex-qbyte-backend.vercel.app/api/contact/addcontact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        setSubmitState({
          status: "error",
          message: result?.message || "Could not submit your application.",
        });
        return;
      }

      setSubmitState({
        status: "success",
        message:
          "Application submitted successfully. Our team will reach out shortly.",
      });
      reset();
    } catch {
      setSubmitState({
        status: "error",
        message: "Network error. Please try again in a moment.",
      });
    }
  };

  return (
    <section className="container mx-auto px-4 pb-20 md:pb-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <article className="order-2 rounded-3xl border border-[#1B1F3B]/12 bg-white p-6 shadow-sm lg:order-1 lg:col-span-1">
          <h2 className="text-2xl font-bold text-[#1B1F3B]">What Happens Next</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4e556f]">
            We keep our hiring process transparent and quick. Most candidates
            receive a response within 3 to 5 business days.
          </p>

          <div className="mt-6 space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[#1B1F3B]/10 bg-[#f8f9fd] p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1B1F3B] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#F9A826]/15">
                    {step.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-[#1B1F3B]">{step.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#4e556f]">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-[#F9A826]/40 bg-[#fff6e7] p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#7a5204]">
              Application Tip
            </p>
            <p className="mt-2 text-sm text-[#6d5120]">
              Add a real project link in your portfolio field to help us assess
              your practical skills faster.
            </p>
          </div>
        </article>

        <article className="order-1 rounded-3xl border border-[#1B1F3B]/12 bg-white p-6 shadow-sm lg:order-2 lg:col-span-2 md:p-8">
          <h2 className="text-3xl font-bold text-[#1B1F3B]">Career Application Form</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4e556f]">
            Submit your details for current or upcoming roles at NexQbyte. Make
            sure your profile and links are accurate.
          </p>

          {submitState.status !== "idle" && (
            <div
              className={`mt-5 rounded-xl border px-4 py-3 text-sm ${
                submitState.status === "success"
                  ? "border-[#5aba70]/45 bg-[#edf8f0] text-[#21552f]"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {submitState.message}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5 text-[#1B1F3B]">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <label className="space-y-2 text-sm font-medium">
                <span>Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                    errors.fullName
                      ? "border-red-300"
                      : "border-[#1B1F3B]/15 focus:border-[#F9A826]"
                  }`}
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Full name should be at least 2 characters",
                    },
                  })}
                />
                {errors.fullName && (
                  <span className="text-xs text-red-600">{errors.fullName.message}</span>
                )}
              </label>

              <label className="space-y-2 text-sm font-medium">
                <span>Email Address</span>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                    errors.email
                      ? "border-red-300"
                      : "border-[#1B1F3B]/15 focus:border-[#F9A826]"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-xs text-red-600">{errors.email.message}</span>
                )}
              </label>

              <label className="space-y-2 text-sm font-medium">
                <span>Phone Number</span>
                <input
                  type="text"
                  placeholder="+977 98XXXXXXXX"
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                    errors.phone
                      ? "border-red-300"
                      : "border-[#1B1F3B]/15 focus:border-[#F9A826]"
                  }`}
                  {...register("phone", {
                    required: "Phone number is required",
                    minLength: {
                      value: 8,
                      message: "Please enter a valid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="text-xs text-red-600">{errors.phone.message}</span>
                )}
              </label>

              <label className="space-y-2 text-sm font-medium">
                <span>Position Applying For</span>
                <select
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                    errors.role
                      ? "border-red-300"
                      : "border-[#1B1F3B]/15 focus:border-[#F9A826]"
                  }`}
                  {...register("role", {
                    required: "Please select a role",
                  })}
                >
                  <option value="">Select role</option>
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                {errors.role && <span className="text-xs text-red-600">{errors.role.message}</span>}
              </label>

              <label className="space-y-2 text-sm font-medium">
                <span>Experience Level</span>
                <select
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                    errors.experience
                      ? "border-red-300"
                      : "border-[#1B1F3B]/15 focus:border-[#F9A826]"
                  }`}
                  {...register("experience", {
                    required: "Please choose your experience level",
                  })}
                >
                  <option value="">Choose experience</option>
                  <option value="Fresher">Fresher</option>
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
                {errors.experience && (
                  <span className="text-xs text-red-600">{errors.experience.message}</span>
                )}
              </label>

              <label className="space-y-2 text-sm font-medium">
                <span>Current Location</span>
                <input
                  type="text"
                  placeholder="Kathmandu, Nepal"
                  className="w-full rounded-xl border border-[#1B1F3B]/15 px-4 py-3 text-sm outline-none transition-colors focus:border-[#F9A826]"
                  {...register("location")}
                />
              </label>

              <label className="space-y-2 text-sm font-medium">
                <span>Portfolio / LinkedIn URL</span>
                <input
                  type="url"
                  placeholder="https://"
                  className="w-full rounded-xl border border-[#1B1F3B]/15 px-4 py-3 text-sm outline-none transition-colors focus:border-[#F9A826]"
                  {...register("portfolio")}
                />
              </label>

              <label className="space-y-2 text-sm font-medium">
                <span>Resume Link (Drive/Dropbox)</span>
                <input
                  type="url"
                  placeholder="https://"
                  className="w-full rounded-xl border border-[#1B1F3B]/15 px-4 py-3 text-sm outline-none transition-colors focus:border-[#F9A826]"
                  {...register("resumeLink")}
                />
              </label>

              <label className="space-y-2 text-sm font-medium md:col-span-2">
                <span>Earliest Joining Date</span>
                <input
                  type="date"
                  className="w-full rounded-xl border border-[#1B1F3B]/15 px-4 py-3 text-sm outline-none transition-colors focus:border-[#F9A826]"
                  {...register("availability")}
                />
              </label>

              <label className="space-y-2 text-sm font-medium md:col-span-2">
                <span>Cover Letter</span>
                <textarea
                  rows={5}
                  placeholder="Tell us why you are a great fit for this role."
                  className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-colors ${
                    errors.coverLetter
                      ? "border-red-300"
                      : "border-[#1B1F3B]/15 focus:border-[#F9A826]"
                  }`}
                  {...register("coverLetter", {
                    required: "Cover letter is required",
                    minLength: {
                      value: 25,
                      message: "Please write at least 25 characters",
                    },
                  })}
                />
                {errors.coverLetter && (
                  <span className="text-xs text-red-600">{errors.coverLetter.message}</span>
                )}
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                isSubmitting
                  ? "cursor-not-allowed bg-gray-300 text-gray-700"
                  : "bg-[#1B1F3B] text-white hover:bg-[#F9A826] hover:text-[#1B1F3B]"
              }`}
            >
              {isSubmitting ? "Submitting Application..." : "Submit Application"}
              {!isSubmitting && <FaArrowRight className="text-xs" />}
            </button>

            <div className="grid grid-cols-1 gap-3 pt-2 text-xs text-[#4e556f] sm:grid-cols-3">
              <p className="inline-flex items-center gap-2 rounded-lg bg-[#f8f9fd] p-3">
                <FaBriefcase className="text-[#F9A826]" /> Role-based matching
              </p>
              <p className="inline-flex items-center gap-2 rounded-lg bg-[#f8f9fd] p-3">
                <FaGlobe className="text-[#F9A826]" /> Local and remote opportunities
              </p>
              <p className="inline-flex items-center gap-2 rounded-lg bg-[#f8f9fd] p-3">
                <FaMapMarkerAlt className="text-[#F9A826]" /> Kathmandu-based team
              </p>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}
