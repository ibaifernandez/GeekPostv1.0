//  https://www.npmjs.com/package/html2canvas
//  https://www.robinwieruch.de/react-component-to-image/

import React, { useContext, useEffect, useState, useRef, useCallback } from "react"
import { useNavigate } from "react-router-dom"

import { FacebookShareButton, FacebookIcon } from 'react-share'
import { TwitterShareButton, TwitterIcon } from 'react-share'

import ClipLoader from "react-spinners/ClipLoader"

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };

import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import { Context } from "../store/appContext.js"

import { FormalSquareTemplate } from "../templates/FormalSquareTemplate.jsx";
import { FormalVerticalTemplate } from "../templates/FormalVerticalTemplate.jsx";
import { SemiFormalSquareTemplate } from "../templates/SemiFormalSquareTemplate.jsx";
import { SemiFormalVerticalTemplate } from "../templates/SemiFormalVerticalTemplate.jsx";
import { InformalSquareTemplate } from "../templates/InformalSquareTemplate.jsx";
import { InformalVerticalTemplate } from "../templates/InformalVerticalTemplate.jsx";

import "../../styles/output.css";

export const Output = () => {

    const {store, actions} = useContext(Context)

    const navigate = useNavigate()

    const [template, setTemplate] = useState(null)
    const [isPostLoaded, setIsPostLoaded] = useState(false)

    useEffect(()=>{
        actions.getInfoPost()
            .then(() => setIsPostLoaded(true))
            .catch(console.log("¡Error!"))
    },[])

    const ratio = store.infoPost.ratio
    const formality = store.infoPost.formality

    useEffect(() => {
        if (ratio === "vertical") {
            if (formality === 1) {
                setTemplate(<InformalVerticalTemplate />)
            } else if (formality === 2) {
                setTemplate(<SemiFormalVerticalTemplate />)
            } else if (formality === 3) {
                setTemplate(<FormalVerticalTemplate />)
            } 
        } else if (ratio === "square") {
            if (formality === 1) {
                setTemplate(<InformalSquareTemplate />)
            } else if (formality === 2) {
                setTemplate(<SemiFormalSquareTemplate />)
            } else if (formality === 3) {
                setTemplate(<FormalSquareTemplate />)
            } else {
            }
        }
    }, [ratio, formality])

    const exportRef = useRef()

    const handleDownloadImage = useCallback(() => {
        const element = exportRef.current;
        if (element === null) {
            return
        }
    
        toJpeg(element, { quality: 0.95 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                console.log("LINK")
                console.log(link)
                link.download = 'finale-composition.jpeg'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log("ERROR DE LA PROMESA")
                console.log(err)
        })
    }, [exportRef])

    //     convertHTMLToImage()
    // },[isPostLoaded])

    // const uploadImage = async (imageData) => {
    // const apiUrl = 'https://api.imgur.com/3/image';
    // const response = await fetch(apiUrl, {
    //     method: 'POST',
    //     headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //     'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //     image: imageData,
    //     type: 'base64',
    //     }),
    // });
    // const data = await response.json();
    // return data.data.link;
    // }

    // const handleUpload = async () => {
    //     const imageData = await convertToImage();
    //     const imageUrl = await uploadImage(imageData);
    //     console.log(imageUrl);
    //   }


    return (
    <>
    {!isPostLoaded ?     <ClipLoader
                size={150}
                aria-label="Loading Spinner"
          /> : 
    <>
        <div className="row p-0 m-0 output-wrapper">
            <div className="col-sm-12 col-lg-6 p-0 m-0">
                <div className="final-composition-wrapper">
                    <div className="final-composition-wrapper-img">
                        <div ref={exportRef} id="finale-composition">
                            {template}
                        </div>
                    </div>
                    <button type="button" onClick={handleDownloadImage}>
                        Download as Image
                    </button>
                </div>
            </div>
            <div className="col-sm-12 col-lg-5 p-3 ms-5">
                <h2 className="px-3">¡Felicidades!</h2>
                <h3 className="px-3 mt-3">¡Ya eres todo un (o una) <em>GeekPoster</em>!</h3>
                <p className="lead feedback-happy-talk-lead">
                    Aquí te vamos a endulzar el oído con un montón de charla que no necesitas leer pero que hace 
                    bonito. Por cierto, ¿qué piensas sobre la inmortalidad del pulpo?
                </p>
                <div className="feedback-happy-talk">
                    <p>
                        Yo opino que La idea de la inmortalidad del pulpo es fascinante... como idea. Sin embargo, no
                        hay evidencia científica que respalde tal hecho.
                    </p>
                </div>
                <h2 className="px-3 pt-3">Hashtag sugeridos</h2>
                <div className="border border-primary ms-3 mt-3 p-3">Aquí vamos a cargar un montón de
                    <em> hashtags </em>
                    algún día.
                </div>
                <div className="mt-3 p-3">
                    <FacebookShareButton
                        // url={'AQUI IRÍA LA URL DE IMGUR'}
                        quote={'Dummy text!'}
                        hashtag="#muo">
                        <FacebookIcon size={64} borderRadius={"5px"} />
                        <span className="ms-3">Compartir en Facebook</span>
                    </FacebookShareButton>
                </div>
                <div className="p-3">
                    <TwitterShareButton
                        // url={'AQUI IRÍA LA URL DE IMGUR'}
                        quote={'Dummy text!'}
                        hashtag="#muo">
                        <TwitterIcon size={64} borderRadius={"5px"} />
                        <span className="ms-3">Compartir en Twitter</span>
                    </TwitterShareButton>
                </div>
            </div>
        </div>
    </>}
</>)
};

    // ELIGE LA PLANTILLA LA LLENA DE INFORMACION POR PROPS LA CONVIERTE EN JPG Y LA SUBE A IMGUR ¿HASTA QUÉ PUNTO PUEDO SER EL OUTPUT?

    // retorno : plantilla (ratio, formality) ==> {react-jpg} ==> .JPG ==> <Output/>

    // navigate/("output")

// }

    // importar la plantilla que ha elegido el selector de plantilla

    // rellanrla de información

    // PRUEBA ENORME pasarla por la librería que la convierte en jpg

    // enviarla a imgur