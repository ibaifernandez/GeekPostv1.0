import React, { useContext, useEffect } from "react";
import "../../styles/templates/formal-vertical-template.css";
import { Context } from "../store/appContext";



export const FormalVerticalTemplate = () => {
  
  const { store, actions } = useContext(Context);
  
  
  useEffect(()=>{
    actions.getInfoPost()  
},[])

const { auxColor, contactData, identity, mainColor, mainText, price, secondaryColor, secondaryText, cta, logo } = store.infoPost


  return (
  <>  
    <div className="container-fluid CuadroQueContieneS" id="vsft">
       
        <div className="CuadradoExteriorS">
        <img className="logoPFFS" src={localStorage.logo} alt=""/>
        <div className="border-bottom divTextoPrincipalS">
        <h3  className="TextoPrincipalS text-uppercase font-weight-bold fs-4">{mainText}</h3>
        </div>
        <h5 className="TextoSecundarioS fs-5">{secondaryText}</h5>
        <div className="rounded-circle circuloS overflow-hidden" style={{backgroundColor:`${mainColor}`}}></div>
        <div className="CuadradoBordeS border border-5" style={{borderColor:`${auxColor}`}}></div>
        <div className="CuadradoColor2S" style={{backgroundColor:`${secondaryColor}`}}></div>
        <img src={localStorage.mainImage} alt="" className="ImagenCargadaS shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{borderColor:`${auxColor}`}}/>
        <div className="ofertaS p-2 border border-light-subtle text-center text-light"><p>{price}</p></div>
        <h3 className="TextoPrincipalbS text-uppercase font-weight-bold text-right fs-5">{identity} </h3>
        <h3 className="ContactDataS text-uppercase font-weight-bold text-right">{contactData}</h3>
        <div className="Cuadricula1S" style={{backgroundColor:`${secondaryColor}`}}></div>
        <div className="Cuadricula2S" style={{backgroundColor:`${secondaryColor}`}}></div>
    
        <div className="recorte1S"></div>
        <div  className="recorte2S"></div>
    </div>
    </div>

    </>
    )
}
