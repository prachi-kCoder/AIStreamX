"use client";
import React from "react";

export default function Trending() {
  const trends = [
    {
      id: 1,
      topic: "ChatGPT Plugins",
      popularity: "4.8M mentions",
      image: "/assets/chatgpt-plugins.jpg",
    },
    {
      id: 2,
      topic: "AI-Generated Music",
      popularity: "2.3M mentions",
      image: "/assets/ai-music.jpg",
    },
    {
      id: 3,
      topic: "Ethics in AI",
      popularity: "3.5M mentions",
      image: "/assets/ethics-ai.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Trending Topics
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trends.map((trend) => (
            <div
              key={trend.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={trend.image}
                alt={trend.topic}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {trend.topic}
                </h2>
                <div className="text-gray-600">{trend.popularity}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
