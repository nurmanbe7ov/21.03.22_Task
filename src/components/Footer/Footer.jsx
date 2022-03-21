import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="makers.kg">
            <img
              src="https://makers.courses/static/media/logo.0abbd97a.svg"
              alt=""
              className="img"
            />
          </Navbar.Brand>
          <div className="fs-2">
            <p>Copyright 2022 Makers All rights reserved</p>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
