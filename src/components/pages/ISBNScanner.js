import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import ISBNBookCard from "../contents/ISBN/ISBNBookCard";

const ISBNScanner = () => {
  const { books, setBooks, setLoading } = useContext(BookContext);
  const [isbn, setIsbn] = useState("");

  const fetchBook = async () => {
    if (!isbn) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
      );
      const data = await response.json();
      const bookData = data[`ISBN:${isbn}`];

      if (bookData) {
        setBooks([...books, { id: isbn, ...bookData }]);
      }
    } catch (error) {
      console.error("Error fetching book:", error);
    }
    setLoading(false);
    setIsbn("");
  };

  return (
    <div>
      <div className="b-c-container">
        <div className="b-c-heading-config">
          <h3 className="heading-inp-b-c">ISBN Search & Lookup</h3>
          <h5 className="medil-heading-b-c">Find Books By ISBN</h5>
        <div className="input-contain-b-c">
          <input
            className="inp-b-c"
            type="text"
            placeholder="Enter ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            />
          <button className="b-c-btn" onClick={fetchBook}>
            Search
          </button>
            </div>
        </div>
      </div>

      <div className="b-c-card-container">
        {books.map((book) => (
          <ISBNBookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ISBNScanner;
