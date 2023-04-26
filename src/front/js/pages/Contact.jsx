import React, { useState } from "react";
import "../../styles/contact.css";
import contactPic from "../../img/comparte.jpeg"

export const Contact = () => {
    let url = process.env.BACKEND_URL;
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        loading: false,
        success: false,
        error: null
    });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormState({ ...formState, loading: true });
    fetch(url + "/api/contact", {
      method: "POST",
      body: new FormData(event.target),
    })
      .then((response) => {
        if (response.ok) {
          setFormState({
            name: "",
            email: "",
            subject: "",
            message: "",
            loading: false,
            success: true,
            error: null,
          });
        } else if (response.status === 400) {
          setFormState({
            ...formState,
            loading: false,
            error: "Por favor, rellena todos los campos requeridos",
          });
        } else {
          response.text().then((errorMessage) => {
            setFormState({
              ...formState,
              loading: false,
              error: errorMessage,
            });
          });
        }
      })
      .catch((error) => {
        setFormState({
          ...formState,
          loading: false,
          error: "Error de conexión, inténtalo de nuevo más tarde",
        });
      });
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

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-middle">
            <form
              onSubmit={handleFormSubmit}
              className="php-email-form"
              noValidate
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Tu nombre</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
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
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value                })
                }
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
              value={formState.subject}
              onChange={(e) =>
                setFormState({ ...formState, subject: e.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              className="form-control"
              name="message"
              rows="5"
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div className="text-center">
            <div id="form-message"></div>
            <button
              type="submit"
              className="btn-contact btn-primary py-2 px-4"
              disabled={formState.loading}
            >
              {formState.loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Enviando...
                </>
              ) : (
                "Enviar"
              )}
            </button>
          </div>
          {formState.success && (
            <div className="mt-3">
              <div className="alert alert-success">
                Gracias por contactar con nosotros. Te responderemos lo más
                pronto posible.
              </div>
            </div>
          )}
          {formState.error && (
            <div className="mt-3">
              <div className="alert alert-danger">{formState.error}</div>
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
</section>
)
}