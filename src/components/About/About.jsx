import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "../About/Aboutcard";
import logobailando from "../../assets/logobailando.gif";
import "./style.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col md={7}>
          <h1 className="about_title">
            Quien <strong className="purple">Soy</strong>
          </h1>
          <Aboutcard />
        </Col>
        <Col md={5} className="about-img">
          <img
            src={logobailando}
            alt="about"
            className="img-fluid"
            width={"100 px"}
          />
        </Col>
      </Row>
      <h2 className="project-heading">
        <strong className="purple"> Skills </strong>
      </h2>
      <ul className="badges">
        <li style={{ backgroundColor: "rgb(227 79 38)" }}>
          <img
            src={
              "https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat-square"
            }
            alt="HTML"
          />
        </li>
        <li style={{ backgroundColor: "rgb(21 114 182)" }}>
          <img
            src={
              "https://img.shields.io/badge/-CSS-1572B6?logo=CSS3&logoColor=white&style=flat-square"
            }
            alt="CSS"
          />
        </li>
        <li style={{ backgroundColor: "rgb(247 223 30)" }}>
          <img
            src={
              "https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=white&style=flat-square"
            }
            alt="JavaScript"
          />{" "}
        </li>
        <li style={{ backgroundColor: "rgb(49 120 198)" }}>
          <img
            src={
              "https://img.shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=white&style=flat-square"
            }
            alt="TypeScript"
          />
        </li>
      </ul>
      <h2 className="project-heading">
        <strong className="purple">Herra</strong> 
        mientas
      </h2>
      <ul className="badges">
        <li style={{ backgroundColor: "#31A8FF" }}>
          <img
            src={
              "https://img.shields.io/badge/-Photoshop-31A8FF?logo=Adobe-Photoshop&logoColor=white&style=flat-square"
            }
            alt="Photoshop"
          />
        </li>
        <li style={{ backgroundColor: "#0052CC" }}>
          <img
            src={
              "https://img.shields.io/badge/-Jira-0052CC?logo=Jira&logoColor=white&style=flat-square"
            }
            alt="Jira"
          />
        </li>
        <li style={{ backgroundColor: "#F24E1E" }}>
          <img
            src={
              "https://img.shields.io/badge/-Figma-F24E1E?logo=Figma&logoColor=white&style=flat-square"
            }
            alt="Figma"
          />
        </li>
        <li style={{ backgroundColor: "#FF6C37" }}>
          <img
            src={
              "https://img.shields.io/badge/-Postman-FF6C37?logo=Postman&logoColor=white&style=flat-square"
            }
            alt="Postman"
          />
        </li>
      </ul>
    </Container>
  );
}

export default About;
