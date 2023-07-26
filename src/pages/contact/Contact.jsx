import React, { useState } from "react";
import { FaEnvelopeOpen, FaPhoneSquareAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    const mailOptions = {
      from: {
        name: nombre,
        email: email,
      },
      to: ["mawiis455@gmail.com"],
      subject: asunto,
      text: mensaje,
      publicKey: "VVS3blU2zcPLaWbT5-Wmp",
    };

    emailjs.send(mailOptions);
  };

  return (
    <div className=" contact ">
      <h2 className="section__title">
        Ponerse en <span className="contacto"> contacto</span>
      </h2>
      <div className="contact__container container grid">
        <h3 className="contact__title">No seas tímido</h3>
        <p className="contact__description">
          No dude en ponerse en contacto conmigo. Siempre estoy abierto a
          discutir nuevos proyectos, ideas creativas u oportunidades para ser
          parte de sus visiones.
        </p>
        <div className="contact__info">
          <div className="info__item">
            <FaEnvelopeOpen className="info__icon"/>
            <div>
              <span className="info__title">Escribeme</span>
              <h4 className="info__desc info__descc">mawiis455</h4>
            </div>
          </div>
          <div className="info__item">
            <FaPhoneSquareAlt className="info__icon" />
            <div>
              <span className="info__title">Llamame</span>
              <h4 className="info__desc">+57 3011083342</h4>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
      <div className="form__input-group">
        <div className="form__input-div">
          <input
            type="text"
            placeholder="Tu Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="form__control"
          />
        </div>

        <div className="form__input-div">
          <input
            type="email"
            placeholder="Tu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form__control"
          />
        </div>

        <div className="form__input-div">
          <input
            type="text"
            placeholder="Asunto"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            className="form__control"
          />
        </div>
      </div>

      <div className="form__input-div">
        <textarea
          placeholder="Tu Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="form__control textarea"
        ></textarea>
      </div>
      <button className="button">
        Enviar Mensaje
        <span className="button__icon contact__button-icon">
          <FiSend />
        </span>
      </button>
    </form>
      </div>
    </div>
  );
};

export default Contact;
