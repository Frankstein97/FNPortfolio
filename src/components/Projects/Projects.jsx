import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import logopatineta from "../../assets/logopatineta.gif";
//proyects:
import cafeapp from "../../assets/proyects/cafeapp.gif";
import homebanking from "../../assets/proyects/homebanking.gif";
import puzzle from "../../assets/proyects/puzzle.gif";
import thunder from "../../assets/proyects/thunder.gif";
//falta agregar este mismo proyecto como portfolio

function Projects() {
  return (
    <div>
      <div className="project-section-head">
        {/* <div className="project-section-head"> */}
        <h1 className="project-heading">
          MIS TRABAJOS <strong className="purple"> + RECIENTES </strong>
        </h1>
        <p className="text-heading">
          Sentite libre de espiar el código o utilizar las demo de
          <br />
          ↓   aqui abajo ↓{" "}
        </p>
        <div className="logobailando">
          <img
            src={logopatineta}
            alt="about"
            className="img-fluid"
            width={"100px"}
          />
        </div>
      </div>
      <div className="project-section">
        <Row className="project-section">
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={cafeapp}
              isBlog={false}
              title="Cafe App"
              description="Esta app fue creada para practicar con React y cumple con las funciones básicas de un Ecommerce ficticio.
              También es una manera de demostrar lo que sé sobre cafetería de especialidad...
              En el futuro quiero volver a verla y recordar que antes de ser desarrollador, fui barista :)"
              ghLink="https://github.com/Frankstein97/FranksteinCafe.git"
              demoLink="https://franksteincafe.vercel.app/"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={homebanking}
              isBlog={false}
              title="Home Banking"
              description="Se trata de una aplicación donde el usuario posee una cuenta de banco. En la misma puede realizar extracciones, depósito, cambiar el límite de extracción y realizar pago de servicios. Por otro lado, me sirvió para fortalecer la práctica de estilado (CSS) y lógica de desarrollo (Javascript).
            
            "
              ghLink="https://github.com/Frankstein97/HomeBanking-.git"
              demoLink="https://frankstein97-homebanking.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={puzzle}
              isBlog={false}
              title="Frankstein Puzzle"
              description="Se trata de un puzzle en el cual hay que mover una pieza vacía hasta formar la imagen del rompecabezas. Se programó para ser utilizado tanto en escritorio como en mobile, de forma tal que puede moverse la pieza tanto con el teclado como con los botones que aparecen en pantalla."
              ghLink="https://github.com/Frankstein97/Frankstein-Puzzle.git"
              demoLink="https://frankstein-puzzle.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={thunder}
              isBlog={false}
              title="Thundercats-app"
              ghLink="https://github.com/Frankstein97/JS-Thundercats-coderhouse-.git"
              description="Este fue mi primer proyecto para Coderhouse realizado en Javascript. Empezó siendo un sistema de fichaje de empleados, aunque le falta mucho a este sistema operativo de la nave Thundercat, no quería dejar de mostrarlo porque estoy orgulloso de mis primeros pasos, y del avance que logré hasta ahora.                                              "
              demoLink="https://thundercats-franco-nicoletti.netlify.app/"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Projects;
