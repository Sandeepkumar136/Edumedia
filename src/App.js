import React from 'react'
import Navbar from './components/contents/Nav/Navbar';
import './components/ui/Style.css';
import Home from './components/pages/Home';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App;
