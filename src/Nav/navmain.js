import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import {Navigate ,  Outlet} from 'react-router-dom'
 
function navmain() {
  return (
    <>
    <>
    <div>
      <nav>
        <a href='#Headder'> <img src={require('../assets/Logo/Herd-Help-Logo.png')} className="logo" alt="logo" style={{ height: 60, width: 200}} /></a>
        <div className='nav-links'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                  {/* <Outlet/><Navigate to={'/'} ></Navigate> */}
                  
                <li><Link to='/account'><img src={require('../assets/Logo/user.png')} className="userlogo" alt="logo" style={{ height: 22, width: 22}} /></Link></li>
            </ul>
        </div>
    </nav></div>
    </>
    </>
  )
}

export default navmain