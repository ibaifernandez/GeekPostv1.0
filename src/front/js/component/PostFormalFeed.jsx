import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//import { useParams } from "react-router-dom";
//import { getCharacters } from "../helpers/getCharacters";
//include your index.scss file into the bundle
import "../../styles/postFormalStory.css";
import { Context } from "../store/appContext";



export const PostFormalFeed = () => {
 
//     const { store, actions } = useContext(Context);
//     const { addData } = actions;

 
//   const post = async () => {
 
//   useEffect(() => {
//     actions.obtenerData();
//   }, []);
  //console.log(store.personajes)
    return (
    <>
    <div className="container-fluid CuadroQueContiene">
        <div className="CuadradoExterior">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" alt=""/>
        <div className="border-bottom divTextoPrincipal">
        <h3  className="TextoPrincipal text-decoration-underline">TEXTO PRINCIPAL</h3>
        </div>
        <h5 className="TextoSecundario">Texto secundario</h5>
        <div className="rounded-circle circulo overflow-hidden"></div>
        <div className="CuadradoBorde border border-5"></div>
        <div className="CuadradoColor2"></div>
        <img src="https://cnnespanol.cnn.com/wp-content/uploads/2023/02/230217101303-deportes-diana-flores-football-full-169.jpg?quality=100&strip=info&w=780&h=438&crop=1" alt="" className="ImagenCargada shadow-lg p-3 mb-5 bg-body-tertiary rounded"/>
        <div className="oferta p-2"><h4>Oferta</h4></div>
        <h3 className="TextoPrincipalb">Marca de la empresa</h3>
        <div className="Cuadricula1"></div>
        <div className="Cuadricula2"></div>
    </div>
        <div className="recorte1"></div>
        <div  className="recorte2"></div>
    </div>

    </>
    )
}
