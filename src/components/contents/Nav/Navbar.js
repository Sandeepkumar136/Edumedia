import React, { useContext, useState } from 'react'
import ImageProvider from '../../assets/ImageProvider';
import { Link } from 'react-router-dom';
import SearchContext from '../../context/SearchContext';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {setShowSearch} = useContext(SearchContext);
    const ToggleSidebar = ()=>{
        setIsSidebarOpen(!isSidebarOpen)
    }
  return (
    <header className='header'>
        <nav className="nav">
            <Link to='/' className="logo-contain">
                <img src={ImageProvider[0].logo_light} className='logo' alt={ImageProvider[0].alt} />
                <h5 className='logo-text' >Edumedia</h5>
            </Link>
            <ul className="nav-content">
                <li onClick={()=> setShowSearch(prev => ! prev)} className="nav-item"><i className="bx bx-search"></i></li>
                <Link to='/categories' className="nav-item"><i className="bx bx-category-alt"></i></Link>
                <Link to='/auth' className="nav-item"><i className="bx bx-user"></i></Link>
                <Link to='/trends' className="nav-item"><i className='bx bx-trending-up' ></i></Link>
                <Link to='/bookmarks' className="nav-item"><i className='bx bx-bookmark' ></i></Link>
                <li className="nav-item"><i className='bx bx-cog' ></i></li>
                <li onClick={ToggleSidebar} className="nav-item-toggle"><i className='bx bx-menu' ></i></li>
            </ul>
        </nav>
        <aside className={`sidebar ${isSidebarOpen? 'open': ''}`} >
            <ul className="side-content">
                <li onClick={ToggleSidebar} className="side-item"><span className="icon-side"><i className="bx bx-search"></i></span><span className="text-side">Search</span></li>
                <Link onClick={ToggleSidebar} to='/categories' className="side-item"><span className="icon-side"><i className="bx bx-category-alt"></i></span><span className="text-side">Categories</span></Link>
                <Link onClick={ToggleSidebar} to='/auth' className="side-item"><span className="icon-side"><i className="bx bx-user"></i></span><span className="text-side">Authors</span></Link>
                <Link onClick={ToggleSidebar} to='/trends' className="side-item"><span className="icon-side"><i className="bx bx-trending-up"></i></span><span className="text-side">Trending</span></Link>
                <Link onClick={ToggleSidebar} to='/bookmarks' className="side-item"><span className="icon-side"><i className="bx bx-bookmark"></i></span><span className="text-side">Bookmarks</span></Link>
                <li onClick={ToggleSidebar} className="side-item"><span className="icon-side"><i className="bx bx-cog"></i></span><span className="text-side">Settings</span></li>
            </ul>
        </aside>
      
    </header>
  )
}

export default Navbar;
