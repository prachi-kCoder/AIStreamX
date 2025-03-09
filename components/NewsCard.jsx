
"use client";

import Image from "next/image";

export default function NewsCard({ news }) {
  return (
    <div className="relative max-w-lg p-6 bg-n-8 border border-gray-700 rounded-[2rem] overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
      <img
        src={news.image}
        alt={news.headline}
        className="w-full rounded-xl object-cover"
      />
      </div>

      <div className="relative z-10">
        {/* News Image */}
        {news.image && (
          <div className="mb-6 -mx-6">
            <img
              src={news.image}
              alt={news.headline}
              width={628}
              height={350}
              className="w-full rounded-xl object-cover"
              priority
            />
          </div>
        )}

        {/* Headline */}
        <h2 className="text-2xl font-bold text-white mb-3">{news.headline}</h2>

        {/* Description */}
        <p className="text-gray-400 mb-4">{news.description}</p>

        {/* News Source & Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{news.source}</span>

          <div className="flex items-center px-4 py-1 bg-n-1 text-n-8 rounded-lg">
            <span className="text-xs font-semibold">
              {news.status === "Breaking" ? "🔥 Breaking" : "📢 Update"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
