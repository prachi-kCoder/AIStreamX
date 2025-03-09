import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    // Fetch NewsAPI Data
    const newsResponse = await axios.get(
      `https://newsapi.org/v2/everything?q=AI+Tech&apiKey=${process.env.NEWS_API_KEY}`
    );

    // ✅ Ensure articles array exists
    const articles = newsResponse.data?.articles || [];

    // ✅ Format response correctly
    const news = articles.map((article) => ({
      source: article.source.name,
      headline: article.title,
      description: article.description,
      image: article.urlToImage,
    }));

    return NextResponse.json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json({ error: "Failed to fetch news", data: [] }, { status: 500 });
  }
}
