import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../contents/Home/BookCard";
import Loader from "../utility/Spinner";

const Trending = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://openlibrary.org/trending/now.json")
      .then((response) => {
        setBooks(response.data.works.slice(0, 30)); // Corrected "works" instead of "docs"
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching trending books:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-card-container">
      {loading ? <Loader /> : books.map((book) => <BookCard key={book.key} book={book} />)}
    </div>
  );
};

export default Trending;
