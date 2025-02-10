import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://openlibrary.org/search/authors.json?q=trending&limit=20") // Fetch top authors
      .then((response) => {
        setAuthors(response.data.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching authors:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching authors</h2>;

  return (
    <div className="authors-container">
      <h2>Trending Authors</h2>
      <div className="authors-grid">
        {authors.map((author) => (
          <div key={author.key} className="author-card">
            <img
              src={`https://covers.openlibrary.org/a/olid/${author.key}-M.jpg`}
              alt={author.name}
              onError={(e) => (e.target.src = "https://via.placeholder.com/150x220?text=No+Image")}
            />
            <h3>{author.name}</h3>
            <Link to={`/author/${author.key}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
