import React, { useContext, useState } from "react";
import ImageProvider from "../../assets/ImageProvider";
import { Link } from "react-router-dom";
import SearchContext from "../../context/SearchContext";
import { useDialogueContext } from "../../context/DialogueBoxContext";
import { useDarkMode } from "../../context/DarkModeContext";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setShowSearch } = useContext(SearchContext);
  const { OpenDialogue } = useDialogueContext();
  const { darkMode } = useDarkMode();
  const ToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  if (OpenDialogue) {
    console.log("dialog opened");
  }
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo-contain">
          {darkMode ? (
            <img
              src={ImageProvider[1].logo_dark}
              className="logo"
              alt={ImageProvider[0].alt}
            />
          ) : (
            <img
              src={ImageProvider[0].logo_light}
              className="logo"
              alt={ImageProvider[0].alt}
            />
          )}
          <h5 className="logo-text">EDUmedia</h5>
        </Link>
        <ul className="nav-content">
          <li
            onClick={() => setShowSearch((prev) => !prev)}
            className="nav-item"
          >
            <i className="bx bx-search"></i>
          </li>
          <Link to="/categories" className="nav-item">
            <i className="bx bx-category-alt"></i>
          </Link>
          <Link to="/isbn" className="nav-item">
          <i className='bx bx-barcode-reader'></i>
                    </Link>
          <Link to="/trends" className="nav-item">
            <i className="bx bx-trending-up"></i>
          </Link>
          <Link to="/bookmarks" className="nav-item">
            <i className="bx bx-bookmark"></i>
          </Link>
          <Link to="/support" className="nav-item">
            <i className="bx bx-message-square"></i>
          </Link>
          <Link to="/about" className="nav-item">
            <i className="bx bx-info-circle"></i>
          </Link>
          <li onClick={OpenDialogue} className="nav-item">
            <i className="bx bx-cog"></i>
          </li>
          <li onClick={ToggleSidebar} className="nav-item-toggle">
            <i className={`bx ${isSidebarOpen ? "bx-x" : "bx-menu"}`}></i>
          </li>
        </ul>
      </nav>
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="side-content">
          <li
            onClick={() => {
              setShowSearch((prev) => !prev);
              ToggleSidebar();
            }}
            className="side-item"
          >
            <span className="icon-side">
              <i className="bx bx-search"></i>
            </span>
            <span className="text-side">Search</span>
          </li>
          <Link onClick={ToggleSidebar} to="/categories" className="side-item">
            <span className="icon-side">
              <i className="bx bx-category-alt"></i>
            </span>
            <span className="text-side">Categories</span>
          </Link>
          <Link onClick={ToggleSidebar} to="/isbn" className="side-item">
            <span className="icon-side">
            <i className='bx bx-barcode-reader'></i>            </span>
            <span className="text-side">ISBN Scanner</span>
          </Link>
          <Link onClick={ToggleSidebar} to="/trends" className="side-item">
            <span className="icon-side">
              <i className="bx bx-trending-up"></i>
            </span>
            <span className="text-side">Trending</span>
          </Link>
          <Link onClick={ToggleSidebar} to="/bookmarks" className="side-item">
            <span className="icon-side">
              <i className="bx bx-bookmark"></i>
            </span>
            <span className="text-side">Bookmarks</span>
          </Link>
          <Link onClick={ToggleSidebar} to="/support" className="side-item">
            <span className="icon-side">
              <i className="bx bx-message-square"></i>
            </span>
            <span className="text-side">Support</span>
          </Link>
          <Link onClick={ToggleSidebar} to="/about" className="side-item">
            <span className="icon-side">
              <i className="bx bx-info-circle"></i>
            </span>
            <span className="text-side">About</span>
          </Link>
          <li
            onClick={() => {
              OpenDialogue();
              ToggleSidebar();
            }}
            className="side-item"
          >
            <span className="icon-side">
              <i className="bx bx-cog"></i>
            </span>
            <span className="text-side">Settings</span>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default Navbar;
