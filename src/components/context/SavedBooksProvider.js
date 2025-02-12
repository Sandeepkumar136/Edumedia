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

  // Function to add/remove a single book from favorites
  const toggleSaveBook = (book) => {
    setSavedBooks((prevBooks) => {
      const isSaved = prevBooks.some((b) => b.key === book.key);
      return isSaved
        ? prevBooks.filter((b) => b.key !== book.key) // Remove book
        : [...prevBooks, book]; // Add book
    });
  };

  // Function to remove all favorite books
  const removeAllFavorites = () => {
    setSavedBooks([]); // Clear all saved books
    localStorage.removeItem("savedBooks"); // Also clear from localStorage
  };

  return (
    <SavedBooksContext.Provider value={{ savedBooks, toggleSaveBook, removeAllFavorites }}>
      {children}
    </SavedBooksContext.Provider>
  );
};

export const useSavedBooks = () => {
  return useContext(SavedBooksContext);
};
