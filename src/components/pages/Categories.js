import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Loader from "../utility/Spinner";
import BookCard from "../contents/Home/BookCard";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("horror");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);

  const categories = [
    { value: "fiction", label: "Fiction" },
    { value: "science_fiction", label: "Science Fiction" },
    { value: "fantasy", label: "Fantasy" },
    { value: "romance", label: "Romance" },
    { value: "history", label: "History" },
    { value: "biography", label: "Biography" },
    { value: "horror", label: "Horror" },
    { value: "mystery", label: "Mystery" },
    { value: "philosophy", label: "Philosophy" },
    { value: "technology", label: "Technology" },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://openlibrary.org/subjects/${selectedCategory}.json?limit=30`)
      .then((response) => {
        console.log("Books from API:", response.data.works); // Debug API Response
        setBooks(response.data.works);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books", error);
        setLoading(false);
        setError(true);
      });
  }, [selectedCategory]);

  return (
    <div className="categories-container">
      <div className="dropdownbtn">
        <h4 className="heading-select">Select a book category.</h4>
        <Select
          options={categories}
          defaultValue={categories.find((cat) => cat.value === selectedCategory)}
          onChange={(selectedOptionCategory) =>
            setSelectedCategory(selectedOptionCategory.value)
          }
          styles={{
            control: (base) => ({ ...base, width: "300px", margin: "0 auto" }),
          }}
        />
      </div>
      <div className="home-card-container">
        {loading ? (
          <Loader />
        ) : (
          books.map((book) => (
            <BookCard
              key={book.key}
              book={{
                ...book,
                author_name: book.authors ? book.authors.map((a) => a.name) : ["Unknown"],
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Categories;
