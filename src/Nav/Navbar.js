import React from 'react'
import { Navbar , Nav, Container } from 'react-bootstrap';
import './Navbar.css'
// import { COLORS } from '../Theme/Theme';


function NavBar() {
  return (
  <>

<Navbar collapseOnSelect expand="lg" className='navbar fixed-top navigation' style={{ height: 70}} variant="light">
  <Container>
  <Navbar.Brand href="#home"><img src={require('../assets/Logo/Herd-Help-Logo.png')} className="logo" alt="logo" style={{ height: 60, width: 200, }} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#Headder">Home</Nav.Link>
      <Nav.Link href="#Login">Login</Nav.Link>
      <Nav.Link href="#Register">Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
   
 </>
  )
}

export default NavBar;