import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div className="config-home">
      <div className="home-card"
      >
        <div className="home-img-contain">
          <img
          className="img-home"
            src={coverUrl}
            alt={book.title}
          />
        </div>
        <div className="home-text-contain">
          <div className="heading-config">
          <h3>{book.title}.</h3>
          <i className="icon-save bx bx-bookmark"></i>

          </div>
          <p><span className="span-p-home" >Author:</span> <span className="span-text-home">{book.author_name?.[0] || "Unknown"}</span></p>
          <Link className="btn-home"
            to={`/book/${book.key.replace("/works/", "")}`}
          >
            View Details
          </Link>
        </div>
    </div>
    </div>
  );
};

export default BookCard;
