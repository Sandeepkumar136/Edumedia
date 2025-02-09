import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import BookCard from "./BookCard";
import SearchContext from "../../context/SearchContext";
import Loader from "../../utility/Spinner";

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
        <div>
            {/* Animate Search Box from Top */}
            {showSearch && (
                <motion.div 
                    className="search-box-contain"
                    initial={{ y: -50, opacity: 0 }} // Start from top, hidden
                    animate={{ y: 0, opacity: 1 }} // Move to original position
                    transition={{ duration: 0.5, ease: "easeOut" }} // Smooth effect
                >
                    <h1 className="heading-search">Search Your Need...</h1>
                    <input
                        className="input-search"
                        type="text"
                        placeholder="Search books..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </motion.div>
            )}

            {/* Animate Book Cards from Bottom */}
            <motion.div 
                className="home-card-container"
                initial={{ y: 50, opacity: 0 }} // Start from bottom, hidden
                animate={{ y: 0, opacity: 1 }} // Move to original position
                transition={{ duration: 0.6, ease: "easeOut" }} // Smooth effect
            >
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <motion.div
                            key={book.key}
                            initial={{ y: 20, opacity: 0 }} // Start slightly lower
                            animate={{ y: 0, opacity: 1 }} // Move up to normal
                            transition={{ delay: index * 0.05, duration: 0.3 }} // Staggered animation
                        >
                            <BookCard book={book} />
                        </motion.div>
                    ))
                ) : (
                    <Loader />
                )}
            </motion.div>
        </div>
    );
};

export default BookList;
