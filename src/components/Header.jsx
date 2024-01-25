import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" collapseOnSelect>
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand>Proshop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to={"/cart"}>
              <Nav.Link>
                <i className="fa-solid fa-cart-shopping"></i> Cart
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to={"/login"}>
              <Nav.Link>
                <i className="fa-solid fa-user"></i> Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header
