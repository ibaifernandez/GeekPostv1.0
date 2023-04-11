// // ELIGE LA PLANTILLA LA LLENA DE INFORMACION POR PROPS LA CONVIERTE EN JPG Y LA SUBE A IMGUR ¿HASTA QUÉ PUNTO PUEDO SER EL OUTPUT?

// import React, { useContext, useEffect} from "react";
// import { Context } from "../store/appContext.js"
// import { FormalSquareTemplate } from "../templates/FormalSquareTemplate.jsx";
// import { FormalVerticalTemplate } from "../templates/FormalVerticalTemplate.jsx";
// import { SemiFormalSquareTemplate } from "../templates/SemiFormalSquareTemplate.jsx";
// import { SemiFormalVerticalTemplate } from "../templates/SemiFormalVerticalTemplate.jsx";
// import { InformalSquareTemplate } from "../templates/InformalSquareTemplate.jsx";
// import { InformalVerticalTemplate } from "../templates/InformalVerticalTemplate.jsx";

// const FinalComposition = () => {
//     const templateSelector = ({ ratio, formality }) => {
//     let template = null;

//     if (ratio === "vertical") {
//         if (formality === 1) {
//         template = <InformalVerticalTemplate />;
//         } else if (formality === 2) {
//         template = <SemiFormalVerticalTemplate />;
//         } else if (formality === 3) {
//         template = <FormalVerticalTemplate />;
//         } else {
//         // ¿Qué hacemos en caso de que no haya una combinación de plantilla válida para las variables dadas?
//         }
//     } else if (ratio === "square") {
//         if (formality === 1) {
//         template = <InformalSquareTemplate />;
//         } else if (formality === 2) {
//         template = <SemiFormalSquareTemplate />;
//         } else if (formality === 3) {
//         template = <FormalSquareTemplate />;
//         } else {
//         // ¿Qué hacemos en caso de que no haya una combinación de plantilla válida para las variables dadas?
//         }
//     } else {
//         // ¿Qué hacemos en caso de que no haya una combinación de plantilla válida para las variables dadas?
//     }

//     return (<h1>Hola</h1>)

// }
//     // retorno : plantilla (ratio, formality) ==> {react-jpg} ==> .JPG ==> <Output/>

//     // importar la plantilla que ha elegido el selector de plantilla

//     // rellanrla de información

//     // PRUEBA ENORME pasarla por la librería que la convierte en jpg

//     // enviarla a imgur