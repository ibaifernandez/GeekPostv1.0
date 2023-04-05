import React from "react";
import ibai from "../../img/3geeks/ibai-fernandez.jpeg";
import sebas from "../../img/3geeks/sebastian-cardonas.jpg";
import sol from "../../img/3geeks/Sol-La-Banca.jpg";
import harryStamper from "../../img/3geeks/harry-stamper.jpeg";

export const OurTeam = () => (
    <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2 className="pt-5">El equipo</h2>
                <h3>3Geeks @ 4Geeks</h3>
                <p className="our-team-p">
                    Mejor que tener a tres Messi en la delantera, es tener a este equipo. Te juegan lo mismo en el
                    back-end, que en el front-end; tienen un control del Visual Studio Code que ya quisieran otros. Y lo
                    mejor: ahora mismo, como novatos que son, están a precio de ganga. 
                </p>
            </div>

                    <div className="row">
                        <div
                            className="col-lg-6"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img src={sol} className="img-fluid" alt="Sol La Banca"/>
                                </div>
                                <div className="member-info">
                                    <h4>Sol La Banca</h4>
                                    <span>Full-Stack Expert</span>
                                    <p>No querrás empezar un proyecto sin ella</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""><i className="ri-linkedin-box-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-6 mt-4 mt-lg-0"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img src={sebas} className="img-fluid" alt="Sbastián Cardona"/>
                                </div>
                                <div className="member-info">
                                    <h4>Sebastián Cardona</h4>
                                    <span>Full-Stack Developer</span>
                                    <p>Tan silencioso como letal</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""><i className="ri-linkedin-box-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-6 mt-4"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                        >
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img src={ibai} className="img-fluid" alt="Ibai Fernández"/>
                                </div>
                                <div className="member-info">
                                    <h4>Ibai Fernández</h4>
                                    <span>Full-Stack Developer</span>
                                    <p>Intensidad en su estado más puro</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""><i className="ri-linkedin-box-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-lg-6 mt-4"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <div className="member d-flex align-items-start">
                                <div className="pic">
                                    <img
                                        src={harryStamper}
                                        className="img-fluid"
                                        alt="Harry Stamper"
                                    />
                                </div>
                                <div className="member-info">
                                    <h4>Harry Stamper</h4>
                                    <span>World Savior</span>
                                    <p>Porque no estaríamos aquí si no fuera por Harry Stamper (DEP)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
);