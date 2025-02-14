import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Loader from "../utility/Spinner";
import BookCard from "../contents/Home/BookCard";
import { useDarkMode } from "../context/DarkModeContext";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("horror");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const { darkMode } = useDarkMode(); // Access Dark Mode from Context

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

  // Custom Dark Mode Styles for react-select
  const customStyles = {
    control: (base, state) => ({
      ...base,
      width: "300px",
      margin: "0 auto",
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      borderColor: state.isFocused ? (darkMode ? "#999" : "#444") : darkMode ? "#555" : "#ccc",
    }),
    singleValue: (base) => ({
      ...base,
      color: darkMode ? "#fff" : "#000",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: darkMode ? "#222" : "#fff",
      borderRadius: "8px",
      boxShadow: darkMode ? "0px 4px 10px rgba(255, 255, 255, 0.1)" : "0px 4px 10px rgba(0, 0, 0, 0.1)",
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected
        ? darkMode
          ? "#555"
          : "#ddd"
        : isFocused
        ? darkMode
          ? "#444"
          : "#eee"
        : "transparent",
      color: darkMode ? "#fff" : "#000",
      cursor: "pointer",
      ":active": {
        backgroundColor: darkMode ? "#666" : "#ccc",
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: darkMode ? "#fff" : "#000",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: darkMode ? "#555" : "#ccc",
    }),
  };

  return (
    <div className={`categories-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="dropdownbtn">
        <h4 className="heading-select">Select a book category.</h4>
        <Select
          options={categories}
          defaultValue={categories.find((cat) => cat.value === selectedCategory)}
          onChange={(selectedOptionCategory) =>
            setSelectedCategory(selectedOptionCategory.value)
          }
          styles={customStyles} // Apply custom styles
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
