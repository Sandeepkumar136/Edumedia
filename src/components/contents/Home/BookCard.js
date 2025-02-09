import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { color, motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSavedBooks } from "../../context/SavedBooksProvider";

const BookCard = ({ book }) => {
  // Debugging: Check what data is coming
  console.log("Book Data:", book);
  const {savedBooks, toggleSaveBook} = useSavedBooks();
  const isSaved = savedBooks.some((b)=> b.key === book.key);

  // Handle cover image fallback
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : book.cover_edition_key
    ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  // Handle author name fallback
  const author = book.author_name && book.author_name.length > 0 ? book.author_name.join(", ") : "Unknown";

  return (
    <motion.div
      className="config-home"
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="home-card">
        <div className="home-img-contain">
          <LazyLoadImage
            className="img-home"
            src={coverUrl}
            alt={book.title}
            effect="blur"
            placeholderSrc="https://via.placeholder.com/150x220?text=Loading..."
          />
        </div>
        <div className="home-text-contain">
          <div className="heading-config">
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {book.title}
            </motion.h3>
            <motion.i
              className={`icon-save bx ${isSaved ? "bx-bookmark-minus": "bx-bookmark"}`}
              style={{color: isSaved ? "red": "black"}}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              onClick={()=> toggleSaveBook(book)}
            ></motion.i>
          </div>
          <p className="auth-name">
            <span className="span-p-home">Author:</span>{" "}
            <span className="span-text-home">{author}</span>
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link className="btn-home" to={book.key ? `/book/${book.key.replace("/works/", "")}` : "#"}>
              View Details
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
