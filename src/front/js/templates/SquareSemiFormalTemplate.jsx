import React from "react";
import "../../styles/templates/square-semi-formal-template.css";
import ssftPhoto from "../../img/hero-img.jpeg" 

export const SquareSemiFormalTemplate = () => (
    <div id="ssft-wrapper">
        <div id="ssft">
            <div id="ssft-main-wrapper">
                <div id="ssft-top-margin">
                    <div id="ssft-top-margin-accent"></div>
                </div>
                <div id="ssft-main-inner-wrapper">
                    <div id="ssft-offer-tag">Oferta</div>
                    <div id="ssft-texts-wrapper">
                        <div id="ssft-main-text">
                            <h1 id="ssft-h1">Este es el texto principal!</h1>
                        </div>
                        <div id="ssft-photo-wrapper">
                            <img src={ssftPhoto} />
                        </div>
                    </div>
                </div>
            </div>
            <div id="ssft-right-margin">Identidad</div>
            <div id="ssft-left-margin"></div>
            <div id="ssft-secondary-wrapper">
                <div id="ssft-secondary-inner-wrapper">
                    <p id="ssft-secondary-text">
                    Este sería el texto secundario. Este sería el texto secundario.
                    Este sería el texto secundario. Este sería el texto secundario.
                    </p>
                    <div id="ssft-cta">
                        <p>¡Llamada <span>a la acción!</span></p>
                        <p>Contacto</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );