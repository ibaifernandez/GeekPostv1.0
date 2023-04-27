import React, { useState } from "react";
import "../../styles/contact.css";
import contactPic from "../../img/comparte.jpeg";
import emailjs from "emailjs-com";
import {Link} from "react-router-dom";

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setErrorMessage(null);
          setSuccessMessage("Tu mensaje ha sido enviado. ¡Gracias!");
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setSending(false);
          setErrorMessage(
            "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo."
          );
        }
      );
  };

  return (
    <section id="contact" className="contact mb-5 pb5">
      <div className="container mb-5" data-aos="fade-up">
        <div className="section-title">
          <h2 className="mt-5">Contacto</h2>
          <p>
            Tengas una o un millón, siempre que sean relativas a{" "}
            <strong>GeekPost</strong>, te solucionamos todas las dudas que tengas.
          </p>
        </div>

        <div className="row">
            <div className="col-lg-5">
              <div className="info d-flex flex-column justify-content-between">
                <div className="contact-img-container">
                  <img className="contact-img" src={contactPic} alt="" />
                </div>
              </div>
            </div>
        {formSubmitted ? (
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-middle">
                <div className="contact-form-after success-message"><p className="">{successMessage}</p>
                    <Link to="/home">
                        <button className="mt-5 btn-send-contact-form">
                            Volver al inicio
                        </button>
                    </Link>
                </div>
            </div>
            ) : (
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-middle">
                <form
                    onSubmit={sendEmail}
                    method="post"
                    role="form"
                    className="contact-form-before"
                >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Tu nombre</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Tu correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />

              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                className="form-control"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                {sending ? (
                  <span>
                    <i className="me-3 fa fa-spinner fa-spin"></i> Enviando...
                  </span>
                ) : (
                  "Enviar mensaje"
                )}
              </button>
            </div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </form>
          
        </div>
 )}
      </div>
   
  </div>
</section>
);
};