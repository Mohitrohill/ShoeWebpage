import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Menu from './Menu'
import About from './About'
import Location from './Location'
import Contact from './Contact'
import Main from './Main'



function App() {
  return (
    <div className='container'>
      <nav>
        <ul className='nav-bar'>
          <img src="images/brand_logo.png" alt="" />
          <input type="checkbox" id="check"/>
          <span className='menu'>
            <BrowserRouter>
              <li><Link to="/Menu">MENU</Link></li>
              <li><Link to="/Location">LOCATION</Link></li>
              <li><Link to="/About">ABOUT</Link></li>
              <li><Link to="/Contact">CONTACT</Link></li>
              <Routes>
                <Route path='/Menu' element={<Menu/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/Location' element={<Location/>} />
                <Route path='/Contact' element={<Contact/>} />
              </Routes>
            </BrowserRouter>
          </span>
         
          <label for="check" className="open-menu"><i className='fas fa-bars' id='cancel' ></i></label>
          <label for="check" className="close-menu"><i className='fas fa-times' id='btn' ></i></label>
          
        </ul>
      </nav>
      <div className="container2">
        <Main/>
      </div>
    </div>
  )
}

export default App

