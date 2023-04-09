import React from "react";
import "../../styles/contact.css";
import contactPic from "../../img/comparte.jpeg"

export const Contact = () => (
    <section id="contact" className="contact mb-5 pb5">
        <div className="container mb-5" data-aos="fade-up">
            <div className="section-title">
                <h2 className="mt-5">Contact</h2>
                <p>
                    Tengas una o un millón, siempre que sean relativas a <strong>GeekPost</strong>,
                    te solucionamos todas las dudas que tengas.
                </p>
            </div>

            <div className="row">
                <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>

                        <div className="d-flex align-items-center">
    <div className="d-inline">
        <a href="https://api.whatsapp.com/send?phone=+593984038732&text=%C2%A1Pim%20pam%20pum%20bocadillo%20de%20at%C3%BAn!" target="_blank" className="whatsapp">
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    </div>
    <h4 className="ml-2 mb-0">Text us</h4>
</div>

                        <div className="contact-img-container">
                            <img className="contact-img" src={contactPic} alt="" />
                        </div>
                    </div>
                </div>

                <div
                    className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
                >
                    <form
                        action="forms/contact.php"
                        method="post"
                        role="form"
                        className="php-email-form"
                    >
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Your Email</label>
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
                            <label htmlFor="name">Subject</label>
                            <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Message</label>
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
                                Your message has been sent. Thank you!
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);