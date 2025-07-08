// src/components/NewsCard.js

import React from "react";

export default function NewsCard({ article }) {
  return (
    <div className="card mb-3 shadow-sm h-100">
      {/* ✅ This image will now load for every card */}
      <img
        src="/images/download.jpg"
        alt="News"
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">
          {article.description || "No description available."}
        </p>
        <a
          href={article.url}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
