import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

export default function Footer() {
  return (
    <div>
      <Container fluid className="bg-dark text-light p-3 footer text-center">
        &copy;
        {new Date().getFullYear()}
        - Math Magician by Hector - All Rights Reserved
      </Container>
    </div>
  );
}
