import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
//proyects:
import cafeapp from "../../assets/proyects/cafeapp.gif";
import homebanking from "../../assets/proyects/homebanking.gif"
import puzzle from "../../assets/proyects/puzzle.gif"
import thunder from "../../assets/proyects/thunder.gif"
//falta agregar este mismo proyecto como portfolio


function Projects() {
  return (
    <Container fluid className="project-section">
        <h1 className="project-heading">
          MIS TRABAJOS <strong className="purple">  + RECIENTES</strong>
        </h1>
        <p style={{ color: "white" }}>
          Sentite libre de espiar el codigo o probar la demo :) !
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", margin: "6px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cafeapp}
              isBlog={false}
              title="Cafe App"
              description="Esta app fue creada para practicar con React y es cumple con las funciones basicas de un Ecommerce ficticio.
              Tambien es una manera de demostrar lo que sé sobre cafeteria de especialidad...
              En el futuro quiero volver a verla y recordar que antes de ser desarrollador, fui barista :)"
              ghLink="https://github.com/Frankstein97/FranksteinCafe.git"
              demoLink="https://franksteincafe.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homebanking}
              isBlog={false}
              title="Home Banking"
              description="Se trata de una aplicacion donde el usuario posee una cuenta de banco, en la misma puede realizar extracciones, deposito, cambiar el limite de extraccion y realizar pago de servicios. Por otro lado, me sirvio para fortalecer la practica de estilado(CSS) y logica de desarrollo (Javascript)."
              ghLink="https://github.com/Frankstein97/HomeBanking-.git"
              demoLink="https://frankstein97-homebanking.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puzzle}
              isBlog={false}
              title="Frankstein Puzzle"
              description="Se trata de un puzzle el cual mueve una pieza vacia hasta llegar al resultado evidente del rompecabezas. Se programo para ser utilizado tanto en escritorio como en mobile. De forma tal que pude moverse la pieza tanto con el teclado como con los botones que aparecen en pantalla."
              ghLink="https://github.com/Frankstein97/Frankstein-Puzzle.git"
              demoLink="https://frankstein-puzzle.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thunder}
              isBlog={false}
              title="Thundercats-app"
              description="Este fue mi primer proyecto para Coderhouse / Javascript. Naturalmente, le falta mucho a este sistema operativo de la nave comando, pero no queria dejar de mostrarlo porque estoy orgulloso de mis primeros pasos."
              ghLink="https://github.com/Frankstein97/JS-Thundercats-coderhouse-.git"
              demoLink="https://thundercats-franco-nicoletti.netlify.app/"
            />
          </Col>
        </Row>
    </Container>
  );
}

export default Projects;