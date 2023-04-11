//  https://www.npmjs.com/package/html2canvas
//  https://www.robinwieruch.de/react-component-to-image/

import React, { useContext, useEffect, useState } from "react";
import "../../styles/output.css";
import { FacebookShareButton, FacebookIcon } from 'react-share';

// ELIGE LA PLANTILLA LA LLENA DE INFORMACION POR PROPS LA CONVIERTE EN JPG Y LA SUBE A IMGUR ¿HASTA QUÉ PUNTO PUEDO SER EL OUTPUT?

import { Context } from "../store/appContext.js"
import { FormalSquareTemplate } from "../templates/FormalSquareTemplate.jsx";
import { FormalVerticalTemplate } from "../templates/FormalVerticalTemplate.jsx";
import { SemiFormalSquareTemplate } from "../templates/SemiFormalSquareTemplate.jsx";
import { SemiFormalVerticalTemplate } from "../templates/SemiFormalVerticalTemplate.jsx";
import { InformalSquareTemplate } from "../templates/InformalSquareTemplate.jsx";
import { InformalVerticalTemplate } from "../templates/InformalVerticalTemplate.jsx";

    // retorno : plantilla (ratio, formality) ==> {react-jpg} ==> .JPG ==> <Output/>

    // navigate/("output")

// }

    // importar la plantilla que ha elegido el selector de plantilla

    // rellanrla de información

    // PRUEBA ENORME pasarla por la librería que la convierte en jpg

    // enviarla a imgur

export const Output = () => {

    const {store, actions} = useContext(Context)

    useEffect(()=>{
        actions.getInfoPost()
        templateSelector()
    },[])

    const ratio = store.infoPost.ratio
    const formality = store.infoPost.formality

    const [template, setTemplate] = useState(null)

    const templateSelector = () => {
        if (ratio === "vertical") {
            if (formality === 1) {
            return <InformalVerticalTemplate />;
            } else if (formality === 2) {
            template = <SemiFormalVerticalTemplate />;
            } else if (formality === 3) {
            template = <FormalVerticalTemplate />;
            } else {
            // ¿Qué hacemos en caso de que no haya una combinación de plantilla válida para las variables dadas?
            }
        } else if (ratio === "square") {
            console.log("HOLA")
            if (formality === 1) {
            template = <InformalSquareTemplate />;
            } else if (formality === 2) {
                setTemplate(<InformalSquareTemplate />)
                console.log(template)
            } else if (formality === 3) {
            template = <FormalSquareTemplate />;
            } else {
            // ¿Qué hacemos en caso de que no haya una combinación de plantilla válida para las variables dadas?
            }
        } else {
            // ¿Qué hacemos en caso de que no haya una combinación de plantilla válida para las variables dadas?
        }
            };

        
    const finalComposition = (ratio, formality) => {
        
    }

    return (
    <>
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0 output-wrapper">
                <div className="col-sm-12 col-lg-6 p-0 m-0">
                    <div className="final-composition-wrapper">
                        <div className="final-composition-wrapper-img">
                            {template}
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 p-3">
                    <h1 className="px-3">Comparte en redes sociales</h1>
                    <p className="lead feedback-happy-talk-lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum eum necessitatibus
                        dolore vitae eius ad laborum natus corrupti aperiam similique voluptatibus, doloribus.
                    </p>
                    <div className="feedback-happy-talk">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum eum necessitatibus
                            dolore vitae eius ad laborum natus corrupti aperiam similique voluptatibus, doloribus.
                        </p>
                    </div>
                    <h2 className="px-3 pt-3">Hashtag sugeridos</h2>
                    <div className="border border-primary ms-3 p-3 w-75">a</div>
                    <FacebookShareButton
                        url={'https://www.example.com'}
                        quote={'Dummy text!'}
                        hashtag="#muo">
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
    </>
    )
};