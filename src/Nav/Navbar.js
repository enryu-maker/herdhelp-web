import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { COLORS } from '../Theme/Theme';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3 fixed-top"  id='Headder' style={{
        backgroundColor:COLORS.Primary
    }}>
        <div className="container" 
    >
        <img src={require('../assets/Logo/Herd-Help-Logo.png')} className="logo" alt="logo" style={{
            height:60,
            width:200,
        }} />
        <button className="navbar-toggler" type='button' data-toggle='collapse' data-target="#navmenu" aria-expanded='true' aria-controls='collapseOne'>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" aria-labelledby='navbar' data-parent='accordianThree' id="navmenu">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a href="#Header" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="" className="nav-link">Login</a></li>
                <li className="nav-item"><a href="" className="nav-link">Register</a></li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar;