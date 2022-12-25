import React from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import bmoFace from "../../assets/bmoface.gif";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    // Esta es una libreria para enviarme a mi mismo lo que pongan en el form.
    emailjs
      .sendForm(
        "service_8ilrj4l",
        "template_o5vkhd4",
        e.target,
        "RPcFyJss-erUEuDnF"
      )
      .then(
        (reject) => {
          Swal.fire(
            "Gracias por enviarme un mensajito!!",
            "En cuanto lo lea intentare contestarlo."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="formTotal">
      <h1>
        CONTACT<span className="purple">AME!</span>
      </h1>
      <section className="contact-form">
        <form className="form" onSubmit={sendEmail}>
          <div className="bmoFace">
            <img src={bmoFace} alt="bmoface" />
          </div>
          <div className="nombre">
            <label className="label" htmlFor="nombre">
              <h5>NOMBRE:</h5>
              <input
                name="nombre"
                required
                type="text"
                id="name"
                placeholder="Me decis tu nombre?"
              ></input>{" "}
            </label>
          </div>
          <div className="mail">
            <label className="label" htmlFor="mail">
              <h5>EMAIL:</h5>
              <input
                name="mail"
                required
                type="text"
                id="email"
                placeholder="Asi puedo responderte"
              ></input>
            </label>
          </div>
          <div className="msg">
            <label className="label" htmlFor="message">
              <h5>MENSAJE:</h5>
              <textarea
                name="message"
                required
                id="message"
                rows="10"
                placeholder="Algo que me quieras decir..."
              />
            </label>
          </div>
          <div className="submit">
            <input type="submit" className="boton-submit" value="ENVIAR" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
