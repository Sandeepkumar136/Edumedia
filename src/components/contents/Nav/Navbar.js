import React, { useState } from 'react'
import ImageProvider from '../../assets/ImageProvider';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const ToggleSidebar = ()=>{
        setIsSidebarOpen(!isSidebarOpen)
    }
  return (
    <header className='header'>
        <nav className="nav">
            <div className="logo-contain">
                <img src={ImageProvider[0].logo_light} className='logo' alt={ImageProvider[0].alt} />
                <h5 className='logo-text' >Edumedia</h5>
            </div>
            <ul className="nav-content">
                <li className="nav-item"><i className="bx bx-search"></i></li>
                <li className="nav-item"><i className="bx bx-category-alt"></i></li>
                <li className="nav-item"><i className="bx bx-user"></i></li>
                <li className="nav-item"><i className='bx bx-trending-up' ></i></li>
                <li className="nav-item"><i className='bx bx-bookmark' ></i></li>
                <li className="nav-item"><i className='bx bx-cog' ></i></li>
                <li onClick={ToggleSidebar} className="nav-item-toggle"><i className='bx bx-menu' ></i></li>
            </ul>
        </nav>
        <aside className={`sidebar ${isSidebarOpen? 'open': ''}`} >
            <ul className="side-content">
                <li className="side-item"><span className="icon-side"><i className="bx bx-search"></i></span><span className="text-side">Search</span></li>
                <li className="side-item"><span className="icon-side"><i className="bx bx-category-alt"></i></span><span className="text-side">Categories</span></li>
                <li className="side-item"><span className="icon-side"><i className="bx bx-user"></i></span><span className="text-side">Authors</span></li>
                <li className="side-item"><span className="icon-side"><i className="bx bx-trending-up"></i></span><span className="text-side">Trending</span></li>
                <li className="side-item"><span className="icon-side"><i className="bx bx-bookmark"></i></span><span className="text-side">Bookmarks</span></li>
                <li className="side-item"><span className="icon-side"><i className="bx bx-cog"></i></span><span className="text-side">Settings</span></li>
            </ul>
        </aside>
      
    </header>
  )
}

export default Navbar;
