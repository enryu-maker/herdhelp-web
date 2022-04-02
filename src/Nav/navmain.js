import React from 'react'
import './Navbar.css'
// import {Navigate ,  Outlet} from 'react-router-dom'
 
function navmain() {
  return (
    <>
    <>
      <nav>
        <a href='#Headder'> <img src={require('../assets/Logo/Herd-Help-Logo.png')} className="logo" alt="logo" style={{ height: 60, width: 200}} /></a>
        <div className='nav-links'>
            <ul>
                <li><a href="#Headder">Home</a></li>
                  {/* <Outlet/><Navigate to={'/'} ></Navigate> */}
                  
                <li><a href="#Login"><img src={require('../assets/Logo/user.png')} className="userlogo" alt="logo" style={{ height: 22, width: 22}} /></a></li>
            </ul>
        </div>
    </nav>
    </>
    </>
  )
}

export default navmain