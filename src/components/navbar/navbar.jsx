import React from 'react'
import './navbar.css'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function navbar() {
  return (
    // <div>Navbar</div>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top" id='Headder'>
        <div className="container">
        <img src={Logo} alt='' className= "logo"/>


        <button className="navbar-toggler" type='button' data-toggle='collapse' data-target="#navmenu" aria-expanded='true' aria-controls='collapseOne'>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" aria-labelledby='navbar' data-parent='accordianThree' id="navmenu">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a href="#Headder" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="" className="nav-link">Login</a></li>
                <li className="nav-item"><a href="" className="nav-link">Register</a></li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default navbar