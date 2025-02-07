import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", textAlign: "center" }}>
      <img src={coverUrl} alt={book.title} style={{ width: "150px", height: "220px", objectFit: "cover" }} />
      <h3>{book.title}</h3>
      <p>Author: {book.author_name?.[0] || "Unknown"}</p>
      <Link to={`/book/${book.key.replace("/works/", "")}`} style={{ textDecoration: "none", color: "blue" }}>
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
