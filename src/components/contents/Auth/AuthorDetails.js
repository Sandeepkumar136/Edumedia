import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AuthorDetails = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/authors/${id}.json`)
      .then((response) => {
        setAuthor(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching author details:", err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading author details...</h2>;
  if (error || !author) return <h2>Error loading author details</h2>;

  return (
    <div className="author-details">
      <h2>{author.name}</h2>
      <img
        src={`https://covers.openlibrary.org/a/olid/${id}-M.jpg`}
        alt={author.name}
        onError={(e) => (e.target.src = "https://via.placeholder.com/150x220?text=No+Image")}
      />
      <p><strong>Birth Date:</strong> {author.birth_date || "Unknown"}</p>
      <p><strong>Death Date:</strong> {author.death_date || "N/A"}</p>
      <p><strong>Bio:</strong> {author.bio?.value || author.bio || "No biography available."}</p>
      <p><strong>Top Work:</strong> {author.top_work || "Not available"}</p>
    </div>
  );
};

export default AuthorDetails;
