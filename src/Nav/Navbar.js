import React, {Component} from 'react'
import { Navbar , Nav, NavDropdown, Form , FormControl , Button , Container } from 'react-bootstrap';
import './Navbar.css'
import { COLORS } from '../Theme/Theme';


function NavBar() {
  return (
    <Navbar className='navbar fixed-top navigation'>
  <Container fluid className='innavbar'>
    <Navbar.Brand href="#"><img src={require('../assets/Logo/Herd-Help-Logo.png')} className="logo" alt="logo" style={{height:60,width:200,}} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
     
      <Form className="d-flex search" >
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2" 
          aria-label="Search"
        />
        <Button  >Search</Button>
      </Form>

      <Nav
        className="me-auto my-2 my-lg-0 menu"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#Headder">Home</Nav.Link>
        <Nav.Link href="#Login">Login</Nav.Link>
        <Nav.Link href="#Register">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    // <nav className="navbar navbar-expand-lg py-3 fixed-top"  id='Headder' style={{backgroundColor:COLORS.Primary}}>
    //     <div className="container" >
    //     <img src={require('../assets/Logo/Herd-Help-Logo.png')} className="logo" alt="logo" style={{height:60,width:200,}} />
        
    //     <button className="navbar-toggler" type='button' data-toggle='collapse' data-target="#navmenu" aria-expanded='true' aria-controls='collapseOne'>
    //         <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" aria-labelledby='navbar' data-parent='accordianThree' id="navmenu">
    //         <ul className="navbar-nav ms-auto">
    //             <li className="nav-item"><a href="#Header" className="nav-link">Home</a></li>
    //             <li className="nav-item"><a href="#login" className="nav-link">Login</a></li>
    //             <li className="nav-item"><a href="#register" className="nav-link">Register</a></li>
    //         </ul>
    //     </div>
    //     </div>
    // </nav>
  )
}

export default NavBar;