import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
import Spinner from "../../utility/Spinner";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/works/${id}.json`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!book) return <Spinner />;

  const coverUrl = book.covers
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  const readableLink = `https://openlibrary.org/works/${id}`;

  // Extract book description
  let bookDescription = book.description
    ? typeof book.description === "string"
      ? book.description
      : book.description.value
    : "No description available.";

  // Function to format description (Markdown support for bold, italic, links)
  const formatDescription = (text) => {
    text = text.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:blue;text-decoration:none">$1</a>'
    );
    text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    text = text.replace(/\*(.*?)\*/g, "<i>$1</i>");

    return { __html: text };
  };

  // Extract and format subjects
  const formattedSubjects = book.subjects?.length ? (
    <motion.div
      className="sub-bd-contain"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <strong>Subjects:</strong>{" "}
      {book.subjects.map((subject, index) => (
        <span key={index}>{subject}</span>
      ))}
    </motion.div>
  ) : (
    <p>
      <strong>Subjects:</strong> Unknown subjects
    </p>
  );

  return (
    <motion.div
      className="bd-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bd-img-contain"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <LazyLoadImage
          className="img-bd"
          src={coverUrl}
          alt={book.title}
          effect="blur"
          placeholderSrc="https://via.placeholder.com/200x300?text=Loading..."
        />
      </motion.div>

      <motion.div
        className="bd-text-contain"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {book.title}.
        </motion.h1>

        <p>
          <strong>Description:</strong>{" "}
          <span dangerouslySetInnerHTML={formatDescription(bookDescription)} />
        </p>

        {formattedSubjects}

        <motion.a
          className="bd-link"
          href={readableLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read Now
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default BookDetails;
