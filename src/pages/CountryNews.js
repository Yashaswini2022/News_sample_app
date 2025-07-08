// src/pages/CountryNews.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function CountryNews() {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("in");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const countries = [
    { label: "India", value: "in" },
    { label: "United States", value: "us" },
    { label: "United Kingdom", value: "gb" },
    { label: "Australia", value: "au" },
    { label: "Canada", value: "ca" }
  ];

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get(`https://news-app-seven-delta.vercel.app/country/${country}?page=1&pageSize=10`)
      .then(res => {
        const articles = res.data.articles || [];
        if (articles.length === 0) {
          setNews([
            {
              title: "Country News (Dummy)",
              description: "This is a sample country news item because the API returned no news.",
              url: "https://example.com"
            }
          ]);
        } else {
          setNews(articles);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [country]);

  return (
    <div className="container my-4">
      <h2>Country News - {countries.find(c => c.value === country)?.label}</h2>

      <select className="form-select my-3" value={country} onChange={e => setCountry(e.target.value)}>
        {countries.map(c => (
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
