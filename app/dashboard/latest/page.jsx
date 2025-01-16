"use client";
import React from "react";

export default function Latest() {
  const articles = [
    {
      id: 1,
      title: "AI Revolution in Healthcare",
      description:
        "Explore how artificial intelligence is transforming the medical industry, from diagnostics to patient care.",
      image: "/assets/healthcare-ai.jpg",
      date: "Dec 25, 2024",
    },
    {
      id: 2,
      title: "Top 10 AI Tools to Try in 2024",
      description:
        "A curated list of the most innovative AI tools you can use to supercharge your productivity.",
      image: "/assets/ai-tools.jpg",
      date: "Dec 20, 2024",
    },
    {
      id: 3,
      title: "Breakthroughs in AI Research",
      description:
        "Discover the latest AI advancements that are redefining technology and innovation.",
      image: "/assets/ai-research.jpg",
      date: "Dec 18, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Latest Updates
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="text-sm text-gray-500">{article.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
