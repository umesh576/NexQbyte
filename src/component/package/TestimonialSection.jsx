import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "NexQbyte delivered our e-commerce platform ahead of schedule. Their professionalism and attention to detail were outstanding!",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Mike Rodriguez",
      company: "Global Retail Corp",
      text: "The mobile app they developed increased our customer engagement by 300%. Highly recommended!",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Emma Wilson",
      company: "Creative Design Studio",
      text: "Their UI/UX design services transformed our website. The user feedback has been incredibly positive.",
      rating: 5,
      avatar: "👩‍🎨",
    },
  ];

  return (
    <div className="py-12 bg-linear-to-r from-gray-50 to-white rounded-3xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">{testimonial.avatar}</div>
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
