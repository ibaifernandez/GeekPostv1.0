import React from "react";
import "../../styles/contact.css";

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

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@example.com</p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>+1 5589 55488 55s</p>
                        </div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
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