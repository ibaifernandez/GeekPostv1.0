import React, { useContext, useEffect } from "react";
import "../../styles/templates/semiformal-vertical-template.css";
import vsftPhoto from "../../img/hero-img.jpeg"
import { Context } from "../store/appContext.js"

export const SemiFormalVerticalTemplate = () => {

    const { store, actions } = useContext(Context)

    useEffect(()=>{
        actions.getInfoPost()
        console.log("store")
        console.log(store)    
    },[])

    const { auxColor, contactData, identity, mainColor, mainText, price, secondaryColor, secondaryText, cta, logo } = store.infoPost

    return (
    <div id="vsft-wrapper">
        <div id="vsft">
            <div id="vsft-main-wrapper" style={{ backgroundColor: `${secondaryColor}` }}>
                <div id="vsft-top-margin" style={{ backgroundColor: `${mainColor}` }}>
                    <div id="vsft-top-margin-accent"></div>
                </div>
                <div id="vsft-main-inner-wrapper">
                    <div id="vsft-offer-tag" style={{ backgroundColor: `${mainColor}`, color: `${auxColor}` }}>{price}</div>
                    <div id="vsft-photo-wrapper">
                        <img src={localStorage.mainImage} />
                    </div>
                </div>
            </div>
            <div id="vsft-logo-tag">
                <img src={logo} />
            </div>
            <div id="vsft-right-margin" style={{ backgroundColor: `${auxColor}`, color: `${mainColor}` }}>{identity}</div>
            <div id="vsft-secondary-wrapper">
                <h1 id="vsft-h1" style={{ color: `${auxColor}` }}>{mainText}</h1>
                <p id="vsft-secondary-text" style={{color: `${secondaryColor}`}}>{secondaryText}</p>
                <div id="vsft-cta-container">
                    <div id="vsft-cta" style={{ backgroundColor: `${auxColor}`}}>
                        <span style={{ color: `${secondaryColor}` }}>{cta}</span>
                    </div>
                    <div id="vsft-cta-contact-data">
                        <p>{contactData}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}