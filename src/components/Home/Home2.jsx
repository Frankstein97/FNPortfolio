import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Home2() {
  return (
    <Container fluid className="home-about-section home-section2" id="about">
      <Row>
        <Col className="home-about-description">
          <h1>
            Lets<span className="purple"> Started </span> !
          </h1>
          <p className="home-about-body">
            Aqui encontraras mi informacion personal asi como tambien a la
            estrella de este portfolio, <b className="purple"> BMO. </b>
            <br />
            <br />
            En 2020 comencé a incursionar en el mundo de la tecnología y el
            aprendizaje autodidacta. Realice bootcamps de{" "}
            <b className="purple">Testing QA</b> y{" "}
            <b className="purple">FrontEnd React</b> en <b>#Coderhouse</b>, que
            junto al opensource y a mis compañeros me ayudaron a posicionarme
            mas fuertemente en este camino que es la programación.
            <i>
              <br />
              <br />
              También realice un taller trimestral de{" "}
              <b className="purple"> Backend con TypeScript y Express</b> en
              <b>#Puerta18</b>, lugar donde el aprendizaje es grupal y
              presencial. Fue muy plasentero trabajar codo a codo con
              compañerxs.
              <br />
              <br />
              Estoy esforzándome mucho por capacitarme y conseguir un trabajo de
              desarrollador, no solo porque me divierto programando, sino porque{" "}
              <b className="purple">
                quiero convertir mi potencial en un oficio.
              </b>
            </i>
            <br />
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default Home2;
