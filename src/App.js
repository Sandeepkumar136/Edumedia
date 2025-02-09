import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/contents/Nav/Navbar";
import "./components/ui/Style.css";
import Home from "./components/pages/Home";
import Authors from "./components/pages/Authors";
import Categories from "./components/pages/Categories";
import Bookmarks from "./components/pages/Bookmarks";
import Trending from "./components/pages/Trending";
import BooksDetails from "./components/contents/Home/BooksDetails";
import { SearchContextProvider } from "./components/context/SearchContext";
import { SavedBooksProvider } from "./components/context/SavedBooksProvider";

const App = () => {
  return (
    <Router>
      <SavedBooksProvider>
        <SearchContextProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Authors />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/trends" element={<Trending />} />
            <Route path="/book/:id" element={<BooksDetails />} />
          </Routes>
        </SearchContextProvider>
      </SavedBooksProvider>
    </Router>
  );
};

export default App;
