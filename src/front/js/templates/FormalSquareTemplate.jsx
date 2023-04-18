import React, { useContext, useEffect } from "react";


import "../../styles/templates/formal-square-template.css";
import { Context } from "../store/appContext";



export const FormalSquareTemplate = () => {
   
  useEffect(()=>{
    actions.getInfoPost()  
},[])

const { auxColor, contactData, identity, mainColor, mainText, price, secondaryColor, secondaryText, cta, logo } = store.infoPost


      return (
      <>
      <div className="container-fluid CuadroQueContiene">
        <div className="CuadradoExterior">
          <img className="logoPFF" src={localStorage.logo} alt=""/>
          <div className="border-bottom divTextoPrincipal">
            <h3  className="TextoPrincipal text-decoration-underline">{mainText}</h3>
          </div>
          <h5 className="TextoSecundario">{secondaryText}</h5>
          <div className="rounded-circle circulo overflow-hidden" style={{backgroundColor:`${mainColor}`}}></div>
          <div className="CuadradoBorde border border-5" style={{backgroundColor:`${auxColor}`}}></div>
          <div className="CuadradoColor2" style={{backgroundColor:`${secondaryColor}`}}></div>
          <img src={localStorage.mainImage} alt="" className="ImagenCargada shadow-lg p-3 mb-5 bg-body-tertiary rounded"/>
          <div className="oferta p-2"><h4>{price}</h4></div>
          <h3 className="TextoPrincipalb">{identity}</h3>
          <div className="Cuadricula1" style={{backgroundColor:`${secondaryColor}`}}></div>
          <div className="Cuadricula2" style={{backgroundColor:`${secondaryColor}`}}></div>
        </div>
        <div className="recorte1"></div>
        <div className="recorte2"></div>
      </div>
    </>
    )
};
