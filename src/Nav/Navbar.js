import React from 'react'
import './Navbar.css'

function NavBar() {
  return (
    <>
      <nav>
        <a href='#Headder'> <img src={require('../assets/Logo/Herd-Help-Logo.png')} className="logo" alt="logo" style={{ height: 60, width: 200, }} /></a>
        <div className='nav-links'>
            <ul>
                <li><a href="#Headder">Home</a></li>
                <li><a href="#Login">Login</a></li>
                <li><a href="#Register">Register</a></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default NavBar