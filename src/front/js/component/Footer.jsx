import React from "react";
import { ScrollToTop } from "./ScrollToTop.jsx";
import { Newsletter } from "./Newsletter.jsx";
import { Logo } from "./Logo.jsx";
import GeekPostIso from "../../img/geekpost-iso.png";

export const Footer = () => (
    <footer id="footer">
        <Newsletter />
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-contact">
                        <img
                            src={GeekPostIso}
                            alt="GeekPost Isotype"
                            width="125px"
                        />
                        <h2>GeekPost</h2>
                        <p>
                            <i className="fa-solid fa-location-dot"></i> Salinas ·
                            Bogotá · Panamá
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Mapa de navegación</h4>
                        <ul>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">Inicio</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">¡Hola!</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">Ayuda</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Páginas legales</h4>
                        <ul>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">Política de privacidad</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">Términos y condiciones</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">Identidad visual</a>
                            </li>
                            <li>
                                <i className="bi bi-chevron-right"></i>
                                <a href="#">Nuestro desarrollo</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Síguenos en redes</h4>
                        <p>
                            Por ahora no tenemos redes y lo más probable es que
                            pase un largo rato hasta que las tengamos... Pero
                            mira qué bonitos, serios y profesionales quedan
                            estos botoncitos aquí...
                        </p>
                        <div className="social-links">
                            <a href="#" className="twitter">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#" className="facebook">
                                <i className="fa-brands fa-facebook"></i>                            
                            </a>
                            <a href="#" className="instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" className="linkedin">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container footer-bottom clearfix">
            <div className="copyright">
                &copy; Copyright{" "}
                <strong>
                    <span>GeekPost</span>
                </strong>{" "}
                · All Rights Reserved 2023
            </div>
            <div className="credits">
                Engineered by
                <a href="#"> 3GeeksAt4Geeks</a>
            </div>
        </div>
    </footer>
);
