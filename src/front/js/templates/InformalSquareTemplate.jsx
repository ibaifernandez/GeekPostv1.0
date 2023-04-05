import React from "react";
import "../../styles/templates/informal-square-template.css";
import ssftPhoto from "../../img/hero-img.jpeg" 

export const InformalSquareTemplate = () => (
    <div id="sit-wrapper">
        <div id="sit">
            <div id="sit-main-wrapper">
                <div id="sit-top-margin">
                    <div id="sit-top-margin-accent"></div>
                </div>
                <div id="sit-main-inner-wrapper">
                    <div id="sit-offer-tag">Oferta</div>
                    <div id="sit-texts-wrapper">
                        <div class="sit-imagecontainer">
                            <img src={ssftPhoto} />
                        </div>
                        <div id="sit-main-text">
                            <h1 id="sit-h1">Texto principal!</h1>
                        </div>
                    </div>
                </div>
                <div id="sit-triangle-margin"></div>
            </div>
            <div id="sit-right-margin">
                <div>
                    <img id="sit-logo" src={ssftPhoto} />
                </div>
                <div id="identity">
                    Identidad
                </div>
            </div>
            <div id="sit-right-margin"></div>
            <div id="sit-secondary-wrapper">
                <div id="sit-secondary-inner-wrapper">
                    <div id="sit-cta">
                        <p>Contacto</p>
                    </div>
                    <p id="sit-secondary-text">
                    Este sería el texto secundario. Este sería el texto secundario.
                    </p>
                </div>
            </div>
        </div>
    </div>
);