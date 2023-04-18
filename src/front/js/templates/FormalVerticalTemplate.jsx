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
    <div className="container-fluid CuadroQueContieneS">
      <div className=" CuadradoBlancoS">  
        <div className="CuadradoExteriorS">
        <img className="logoPFFS" src={localStorage.logo} alt=""/>
        <div className="border-bottom divTextoPrincipalS">
        <h3  className="TextoPrincipalS text-decoration-underline">{mainText}</h3>
        </div>
        <h5 className="TextoSecundarioS">{secondaryText}</h5>
        <div className="rounded-circle circuloS overflow-hidden" style={{backgroundColor:`${mainColor}`}}></div>
        <div className="CuadradoBordeS border border-5" style={{backgroundColor:`${auxColor}`}}></div>
        <div className="CuadradoColor2S" style={{backgroundColor:`${secondaryColor}`}}></div>
        <img src={localStorage.mainImage} alt="" className="ImagenCargadaS shadow-lg p-3 mb-5 bg-body-tertiary rounded"/>
        <div className="ofertaS p-2 border border-light-subtle ps-5 pt-3"><h4>{price}</h4></div>
        <h3 className="TextoPrincipalbS">{identity} </h3>
        <div className="Cuadricula1S" style={{backgroundColor:`${secondaryColor}`}}></div>
        <div className="Cuadricula2S" style={{backgroundColor:`${secondaryColor}`}}></div>
    </div>
        <div className="recorte1S"></div>
        <div  className="recorte2S"></div>
    </div>
    </div>

    </>
    )
}
