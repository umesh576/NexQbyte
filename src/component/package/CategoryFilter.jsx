"use client";

import React, { useState } from "react";

const categories = [
  { id: "all", name: "All Services", icon: "🌟" },
  { id: "web", name: "Web Development", icon: "🌐" },
  { id: "mobile", name: "Mobile Apps", icon: "📱" },
  { id: "design", name: "Design", icon: "🎨" },
  { id: "other", name: "Other IT Services", icon: "🔧" },
];

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
            activeCategory === category.id
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <span className="text-xl">{category.icon}</span>
          <span className="font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
