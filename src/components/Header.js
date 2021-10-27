import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="p-3">
        <Navbar.Brand href="/" className="h1">Math Magician</Navbar.Brand>
        <Nav className="ms-auto">
          <Link to="/" className="h5 me-4 text-decoration-none text-light">Home</Link>
          <Link to="/calculator" className="h5 me-4 text-decoration-none text-secondary">Calculator</Link>
          <Link to="/quote" className="h5 me-4 text-decoration-none text-secondary">Quote</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
