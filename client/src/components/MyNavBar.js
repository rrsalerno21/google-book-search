import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MyNavBar = () => {
  return (
    <Navbar sticky="top" className="mb-2">
      <Navbar.Brand href="/">Google Book Search</Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/saved">Saved</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default MyNavBar;
