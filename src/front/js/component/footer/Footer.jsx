import React from "react";
import { Link } from "react-router-dom";
import GeekPostIso from "../../../img/geekpost-iso.png";
import { FooterLinkSection } from "./FooterLinkSection.jsx";
import { footerLinks } from "../../data/footerLinks.js";

export const Footer = () => (
    <footer id="footer" className="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-contact">
                        <div>
                            <Link to="/">
                                <img src={GeekPostIso} alt="GeekPost Isotype" width="150px" />
                            </Link>
                            <div className="footer-logo-location">
                                <h2>GeekPost</h2>
                                <p>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span className="ms-2">Málaga · Bogotá · Panamá</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <FooterLinkSection title={footerLinks[0].title} links={footerLinks[0].links} />
                    <FooterLinkSection title={footerLinks[1].title} links={footerLinks[1].links} />
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4 className="mb-3">Síguenos en redes</h4>
                        <p>
                            Por ahora no tenemos redes y lo más probable es quepase un largo rato hasta que 
                            las tengamos... Pero mira qué bonitos, serios y profesionales quedan estos
                            botoncitos aquí...
                        </p>
                        <div className="social-links mt-4">
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
                &copy; {new Date().getFullYear()} GeekPost. All rights reserved.
            </div>
            <div className="credits">
                Engineered by <Link to="/hello"> 3GeeksAt4Geeks</Link>
            </div>
        </div>    
    </footer>
)
