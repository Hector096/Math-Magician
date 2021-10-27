import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="p-3">
        <NavLink to="/" className="h2 text-decoration-none text-light">Math Magician</NavLink>
        <Nav className="ms-auto">
          <NavLink to="/" className="h5 me-4 link" activeClassName="link-active">Home</NavLink>
          <NavLink to="calculator" className="h5 me-4 link" activeClassName="link-active">Calculator</NavLink>
          <NavLink to="quote" className="h5 me-4 link" activeClassName="link-active">Quote</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
