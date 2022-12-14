import React from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

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
    <div className="formTotal ">
      <h1>
        CONTACT<span className="purple">AME!</span>
      </h1>
      <section className="contact-form">
        <form onSubmit={sendEmail}>
          <div>
            <div className="nombre">
              <label for="nombre">
                NOMBRE:
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
              <label for="mail">
                EMAIL:
                <input
                  name="mail"
                  required
                  type="text"
                  id="email"
                  placeholder="Asi puedo responderte"
                ></input>
              </label>
            </div>
          </div>
          <div>
            <div className="msg">
              <label for="message">
                MENSAJE:
                <textarea
                  name="message"
                  required
                  id="message"
                  rows="10"
                  placeholder="Algo que me quieras decir..."
                />
              </label>
              <input type="submit" className="boton-submit" value="ENVIAR" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
