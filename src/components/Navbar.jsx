import "./style.css";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import pdf from "../assets/CV-IT Franco Nicoletti.pdf";
import {
  AiOutlineDownload,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="bottom"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav defaultActiveKey="#home">
            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Frankstein97"
                target="_blank"
                className="fork-btn-inner"  
              >
                <GoMarkGithub style={{ fontSize: "1.2em" }} /> github
              </Button>
            </Nav.Item> */}
            <Nav.Item>
              <NavLink as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Sobre
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Proyectos
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineMail style={{ marginBottom: "2px" }} /> Contacto
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
          <Button
            className="resume_button"
            variant="Link"
            href={pdf}
            target="_blank"
            
          >
            <AiOutlineDownload />
            &nbsp;Resumen
          </Button>
        {/* </Row> */}
      </Container>
    </Navbar>
  );
}

export default NavBar;
