import React from "react";
import "../../styles/contact.css";
import contactPic from "../../img/comparte.jpeg"

export const Contact = () => (
    <section id="contact" className="contact mb-5 pb5">
        <div className="container mb-5" data-aos="fade-up">
            <div className="section-title">
                <h2 className="mt-5">Contacto</h2>
                <p>
                    Tengas una o un millón, siempre que sean relativas a <strong>GeekPost</strong>,
                    te solucionamos todas las dudas que tengas.
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
                    <form action="" method="post" role="form" className="php-email-form">
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
                                <label htmlFor="name">Tu correo electrónico</label>
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
                            <label htmlFor="name">Asunto</label>
                            <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Mensaje</label>
                            <textarea
                                className="form-control"
                                name="message"
                                rows="10"
                                required
                            ></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">
                                Tu mensaje ha sido enviado. ¡Gracias!
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-send-contact-form">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);