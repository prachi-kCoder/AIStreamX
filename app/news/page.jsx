"use client";

import { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard";
import Heading from "../../components/Heading";
import Section from "../../components/Section";
import Header from "../../components/Header";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched news data:", data);
        if (Array.isArray(data)) {
          setNews(data);
        } else {
          setError("Invalid response format");
        }
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError("Failed to load news");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section className="overflow-hidden" id="roadmap">
        <Header className="mb-8"/>
        <div className="container mx-auto p-6">
         
          <Heading tag="Tech is always in motion" title="🚀 AI & Tech News" />
          {loading && <p className="text-center  text-lg">Fetching news...</p>}
          {error && <p className="text-center text-red-500 text-lg">{error}</p>}

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <NewsCard key={index} news={item} />
            ))}
          </div>
    </div>
    </Section>
  );
}
