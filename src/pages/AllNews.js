import { useEffect, useState } from "react";
import axios from "axios";

export default function AllNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    
    // ✅ Dummy API for testing
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        console.log("Fetched news:", res.data); // Debug output
        setNews(res.data.slice(0, 15)); // Limit to 15 dummy articles
      })
      .catch(err => {
        console.error("Fetch failed:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="mb-3">All News </h2>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status" />
          <p>Loading news...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger">
          Something went wrong while fetching news. Please try again later.
        </div>
      )}

      {!loading && !error && news.length === 0 && (
        <p>No news updates here.</p>
      )}

      <div className="row">
        {!loading && !error && news.map((item, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.body}</p>
                <a href={`https://jsonplaceholder.typicode.com/posts/${item.id}`} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
