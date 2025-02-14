import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <BookContext.Provider value={{ books, setBooks, loading, setLoading }}>
      {children}
    </BookContext.Provider>
  );
};
