import React from "react";
import { Link } from "react-router-dom";

const helpTexts = [
  "Si tienes preguntas existenciales... sobre esas no te podemos ayudar. A fin de cuentas no somos más que 3Geeks tratando de programar una app decente para conseguir un portafolio decente.",
  "Ahora bien, si tus dudas son al respecto del funcionamiento de GeekPost, esta es tu sección.",
  "Déjate ayudar."
];

export const NeedHelp = () => (
    <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
            <div className="row">
                <div className="col-lg-9 text-center text-lg-start">
                    <h3 className="mb-3">¿Necesitas ayuda?</h3>
                    {helpTexts.map((text, index) => (
                      <p key={index} className="lead">{text}</p>
                    ))}
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                    <Link to="/help" className="cta-btn align-middle">
                        ¡Ayuda! 😱
                    </Link>
                </div>
            </div>
        </div>
    </section>
);
