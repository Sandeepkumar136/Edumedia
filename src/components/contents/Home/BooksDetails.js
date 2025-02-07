import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`https://openlibrary.org/works/${id}.json`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  const coverUrl = book.covers
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  const readableLink = `https://openlibrary.org/works/${id}`;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{book.title}</h1>
      <img src={coverUrl} alt={book.title} style={{ width: "200px", height: "300px" }} />
      <p><strong>Description:</strong> {book.description?.value || "No description available"}</p>
      <p><strong>Subjects:</strong> {book.subjects?.join(", ") || "Unknown"}</p>
      <a href={readableLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}>
        📖 Read Now
      </a>
    </div>
  );
};

export default BookDetails;
