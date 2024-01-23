import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar expand="lg" bg='dark' variant='dark' collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Proshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#link"><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link> 
            <Nav.Link href="#home"><i className="fa-solid fa-user"></i> Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
