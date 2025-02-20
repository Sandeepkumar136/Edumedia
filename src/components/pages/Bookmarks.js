import React from 'react';
import { motion } from 'framer-motion';
import { useSavedBooks } from '../context/SavedBooksProvider';
import BookCard from '../contents/Home/BookCard';
import ImageProvider from '../assets/ImageProvider';

const Bookmarks = () => {
  const { savedBooks } = useSavedBooks();

  return (
    <div>
      {savedBooks.length > 0 ? (
        <div className="home-card-container">
          {savedBooks.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      ) : (
        <motion.div
          className="fav-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={ImageProvider[7].favorites}
            alt={ImageProvider[7].alt}
            className="img-fav"
          />
          <h5 className="heading-fav">There are no Bookmarked books yet.</h5>
        </motion.div>
      )}
    </div>
  );
};

export default Bookmarks;
