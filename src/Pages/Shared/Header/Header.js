import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar className=" fixed-top bg-cyan-800" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="h-8" alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
