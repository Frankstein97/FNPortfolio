import React from "react";
import { Container, Col } from "react-bootstrap";
import homeLogo from "../../assets/logobailando.gif";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Type from "./Type";
import "./style.css";

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Col className="home-header">
          <h2 className="heading">
            Hola Mundo!
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h2>
          <h1 className="heading-name">
            Soy <br />
            <strong className="main-name"> Franco Nicoletti </strong>
          </h1>
          <div className="type">
            <Type />
          </div>
        </Col>

        <div className="home-pic">
          <img
            src={homeLogo}
            alt="home pic"
            className="img-fluid"
            style={{ maxHeight: "180px", marginTop: "30px" }}
          />
        </div>
      </Container>
      <Home2 />
      <Home3 />
    </>
  );
}

export default Home;
