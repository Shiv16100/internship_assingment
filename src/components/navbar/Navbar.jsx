import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
       <div id="navbar-main-div">
              <div id="left">
                     <h1>Carrer <span>Corps</span></h1>
              </div>
              <div id="center">
                     <a href="#">Carrer Program</a>
                     <a href="#">About Us</a>
                     <a href="#">Why Us</a>
                     <a href="#">Contact</a>
              </div>
              <div id="right">
                     <button id='signup'>Sign Up</button>
                     <button id='registernow'>Register Now</button>

              </div>
              </div>   
    </div>
  )
}

export default Navbar