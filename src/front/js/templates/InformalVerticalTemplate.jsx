import React from "react";
import "../../styles/templates/informal-vertical-template.css";
import ssftPhoto from "../../img/hero-img.jpeg" 

export const InformalVerticalTemplate = () => (
    <div id="vit-wrapper">
        <div id="vit">
            <div id="vit-main-wrapper">
                <div id="vit-top-margin">
                    <div id="vit-top-margin-accent"></div>
                </div>
                <div id="vit-main-inner-wrapper">
                    <div id="vit-offer-tag">Oferta</div>
                    <div id="vit-texts-wrapper">
                        <div class="vit-imagecontainer">
                            <img src={ssftPhoto} />
                        </div>
                        <div id="vit-main-text">
                            <h1 id="vit-h1">Texto principal</h1>
                        </div>
                    </div>
                </div>
                <div id="vit-triangle-margin"></div>
            </div>
            <div id="vit-right-margin">
                <div>
                    <img id="vit-logo" src={ssftPhoto} />
                </div>
                <div id="identity">
                    Identidad
                </div>
            </div>
            <div id="vit-right-margin"></div>
            <div id="vit-secondary-wrapper">
                <div id="vit-secondary-inner-wrapper">
                    <div id="vit-cta">
                        <p>Contacto</p>
                    </div>
                    <p id="vit-secondary-text">
                    Este sería el texto secundario. Este sería el texto secundario.
                    </p>
                </div>
            </div>
        </div>
    </div>
);