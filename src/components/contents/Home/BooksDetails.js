import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/works/${id}.json`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!book) return <p>Loading...</p>;

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

  // Function to format the description properly
  const formatDescription = (text) => {
    // Convert Markdown-style links [text](url) into <a> tags
    text = text.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:blue;text-decoration:none">$1</a>'
    );

    // Preserve existing HTML tags inside <span> for safety
    text = text.replace(
      /<\/?(b|i|u|em|strong|small|mark|del|ins|sub|sup)>/g,
      (match) => `<span>${match}</span>`
    );

    return { __html: text };
  };

  // Extract and format subjects
  const formattedSubjects = book.subjects?.length ? (
    <div>
      <strong>Subjects:</strong>{" "}
      {book.subjects.map((subject, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            backgroundColor: "#f0f0f0",
            padding: "5px 10px",
            margin: "5px",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        >
          {subject}
        </span>
      ))}
    </div>
  ) : (
    <p><strong>Subjects:</strong> Unknown subjects</p>
  );

  return (
    <div className="bd-container">
      <div className="bd-img-contain">
        <img className="img-bd"
          src={coverUrl}
          alt={book.title}
        />
      </div>
      <div className="bd-text-contain">
      <h1>{book.title}.</h1>
      <p>
        <strong>Description:</strong>{" "}
        <span dangerouslySetInnerHTML={formatDescription(bookDescription)} />
      </p>
      {formattedSubjects}
      <a
        href={readableLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "blue", fontSize: "18px" }}
      >
        📖 Read Now
      </a>
      </div>
    </div>
  );
};

export default BookDetails;
