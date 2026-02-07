import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Basic websites take 2-4 weeks, e-commerce stores 4-8 weeks, and custom web applications 8-16 weeks depending on complexity.",
    },
    {
      question: "Do you offer maintenance after project completion?",
      answer:
        "Yes, we offer monthly maintenance packages starting at $299/month that include updates, security, backups, and 24/7 support.",
    },
    {
      question: "Can I make changes after the project starts?",
      answer:
        "Yes, we include 3 revision rounds in all our packages. Additional changes can be accommodated with a change request process.",
    },
    {
      question: "What payment options do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and PayPal. We offer flexible payment plans for larger projects.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "Yes, we can provide hosting and domain registration as part of our packages, or you can use your own provider.",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-gray-800">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
