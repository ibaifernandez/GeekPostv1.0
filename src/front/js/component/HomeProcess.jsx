import React from "react";
import roundedPhoto1 from "../../img/cta-bg.jpg";

export const HomeProcess = () => (
    <section id="home-process" className="process section-bg">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2>Recuerda el «Proceso GeekPost»</h2>
                <p>
                    Un sencillo proceso que te servirá para postear en tus redes
                    favoritas con el mejor estilo y el mínimo esfuerzo.
                </p>
            </div>
            <div className="row mt-3">
                <div
                    className="col-xl-3 col-md-6 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                >
                    <div className="icon-box">
                       <div className="icon d-flex justify-content-center">
                            <img className="rounded-photo" src={roundedPhoto1} />
                        </div>
                        <h3>Carga una foto</h3>
                        <p>
                            Cualquier fotografía que hayas tomado con tu
                            teléfono celular servirá.
                        </p>
                    </div>
                </div>
                <div
                    className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <div className="icon-box">
                      <div className="icon d-flex justify-content-center">
                            <img className="rounded-photo" src={roundedPhoto1} />
                        </div>
                        <h3>Añade información</h3>
                        <p>
                            Añade la información que quieras ver representada en
                            tu diseño final.
                        </p>
                    </div>
                </div>
                <div
                    className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <div className="icon-box">
                        <div className="icon d-flex justify-content-center">
                            <img className="rounded-photo" src={roundedPhoto1} />
                        </div>
                        <h3>¡Obtén tu diseño!</h3>
                        <p>
                            Con solo un click, consigue el diseño más oportuno
                            para publicitar aquello que deseas.
                        </p>
                    </div>
                </div>
                <div
                    className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <div className="icon-box">
                        <div className="icon d-flex justify-content-center">
                            <img className="rounded-photo" src={roundedPhoto1} />
                        </div>
                        <h3>Comparte</h3>
                        <p>
                            Comparte en tus redes favoritas sin necesidad de
                            abandonar GeekPost.
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="#signup" className="btn-get-registered">
                        Crear 🖌
                    </a>
                </div>
            </div>
        </div>
    </section>
);
