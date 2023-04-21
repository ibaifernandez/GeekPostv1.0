import React from "react";
import { faqData } from "../data/faqData.js";
import "../../styles/faq.css"

export const Help = () => (
  <section id="faq" className="faq mt-3">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2 className="pt-3">Preguntas frecuentes contestadas</h2>
        <p>
          Tenga una duda o un millón, lo más probable es que se encuentre entre las siguientes
          preguntas frecuentes que, en un ejercicio de previsión jamás visto antes en ningún 
          sitio web, hemos implementado solo para tu disfrute personal. Cuidado con las curvas.
        </p>
      </div>
      <div className="faq-list">
        <ul>
          {faqData.map((faq, index) => (
            <li key={index} data-aos="fade-up" data-aos-delay={`${400 + index * 100}`}>
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" data-bs-target={`#faq-list-${index}`} className="collapsed">
                {faq.question}
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id={`faq-list-${index}`} className="collapse" data-bs-parent=".faq-list">
                <p>{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
