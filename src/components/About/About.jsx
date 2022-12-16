import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import logobailando from "../../assets/logobailando.gif";
// Tendria que ver como achicar esto de las imagenes
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import javascript from "../../assets/icons/javascript.png";
import react from "../../assets/icons/react.png";
import angular from "../../assets/icons/angular.png";
import docker from "../../assets/icons/docker.png";
import figma from "../../assets/icons/figma.png";
import firebase from "../../assets/icons/firebase.png";
import jira from "../../assets/icons/jira.png";
import mongodb from "../../assets/icons/mongodb.png";
import node from "../../assets/icons/node.png";
import npm from "../../assets/icons/npm.png";
import sql from "../../assets/icons/sql.png";
import postman from "../../assets/icons/postman.png";
import vue from "../../assets/icons/vue.png";


function About() {
  return (
    <Container fluid className="about-section">
      <div className="section">
        <h1 className="about_title">
          Quien <strong className="purple">Soy</strong>
        </h1>
        <div className="quote-card-view">
          <div className="about-text">
            <p style={{ textAlign: "justify" }}>
              Soy un Argentino, viviendo en{" "}
              <span className="purple"> Buenos Aires </span>
              <br />
              Tengo dos gatos que son parte de mi familia, Fausto y Ray. plantas
              y andar en bicicleta. Tambien me gusta el ciber-punk y las
              peliculas de estudios ghibli.
              <br />
              <br />
              Mi interes por programar comenzo en 2020. Y desde ese año estoy
              practicando y realizando bootcamps para fomentar mi aprendizaje.
              <br />
            </p>
          </div>
          <div className="logobailando">
            <img
              src={logobailando}
              alt="about"
              className="img-fluid"
              width={"100px"}
            />
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="project-heading">
          <strong className="purple"> SKILLS </strong>
        </h2>
        <button class="pulse">Pulse</button>
        <ul className="icons-list">
          <li className="probando">
            <img src={html} alt="html" className="icons" />
          </li>
          <li>
            <img src={css} alt="css" className="icons" />
          </li>
          <li >
            <img src={javascript} alt="javascript" className="icons" />
          </li>
          <li>
            <img src={react} alt="react" className="icons" />
          </li>
          <li>
            <img src={firebase} alt="firebase" className="icons" />
          </li>
          <li>
            <img src={npm} alt="firebase" className="npm" />
          </li>
          <br />
          <li>
            <img src={postman} alt="postman" className="icons" />
          </li>
          <li>
            <img src={jira} alt="jira" className="icons" />
          </li>
          <li>
            <img src={figma} alt="react" className="icons" />
          </li>
        </ul>
</div>
<div className="section">

        <h2 className="project-heading">
          <strong className="purple">Sigo</strong>
          aprendiendo
        </h2>
        <ul className="icons-list">
          <li>
            <img src={sql} alt="sql" className="icons" />
          </li>
          <li >
            <img src={mongodb} alt="mongodb" className="icons" />
          </li>
          <li>
            <img src={docker} alt="docker" className="icons" />
          </li>
          </ul>
          <ul className="icons-list">
          <li >
            <img src={vue} alt="vue" className="icons" />
          </li>
          <li>
            <img src={node} alt="nodejs" className="icons" />
          </li>
          <li >
            <img src={angular} alt="angular" className="icons" />
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default About;
