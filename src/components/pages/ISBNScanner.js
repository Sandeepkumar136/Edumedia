import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import ISBNBookCard from "../contents/ISBN/ISBNBookCard";
import ImageProvider from "../assets/ImageProvider";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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
      <motion.div className="b-c-container" initial="hidden" animate="visible" variants={fadeInUp}>
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
            <button className="b-c-btn" onClick={fetchBook}>Search</button>
          </div>
        </div>
      </motion.div>

      <div className="b-c-card-container">
        {books.map((book, index) => (
          <motion.div key={book.id} initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: index * 0.2 }}>
            <ISBNBookCard book={book} />
          </motion.div>
        ))}
      </div>
      
      <motion.div className="is-container" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <div className="is-contents">
          <motion.div className="is-text-contain" variants={fadeInUp}>
            <h4 className="heading-is">3 Steps to Find Books by ISBN</h4>
            <ol className="is-list">
              <li className="is-items">
                Get the ISBN, various formats are supported. e.g. <span className="is-num">0073545775</span> (10-digit),
                <span className="is-num">9780073545776</span> (13-digit), or even with hyphens <span className="is-num">978-0-07-354577-6</span>.
              </li>
              <li className="is-items">Enter or paste the ISBN into the search box and click the Search button.</li>
              <li className="is-items">If the book is found, you will be redirected to the book details page.</li>
            </ol>
          </motion.div>
          <motion.div className="is-img-contain" variants={fadeInUp}>
            <img
              src={ImageProvider[8].isbn}
              alt={ImageProvider[8].alt}
              className="is-img"
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div className="bn-faq" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false }}>
        <div className="heading-bn">FAQ</div>
        <h5 className="question-bn">What is an ISBN?</h5>
        <p className="answer-bn">
          An <abbr title="International Standard Book Number" className="isbn-full-form">ISBN</abbr> is an International Standard Book Number, which consists of 10 digits or 13 digits. It uniquely identifies books published internationally. Every ISBN consists of 5 parts: an EAN prefix, a registration group, a registrant, a publication, and a check digit.
        </p>
        <h5 className="question-bn">What is the difference between an ISBN-10 and ISBN-13?</h5>
        <p className="answer-bn">
          The main difference is that ISBN-10 is the older system whereas ISBN-13 is the new system. So ISBN-13 has an EAN prefix, but ISBN-10 doesn't, and the check digit is also different.
        </p>
      </motion.div>
      
      <motion.div className="qbn-container" initial="hidden" animate="visible" variants={fadeInUp}>
        <Link className="qbn-contain" to='/about'>&copy;  2025 ISBN Searcher All rights reserved.</Link>
      </motion.div>
    </>
  );
};

export default ISBNScanner;
