import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { IoHome } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ background: "white" }}>
      <Container style={{ fontSize: "20px" }}>
        <Navbar.Brand href="/">
          <img src={logo} alt="" style={{ height: "70px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "500px" }}>
            <Nav.Link href="/">
              <IoHome style={{marginLeft:"30px"}}/>
            </Nav.Link>
            <Nav.Link href="/work">
              <BsPersonWorkspace style={{marginLeft:"30px"}}/>
            </Nav.Link>
            <Nav.Link href="/about">
              <SiAboutdotme style={{marginLeft:"30px"}}/>
            </Nav.Link>
            <Nav.Link href="/feedback">
              <VscFeedback style={{marginLeft:"30px"}}/>
            </Nav.Link>
            <Nav.Link eventKey={2} href="/contact">
              <MdOutlineAlternateEmail style={{marginLeft:"30px"}}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
