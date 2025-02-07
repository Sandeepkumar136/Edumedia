import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BookCard from "./BookCard";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("fiction"); // Default search topic

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/search.json?q=${search}&limit=30`)
      .then((response) => {
        setBooks(response.data.docs.slice(0, 30)); // Ensure exactly 30 books
      })
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>📚 Book Library</h1>
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px" }}>
        {books.length > 0 ? (
          books.map((book) => <BookCard key={book.key} book={book} />)
        ) : (
          <p>Loading books...</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
