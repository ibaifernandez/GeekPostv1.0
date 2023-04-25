import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/templates/informal-vertical-template.css";
import ssftPhoto from "../../img/hero-img.jpeg";

export const InformalVerticalTemplate = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getInfoPost();
  }, []);

  const {
    auxColor,
    contactData,
    identity,
    mainColor,
    mainText,
    price,
    secondaryColor,
    secondaryText,
    cta,
    logo,
  } = store.infoPost;

  return (
    <div id="vit-wrapper">
      <div id="vsft" className="rectangulo">
        <div id="vit-main-wrapper" style={{ backgroundColor: `${mainColor}` }}>
          <div id="vit-top-margin">
            <div id="vit-top-margin-accent"></div>
          </div>
          <div id="vit-main-inner-wrapper">
            <div id="vit-offer-tag"> {price}</div>
            <div id="vit-texts-wrapper">
              <div class="vit-imagecontainer rounded-circle">
                <img src={localStorage.mainImage} />
              </div>
              <div id="vit-main-text">
                <h1 id="vit-h1">{mainText}</h1>
              </div>
            </div>
          </div>
          <div id="vit-triangle-margin"></div>
        </div>
        <div>
          <img id="vit-logo" src={localStorage.logo} />
        </div>
        <div id="vit-right-margin" style={{ backgroundColor: `${auxColor}` }}>
          <div id="identity">{identity}</div>
        </div>
        <div id="vit-right-margin"></div>
        <div
          id="vit-secondary-wrapper"
          style={{ backgroundColor: `${secondaryColor}` }}
        >
          <div id="vit-secondary-inner-wrapper">
            <div id="vit-cta" style={{ backgroundColor: `${auxColor}` }}>
              <p>{contactData}</p>
            </div>
            <p id="vit-secondary-text">{secondaryText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
