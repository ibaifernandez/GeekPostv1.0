import React from "react";
import { Link } from "react-router-dom";
import ibai from "../../img/ibai-fernandez.jpeg";
import sebas from "../../img/sebastian-cardonas.jpg";
import sol from "../../img/Sol-La-Banca.jpg";

export const AboutUs = () => (
    <section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2 className="about-title">3Geeks @ 4Geeks</h2>
            </div>

            <div className="row content">
                <div className="col-lg-6 d-flex justify-content-around">
                    <a href="https://portfolio.ibaifernandez.com" target="_blank">
                        <div className="aboutus-img-wrap">
                            <img className="aboutus-img" src={ibai} />
                            <div className="aboutus-img-text">
                                <p>Ibai Fernández</p>
                                <p>
                                    <em>Full-Stack Developer</em>
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="aboutus-img-wrap">
                        <img className="aboutus-img" src={sebas} />
                        <div className="aboutus-img-text">
                            <p>Sebastián Cardona</p>
                            <p>
                                <em>Full-Stack Developer</em>
                            </p>
                        </div>
                    </div>
                    <div className="aboutus-img-wrap">
                        <img className="aboutus-img" src={sol} />
                        <div className="aboutus-img-text">
                            <p>Sol La Banca</p>
                            <p>
                                <em>Full-Stack Developer</em>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 pt-4 pt-lg-0 ms-lg-5 my-auto">
                    <p className="lead">
                        Somos maravillosos, increíbles, cojonudos, fabulosos,
                        maravillosos, incomparables... Y empiezo a
                        quedarme sin adjetivos para poder rellenar cuatro o
                        cinco líneas de texto...
                    </p>
                    <div className="d-flex justify-content-center">
                        <Link to="/hello" className="btn-learn-more ms-0">
                        Conócenos 🤓
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);