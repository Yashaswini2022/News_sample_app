// src/pages/TopHeadlines.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function TopHeadlines() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("business");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const categories = [
    { label: "Business", value: "business" },
    { label: "Technology", value: "technology" },
    { label: "Health", value: "health" },
    { label: "Science", value: "science" },
    { label: "Sports", value: "sports" }
  ];

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get(`https://news-app-seven-delta.vercel.app/top-headlines?language=en&category=${category}&page=1&pageSize=10`)
      .then(res => {
        const articles = res.data.articles || [];
        if (articles.length === 0) {
          setNews([
            {
              title: "Top Headline (Dummy)",
              description: "This is a sample headline because the API returned no news.",
              url: "https://example.com"
            }
          ]);
        } else {
          setNews(articles);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="container my-4">
      <h2>Top Headlines - {category.toUpperCase()}</h2>

      <select className="form-select my-3" value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(c => (
          <option key={c.value} value={c.value}>{c.label}</option>
        ))}
      </select>

      {loading && <p>Loading news...</p>}
      {error && <p className="text-danger">Failed to load news.</p>}
      {!loading && news.length === 0 && <p>No news available.</p>}

      <ul className="list-group">
        {news.map((article, index) => (
          <li key={index} className="list-group-item">
            <h5>{article.title}</h5>
            <p>{article.description || "No description available."}</p>
            <a href={article.url} target="_blank" rel="noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
