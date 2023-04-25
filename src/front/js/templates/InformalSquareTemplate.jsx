import React, { useContext, useEffect } from "react";
import "../../styles/templates/informal-square-template.css";

import { Context } from "../store/appContext";

export const InformalSquareTemplate = () => {

    const { store, actions } = useContext(Context)

    useEffect(()=>{
        actions.getInfoPost()  
    },[])

    const { auxColor, contactData, identity, mainColor, mainText, price, secondaryColor, secondaryText, cta, logo } = store.infoPost

    return (
            
        <div id="sit-wrapper">
            <div id="vsft">
                <div id="sit-main-wrapper">
                    <div id="sit-top-margin">
                        <div id="sit-top-margin-accent"></div>
                    </div>
                    <div id="sit-main-inner-wrapper">
                        <div id="sit-offer-tag">Oferta {price}</div>
                        <div id="sit-texts-wrapper">
                            <div class="sit-imagecontainer">
                                <img src={localStorage.mainImage} />
                            </div>
                            <div id="sit-main-text">
                                <h1 id="sit-h1">{mainText}</h1>
                            </div>
                        </div>
                    </div>
                    <div id="sit-triangle-margin" style={{backgroundColor:`${mainColor}`}}></div>
                </div>
                <div id="sit-right-margin" style={{backgroundColor:`${auxColor}`}}>
                    <div>
                        <img id="sit-logo" src={localStorage.logo} />
                    </div>
                    <div id="identity">
                        {identity}
                    </div>
                </div>
                <div id="sit-right-margin"></div>
                <div id="sit-secondary-wrapper">
                    <div id="sit-secondary-inner-wrapper" style={{backgroundColor:`${secondaryColor}`}}>
                        <div id="sit-cta">
                            <p>{contactData}</p>
                        </div>
                        <p id="sit-secondary-text">
                            {secondaryText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};