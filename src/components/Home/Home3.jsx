import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Home3 = () => {
  return (
    <Container fluid className="home-about-section home-section2" id="about">
      <div>
        <div className="home-about-social">
          <h1>ENCONTRAME</h1>
          <p>
            <span className="purple">Y ampliemos la red! </span>
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/Frankstein97"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/franco-nicoletti-2993b3a7/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <NavLink as={Link} to="/contact">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Home3;
