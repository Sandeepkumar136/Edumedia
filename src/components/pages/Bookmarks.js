import React from 'react'
import { useSavedBooks } from '../context/SavedBooksProvider'
import BookCard from '../contents/Home/BookCard';

const Bookmarks = () => {
  const {savedBooks} = useSavedBooks();
  return (
    <div className='home-card-container' >
      {savedBooks.length> 0 ? (
        savedBooks.map((book)=> <BookCard key={book.key} book={book} />)
      ):(
        <p>No books found</p>
      )}
    </div>
  )
}

export default Bookmarks
