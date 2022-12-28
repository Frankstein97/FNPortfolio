import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Home2() {
  return (
    <Container fluid className="home-about-section home-section2" id="about">
      <Row>
        <Col className="home-about-description">
          <h1>
            Let's get<span className="purple"> started </span>!
          </h1>
          <p className="home-about-body">
            Aquí encontrarás mi información personal, así como también a la
            estrella de este portfolio, <b className="purple"> BMO. </b>
            <br />
            <br />
            En 2020 comencé a incursionar en el mundo de la tecnología y el
            aprendizaje autodidacta. Realicé bootcamps de {" "}
            <b className="purple">Testing QA</b> y {" "}
            <b className="purple">FrontEnd React</b> en <b>#Coderhouse</b>, que
            junto al opensource y a mis compañerxs, me ayudaron a posicionarme
            más fuertemente en este camino que es <i>la programación. </i>
              <br />
              <br />
              También realice un taller trimestral de {" "}
              <b className="purple"> Backend </b> con <b className="purple"> TypeScript </b> y <b className="purple"> Express </b> en
              <b> #Puerta18</b>, lugar donde el aprendizaje es grupal y
              presencial. Fue muy placentero trabajar codo a codo con
              compañerxs y en equipo.
              <br />
              <br />
              Estoy esforzándome en capacitarme y conseguir un trabajo de
              desarrollador, no solo porque me divierto programando, sino porque 
              <b className="purple"> quiero convertir mi potencial en un oficio. </b>
            <br />
            <br />
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default Home2;
