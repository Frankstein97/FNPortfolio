import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <img variant="bottom" src={props.imgPath} alt="card-img" />
      <h3> {props.title} </h3>
      <p>{props.description}</p>
      <Card.Footer className="footer-card">
        <Button
          variant="dark"
          href={props.ghLink}
          target="_blank"
          className="button"
        >
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
          <Button
            variant="dark"
            className="button"
            href={props.demoLink}
            target="_blank"
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
