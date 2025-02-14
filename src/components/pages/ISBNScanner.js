import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';
import ISBNBookCard from '../contents/ISBN/ISBNBookCard';

const ISBNScanner = () => {
  const { books, setBooks, setLoading } = useContext(BookContext);
  const [isbn, setIsbn] = useState('');

  const fetchBook = async () => {
    if (!isbn) return;
    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
      const data = await response.json();
      const bookData = data[`ISBN:${isbn}`];

      if (bookData) {
        setBooks([...books, { id: isbn, ...bookData }]);
      }
    } catch (error) {
      console.error('Error fetching book:', error);
    }
    setLoading(false);
    setIsbn('');
  };

  return (
    <div className='b-c-container'>
      <input className='inp-b-c'
        type="text"
        placeholder="Enter ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button className='b-c-btn' onClick={fetchBook}>Scan</button>

      <div>
        {books.map((book) => (
          <ISBNBookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ISBNScanner;
