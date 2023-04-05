import React from "react";

export const OurProject = () => (
    <section id="why-us" className="why-us section-bg py-5">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-stretch">
                    <div className="content">
                        <h3>GeekPost: <strong>una solución a tu medida</strong></h3>
                        <p className="mt-3">
                        Te va a encantar GeekPost porque tiene un montón de cosas increíbles. Por ejemplo, puede convertir
                        el plomo en oro, si bien esto no ha sido demostrado. A continuación te dejamos las claves del
                        proyecto:
                        </p>
                    </div>

                            <div id="our-project-accordion" className="accordion-list">
                                <ul>
                                    <li>
                                        <a
                                            data-bs-toggle="collapse"
                                            className="collapse"
                                            data-bs-target="#accordion-list-1"
                                            ><span>01</span>Hacer las cosas con cariño
                                            <i className="bx bx-chevron-down icon-show"></i>
                                            <i className="bx bx-chevron-up icon-close"></i>
                                        </a>
                                        <div
                                            id="accordion-list-1"
                                            className="collapse show"
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>Porque cuando las cosas se hacen con cariño, ¿qué puede salir mal?</p>
                                        </div>
                                    </li>

                                    <li>
                                        <a
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-list-2"
                                            className="collapsed">
                                                <span>02</span>
                                                    ¿Qué más se puede pedir?
                                            <i className="bx bx-chevron-down icon-show"></i>
                                            <i className="bx bx-chevron-up icon-close"></i>
                                        </a>
                                        <div
                                            id="accordion-list-2"
                                            className="collapse"
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>
                                                Cuéntame un cuento y verás qué contento me voy a la cama y tengo lindos
                                                sueños.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <a
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-list-3"
                                            className="collapsed">
                                                <span>03</span>¿Y todo eso gratis?
                                            <i className="bx bx-chevron-down icon-show"></i>
                                            <i className="bx bx-chevron-up icon-close"></i>
                                        </a>
                                        <div
                                            id="accordion-list-3"
                                            className="collapse"
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>
                                                Y no solo todo eso, sino también todo esto otro. Y esto... ¡y esto! Miles
                                                de promesas que no vamos a cumplir para que nos compres nuestro producto.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div
                            className="col-lg-5 align-items-stretch img our-project-img"
                            data-aos="zoom-in"
                            data-aos-delay="150"
                        >
                            &nbsp;
                        </div>
                    </div>
                </div>
            </section>
);