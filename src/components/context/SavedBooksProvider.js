import { createContext, useContext, useEffect, useState } from "react";

const SavedBooksContext = createContext();

export const SavedBooksProvider = ({ children }) => {
  const [savedBooks, setSavedBooks] = useState(() => {
    // Load saved books from localStorage on initial render
    try {
      return JSON.parse(localStorage.getItem("savedBooks")) || [];
    } catch (error) {
      console.error("Error parsing saved books from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    // Save updated books to localStorage whenever `savedBooks` changes
    localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
  }, [savedBooks]);

  const toggleSaveBook = (book) => {
    setSavedBooks((prevBooks) => {
      const isSaved = prevBooks.some((b) => b.key === book.key);
      if (isSaved) {
        return prevBooks.filter((b) => b.key !== book.key); // Remove book
      } else {
        return [...prevBooks, book]; // Add book
      }
    });
  };

  return (
    <SavedBooksContext.Provider value={{ savedBooks, toggleSaveBook }}>
      {children}
    </SavedBooksContext.Provider>
  );
};

export const useSavedBooks = () => {
  return useContext(SavedBooksContext);
};
