import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import ISBNBookCard from "../contents/ISBN/ISBNBookCard";
import ImageProvider from "../assets/ImageProvider";

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
    <>
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
      <div className="is-container">
        <div className="is-contents">
          <div className="is-text-contain">
          <h4 className="heading-is">3 Steps to Find Books by ISBN</h4>
          <ol className="is-list">
            <li className="is-items">Get the ISBN, various formats are supported. e.g. <span className="is-num">0073545775</span> (10-digit), <span className="is-num">9780073545776</span> (13-digit), or even with hyphens <span className="is-num">978-0-07-354577-6</span>.</li>
            <li className="is-items">Enter or paste the ISBN into the search box and click the Search button.</li>
            <li className="is-items">If the book is found, you will be redirected to the book details page.
            </li>
          </ol>
          </div>
          <div className="is-img-contain">
            <img src={ImageProvider[8].isbn} alt={ImageProvider[8].alt} className="is-img" />
          </div>
        </div>
        <div className="bn-faq">
          
        </div>
      </div>
    </>
  );
};

export default ISBNScanner;
