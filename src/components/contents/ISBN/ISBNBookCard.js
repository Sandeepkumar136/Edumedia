import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import ConfirmationDialog from "./ConfirmationDialog";
import { BookContext } from "../../context/BookContext";

const ISBNBookCard = ({ book }) => {
  const { books, setBooks } = useContext(BookContext);
  const [showConfirm, setShowConfirm] = useState(false);


  // Handle author name fallback
  const author = book.authors?.[0]?.name || "Unknown";

  const removeBook = () => {
    setBooks(books.filter((b) => b.id !== book.id));
    setShowConfirm(false);
  };

  return (
    <motion.div
      className="isbn-book-card"
      initial={{ y: 50, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="isbn-book-container">
        <div className="isbn-book-details">
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {book.title}
          </motion.h3>
          <p className="isbn-book-author">
            <strong>Author:</strong> {author}
          </p>
          <div className="isbn-book-actions">
            <motion.button
              className="isbn-book-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(book.url, "_blank")}
            >
              View Details
            </motion.button>
            <motion.button
              className="isbn-book-remove-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowConfirm(true)}
            >
              Remove
            </motion.button>
          </div>
        </div>
      </div>

      {showConfirm && (
        <ConfirmationDialog
          onConfirm={removeBook}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </motion.div>
  );
};

export default ISBNBookCard;
