import React from "react";
import { Link } from "react-router-dom";
import GeekPostIso from "../../img/geekpost-iso.png";

export const Footer = () => (
    <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-contact">
                        <Link to="/">
                            <img
                                src={GeekPostIso}
                                alt="GeekPost Isotype"
                                width="125px"
                            />
                            <h2>GeekPost</h2>
                        </Link>
                        <p>
                            <i className="fa-solid fa-location-dot"></i> Salinas ·
                            Bogotá · Panamá
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Mapa de navegación</h4>
                        <ul>
                            <li>
                                <i className="fa fa-chevron-right me-3"></i>
                                <Link to="/hello">¡Hola!</Link>
                            </li>
                            <li>
                                <i className="fa fa-chevron-right me-3"></i>
                                <Link to="/help">Ayuda</Link>
                            </li>
                            <li>
                                <i className="fa fa-chevron-right me-3"></i>
                                <Link to="/docs">Docs</Link>
                            </li>
                            <li>
                                <i className="fa fa-chevron-right me-3"></i>
                                <Link to="/contact">Contacto</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Business Platform</h4>
                        <ul>
                            <li>
                                <i className="fa fa-chevron-right me-3"></i>
                                <Link to="/politica-de-privacidad">Política de privacidad</Link>
                            </li>
                            <li>
                                <i className="fa fa-chevron-right me-3"></i>
                                <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
                            </li>
                            <li>
                                <i className="fa fa-chevron-right me-3"></i>
                                <Link to="/branding">Branding</Link>
                            </li>
                            <li>
                                <i className="fa fa-chevron-right me-3"></i>
                                <a href="https://github.com/ibaifernandez/GeekPostv1.0" target="_blank">Nuestro <em>repo</em></a>
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
                            <a href="https://api.whatsapp.com/send?phone=+593984038732&text=%C2%A1Pim%20pam%20pum%20bocadillo%20de%20at%C3%BAn!" target="_blank" className="linkedin">
                                <i className="fa-brands fa-whatsapp"></i>
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
                <Link to="/hello"> 3GeeksAt4Geeks</Link>
            </div>
        </div>
    </footer>
);
