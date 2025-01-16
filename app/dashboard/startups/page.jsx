"use client";
import React from "react";

export default function Startups() {
  const startups = [
    {
      id: 1,
      name: "NeuroBoost AI",
      description: "Redefining education with personalized AI learning paths.",
      funding: "$15M",
      logo: "/assets/neuroboost-logo.png",
    },
    {
      id: 2,
      name: "AgriTech Pro",
      description:
        "Revolutionizing agriculture with precision AI and robotics.",
      funding: "$25M",
      logo: "/assets/agritech-logo.png",
    },
    {
      id: 3,
      name: "MedScan AI",
      description: "Improving patient outcomes with AI-powered diagnostics.",
      funding: "$50M",
      logo: "/assets/medscan-logo.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Promising Startups
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="bg-white rounded-lg shadow-md flex items-center p-6"
            >
              <img
                src={startup.logo}
                alt={startup.name}
                className="w-20 h-20 rounded-full object-cover mr-6"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {startup.name}
                </h2>
                <p className="text-gray-600 mb-2">{startup.description}</p>
                <div className="text-sm text-purple-700 font-bold">
                  Funding: {startup.funding}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
