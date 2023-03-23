import React from "react";
import ibai from "../../img/ibai-fernandez.jpeg";
import sebas from "../../img/sebastian-cardonas.jpg";
import sol from "../../img/Sol-La-Banca.jpg";

export const Aboutus = () => (
    <section id="about" className="about">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2 className="about-title">3Geeks @ 4Geeks</h2>
            </div>

            <div className="row content">
                <div className="col-lg-6 d-flex justify-content-around">
                    <div className="aboutus-img-wrap">
                        <img className="aboutus-img" src={ibai} />
                        <div className="aboutus-img-text">
                            <p>Ibai Fernández</p>
                            <p>
                                <em>Full-Stack Developer</em>
                            </p>
                        </div>
                    </div>
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
                {/* <div className="col-lg-1 pt-4 pt-lg-0"></div> */}
                <div className="col-lg-5 pt-4 pt-lg-0 ms-5 my-auto">
                    <p className="about-us-main-text">
                        Somos maravillosos, increíbles, cojonudos, fabulosos,
                        maravillosos, inmejorables, incomparables, empiezo a
                        quedarme sin adejativos para poder rellenar cuatro o
                        cinco líneas de texto... ¡Nooo! Increíble pero cierto:
                        aun me falta una línea entera... ¡entera! A ver, creo
                        que ya...
                    </p>
                    <a href="#" className="btn-learn-more">
                        Conócenos 🤓
                    </a>
                </div>
            </div>
        </div>
    </section>
);