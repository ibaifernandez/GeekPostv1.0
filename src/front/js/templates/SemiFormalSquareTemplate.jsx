import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext.js"

import "../../styles/templates/semiformal-square-template.css";

export const SemiFormalSquareTemplate = () => {

    const { store, actions } = useContext(Context)

    useEffect(()=>{
        actions.getInfoPost()  
    },[])

    const { auxColor, contactData, identity, mainColor, mainText, price, secondaryColor, secondaryText, cta, logo } = store.infoPost

    return (
    <div id="ssft-wrapper">
        <div id="vsft" className="ssft" style={{backgroundColor: `${auxColor}`}}>
            <div id="ssft-main-wrapper" style={{ backgroundColor: `${secondaryColor}` }}>
                <div id="ssft-top-margin" style={{ backgroundColor: `${mainColor}` }}>
                    <div id="ssft-top-margin-accent" style={{ backgroundColor: `${mainColor}` }}></div>
                </div>
                <div id="ssft-main-inner-wrapper" style={{ backgroundColor: `${mainColor}`}}>
                    <div id="ssft-offer-tag" style={{ backgroundColor: `${auxColor}`, color: `${secondaryColor}` }}>{price}</div>
                    <div id="ssft-texts-wrapper">
                        <div id="ssft-main-text">
                            <div id="ssft-h1" style={{ color: `${auxColor}` }}>{mainText}</div>
                        </div>
                        <div id="ssft-photo-wrapper">
                            <img src={localStorage.mainImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div id="ssft-right-margin" style={{backgroundColor: `${mainColor}`, wordSpacing:"5px"}}>
                <div id="ssft-identity">{identity}</div>
            </div>
            <div id="ssft-left-margin" style={{backgroundColor: `${mainColor}`}}></div>
            <div id="ssft-secondary-wrapper">
                <div id="ssft-secondary-inner-wrapper">
                    <p id="ssft-secondary-text">{secondaryText}
                    </p>
                    <div id="ssft-cta">
                        <p style={{backgroundColor: `${secondaryColor}`, color: `${auxColor}`}}>{cta}</p>
                        <p>{contactData}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}