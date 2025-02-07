import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import SearchContext from "../../context/SearchContext";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("fiction"); // Default search topic
    const { showSearch } = useContext(SearchContext);

    useEffect(() => {
        axios
            .get(`https://openlibrary.org/search.json?q=${search}&limit=30`)
            .then((response) => {
                setBooks(response.data.docs.slice(0, 30)); // Ensure exactly 30 books
            })
            .catch((error) => console.error(error));
    }, [search]);

    return (
        <div style={{ textAlign: "center" }}>
            {
                showSearch &&

                <div className="search-box-contain">
                    <h1>📚 Book Library</h1>
                    <input
                        type="text"
                        placeholder="Search books..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
                    />
                </div>
            }
            <div className="home-card-container">
                {books.length > 0 ? (
                    books.map((book) => <BookCard key={book.key} book={book} />)
                ) : (
                    <p>Loading books...</p>
                )}
            </div>
        </div>
    );
};

export default BookList;
