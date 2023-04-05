import React from "react";
import "../../styles/templates/semiformal-vertical-template.css";
import vsftPhoto from "../../img/hero-img.jpeg" 

export const SemiFormalVerticalTemplate = () => (
    <div id="vsft-wrapper">
        <div id="vsft">
            <div id="vsft-main-wrapper">
                <div id="vsft-top-margin">
                    <div id="vsft-top-margin-accent"></div>
                </div>
                <div id="vsft-main-inner-wrapper">
                    <div id="vsft-offer-tag">Oferta</div>
                    <div id="vsft-photo-wrapper">
                        <img src={vsftPhoto} />
                    </div>
                </div>
            </div>
            <div id="vsft-right-margin">Identidad</div>
            <div id="vsft-secondary-wrapper">
                <h1 id="vsft-h1">Este es el texto principal</h1>
                <p id="vsft-secondary-text">
                    Este es el texto secundario. Este es el texto secundario. Este es el texto secundario. 
                    Este es el texto secundario. Este es el texto secundario. Este es el texto secundario. 
                </p>
                <div id="vsft-cta">
                    <p>¡Llamada <span>a la acción!</span></p>
                    <p>Contacto</p>
                </div>
            </div>
        </div>
    </div>
    );