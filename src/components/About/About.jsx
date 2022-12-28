import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import logofestejando from "../../assets/logofestejando.gif";
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
//
function About() {
  return (
    <Container fluid className="about-section">
      <div className="section">
        <h1 className="about_title">
          QUIEN <strong className="purple"> SOY </strong>
        </h1>
        <div className="quote-card-view">
          <div className="about-text">
            <p style={{ textAlign: "justify" }}>
            Soy un Necochense viviendo recientemente en
              <span className="purple"> Buenos Aires. </span>
              <br />
              <br />
              Tengo dos gatos que son parte de mi familia, Fausto y Ray. Uno es
              un loco y el otro es un pancho, se complementan super bien.
              <br />
              <br />
              En mis ratos libres disfruto andar en bicicleta, conocer lugares
              nuevos, juntarme con amigxs y cuidar mis plantas, que en su
              mayoría son suculentas que inundan de verde el departamento.
              <br />
              También me gusta el ciber-punk, los videojuegos y el séptimo arte,
              cuando era chico quería ser director de cine, pero resulté ser
              solo crítico ( jajaja! ).
              </p>
              <div className="logobailando">
                <img
                  src={logofestejando}
                  alt="about"
                  className="img-fluid"
                  width={"100px"}
                />
              </div>
              <p>
              <br />
              <br />
              Mi interés por programar comenzó en 2020.
              <br />
              Como a mucha gente, me afecto rotundamente la pandemia.
              A causa de esto tuve que abandonar la carrera y desde ese año estoy
              practicando y realizando bootcamps para fomentar mi aprendizaje en desarrollo.
              Sin prisa pero sin pausa.
              <br />
              <br />
              ¡Y así descubrí que me encanta la programación y el universo de posibilidades e ideas que giran en torno a ella!
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2 className="subtitles">
          <strong> SKILLS </strong>
        </h2>
        <ul className="icons-list">
          <li className="probando">
            <img src={html} alt="html" className="icons" />
          </li>
          <li>
            <img src={css} alt="css" className="icons" />
          </li>
          <li>
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
        <h2 className="subtitles">ESTOY APRENDIENDO</h2>
        <ul className="icons-list">
          <li>
            <img src={sql} alt="sql" className="icons" />
          </li>
          <li>
            <img src={mongodb} alt="mongodb" className="icons" />
          </li>
          <li>
            <img src={docker} alt="docker" className="icons" />
          </li>
        </ul>
        <ul className="icons-list">
          <li>
            <img src={vue} alt="vue" className="icons" />
          </li>
          <li>
            <img src={node} alt="nodejs" className="icons" />
          </li>
          <li>
            <img src={angular} alt="angular" className="icons" />
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default About;
