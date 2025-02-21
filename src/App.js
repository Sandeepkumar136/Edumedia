import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/contents/Nav/Navbar";
import "./components/ui/Style.css";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Bookmarks from "./components/pages/Bookmarks";
import Trending from "./components/pages/Trending";
import BooksDetails from "./components/contents/Home/BooksDetails";
import { SearchContextProvider } from "./components/context/SearchContext";
import { SavedBooksProvider } from "./components/context/SavedBooksProvider";
import { SoundProvider } from "./components/context/SoundContext";
import { VibrationProvider } from "./components/context/VibrationContext";
import { DialogueBoxContextProvider } from "./components/context/DialogueBoxContext";
import Dialogue from "./components/dialog/Dialogue";
import { DarkModeProvider } from "./components/context/DarkModeContext";
import { ConfirmBoxContextProvider } from "./components/context/ConfirmBoxContext";
import ConfirmDialogueBox from "./components/contents/others/ConfirmDialogueBox";
import ISBNScanner from "./components/pages/ISBNScanner";
import { BookProvider } from "./components/context/BookContext";
import About from "./components/pages/About";
import Support from "./components/pages/Support";

const App = () => {
  return (
    <Router>
      <DarkModeProvider>
      <DialogueBoxContextProvider>
        <ConfirmBoxContextProvider>
          <BookProvider>
        <SoundProvider>
          <VibrationProvider>
            <SavedBooksProvider>
              <SearchContextProvider>
                <Navbar />
                <Dialogue/>
                <ConfirmDialogueBox/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/isbn" element={<ISBNScanner />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/bookmarks" element={<Bookmarks />} />
                  <Route path="/trends" element={<Trending />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/book/:id" element={<BooksDetails />} />
                  

                  
                </Routes>
              </SearchContextProvider>
            </SavedBooksProvider>
          </VibrationProvider>
        </SoundProvider>
        </BookProvider>
        </ConfirmBoxContextProvider>
      </DialogueBoxContextProvider>
      </DarkModeProvider>
    </Router>
  );
};

export default App;
