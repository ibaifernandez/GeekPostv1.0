import React from "react";
import { AuthButton } from "../component/AuthButton.jsx"
import { steps } from "../data/processData.js"

const Step = ({ imgSrc, title, description, delay }) => (
  <div
    className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
    data-aos="zoom-in"
    data-aos-delay={delay}
  >
    <div className="icon-box">
      <div className="icon d-flex justify-content-center">
        <img className="rounded-photo" src={imgSrc} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export const IntroProcess = () => (
  <section id="process" className="process py-5">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>El proceso más fácil</h2>
        <p className="lead">
          Un sencillo proceso que te servirá para postear en tus redes
          favoritas con el mejor estilo y el mínimo esfuerzo.
        </p>
      </div>
      <div className="row mt-3">
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
        <div className="d-flex justify-content-center mt-3">
        <AuthButton isLoggedIn={localStorage.token} />
        </div>
      </div>
    </div>
  </section>
)