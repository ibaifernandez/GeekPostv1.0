import React from "react";

export const NeedHelp = () => (
    <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
            <div className="row">
                <div className="col-lg-9 text-center text-lg-start">
                    <h3 className="mb-3">¿Necesitas ayuda?</h3>
                    <p className="lead">
                        Si tienes preguntas existenciales... sobre esas no te
                        podemos ayudar. A fin de cuentas no somos más que 3Geeks
                        tratando de programar una <em>app</em> decente para
                        conseguir un portafolio decente.
                    </p>
                    <p className="lead">
                        Ahora bien, si tus dudas son al respecto del
                        funcionamiento de GeekPost, esta es tu sección.
                    </p>
                    <p className="lead">Déjate ayudar. </p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                    <a className="cta-btn align-middle" href="#">
                        ¡Ayuda! 😱
                    </a>
                </div>
            </div>
        </div>
    </section>
);
