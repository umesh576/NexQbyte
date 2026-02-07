import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div
      className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${service.recommended ? "border-blue-500 border-2" : "border-gray-200"}`}
    >
      {service.recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600">{service.description}</p>
      </div>

      <div className="mb-6">
        <div className="text-center">
          <span className="text-4xl font-bold text-gray-900">
            {service.price}
          </span>
          {service.price.includes("/month") && (
            <span className="text-gray-600"> (billed monthly)</span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-3 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${service.recommended ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
      >
        Get Started
      </button>

      <div className="mt-4 text-center">
        {service.category === "web" && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
            Web Development
          </span>
        )}
        {service.category === "mobile" && (
          <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
            Mobile App
          </span>
        )}
        {service.category === "design" && (
          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
            Design
          </span>
        )}
        {service.category === "other" && (
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
            IT Services
          </span>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
