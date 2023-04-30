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
            <div id="vsft" className="cuadrado">
                <div id="sit-main-wrapper"style={{ backgroundColor: `${mainColor}` }}>
                    <div id="sit-top-margin">
                        <div id="sit-top-margin-accent"></div>
                    </div>
                    <div id="sit-main-inner-wrapper">
                        <div id="sit-offer-tag">{price}</div>
                        <div id="sit-texts-wrapper">
                            <div class="sit-imagecontainer rounded-circle">
                                <img src={localStorage.mainImage} />
                            </div>
                            <div id="sit-main-text">
                                <h1 id="sit-h1"className="text-center" >{mainText}</h1>
                            </div>
                        </div>
                    </div>
                    <div id="sit-triangle-margin" ></div>
                </div>
                <div id="sit-right-margin" style={{backgroundColor:`${auxColor}`}}>
                    <div>
                        <img id="sit-logo" src={localStorage.logo} />
                    </div>
                    
                </div>
                <div id="sit-right-margin">
                <div className="identity">
                        {identity}
                    </div>
                </div>
                <div id="sit-secondary-wrapper"style={{ backgroundColor: `${secondaryColor}` }}>
                    <div id="sit-secondary-inner-wrapper" >
                        <div id="sit-cta"style={{ backgroundColor: `${auxColor}` }} >
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