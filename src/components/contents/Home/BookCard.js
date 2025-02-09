import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <motion.div
      className="config-home"
      initial={{ y: 50, opacity: 0, scale: 0.9 }} // Start from bottom, slightly smaller
      animate={{ y: 0, opacity: 1, scale: 1 }} // Animate to normal
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth animation
    >
      <div className="home-card">
        <div className="home-img-contain">
          <LazyLoadImage
            className="img-home"
            src={coverUrl}
            alt={book.title}
            effect="blur" // Blur effect while loading
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
              {book.title}.
            </motion.h3>
            <motion.i
              className="icon-save bx bx-bookmark"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            ></motion.i>
          </div>
          <p className="auth-name">
            <span className="span-p-home">Author:</span>{" "}
            <span className="span-text-home">{book.author_name?.[0] || "Unknown"}</span>
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }} // Slightly enlarge on hover
            whileTap={{ scale: 0.95 }} // Click effect
          >
            <Link className="btn-home" to={`/book/${book.key.replace("/works/", "")}`}>
              View Details
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
