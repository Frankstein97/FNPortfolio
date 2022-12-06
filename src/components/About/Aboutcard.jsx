import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css"

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Soy un Argentino, viviendo en{" "}
            <span className="purple"> Buenos Aires </span>
            <br />
            Tengo dos gatos que son parte de mi familia, Fausto y Ray.
            plantas y andar en bicicleta. 
            Tambien me gusta el ciber-punk y las peliculas de estudios ghibli. 
            <br />
            <br />
            Mi interes por programar comenzo en 2020. Y desde ese año estoy
            practicando y realizando bootcamps para fomentar mi aprendizaje.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
