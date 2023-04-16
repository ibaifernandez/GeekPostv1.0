import React, { useContext, useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

import { FacebookShareButton, FacebookIcon } from 'react-share'
import { TwitterShareButton, TwitterIcon } from 'react-share'

import ClipLoader from "react-spinners/ClipLoader"

import html2canvas from 'html2canvas';

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
    const [isTemplateLoaded, setIsTemplateLoaded] = useState(false)
    const [isTemplateExported, setIsTemplateExported] = useState(false)
    const [sharingUrl, setSharingUrl] = useState(false)

    useEffect(()=>{
        actions.getInfoPost()
    },[])

    const ratio = store.infoPost.ratio
    const formality = store.infoPost.formality

    useEffect(() => {
        if (ratio === "vertical") {
            if (formality === 1) {
                setTemplate(<InformalVerticalTemplate />)
            } else if (formality === 2) {
                setTemplate(<SemiFormalVerticalTemplate />)
                setIsTemplateLoaded(true)
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
            }
        }
    }, [ratio, formality])

    useEffect(() => {
        if (document.getElementById("vsft")) {
          const handleDownloadImage = () => {
            html2canvas(document.getElementById("vsft"), {
              backgroundColor: null,
              logging: false,
              x: 3,
              y: 6
            })
              .then(function (canvas) {
                let imageData = canvas.toDataURL();
      
                localStorage.setItem("finale-composition", imageData);
      
                
      
                setIsTemplateExported(true);
      
                const apiUrl = "https://api.imgur.com/3/image";
      
                const apiKey = "b4860ef308c697c";
      
                const finalImageToBeUploaded = imageData.split(",")[1];
     
                const formData = new FormData();
                formData.append("image", finalImageToBeUploaded);

                return fetch(apiUrl, {
                  method: "POST",
                  headers: {
                    Authorization: "Client-ID " + apiKey
                  },
                  body: formData
                });
              })
              .then(response => {
                console.log("response");
                console.log(response);
                if (response.ok) {
                  console.log("LO CONSEGUIMOS!!!");
                  return response.json();
                } else {
                  throw new Error("Error al subir imagen");
                }
              })
              .then(function (data) {
                setSharingUrl(data.data.link)
                console.log(sharingUrl)
                console.log(data.data.link);
              })
              .catch(function (error) {
                console.error(error);
              });
          };
          handleDownloadImage();
        }
      }, [isTemplateLoaded]);
      
      

    return (
    <>
    {!isTemplateLoaded ?
            <div className="row w-100">
                <div className="col-sm-12 my-auto mx-auto">
                    <div className="w-25 outline-danger mx-auto d-flex justify-content-center">
                        <div>
                        <ClipLoader
                                className="clip-loader"
                                size={150}
                                aria-label="Loading Spinner"
                            />
                            </div>
                    </div>
                </div>
            </div>
        : 
    <>
        <div className="row p-0 m-0 output-wrapper">
            <div className="col-sm-12 col-lg-6 p-0 m-0">
                <div className="final-composition-wrapper">
                    <div id="finale-composition-graphic">
                        { isTemplateLoaded && isTemplateExported ? <img src={localStorage.getItem("finale-composition")} />
                        : null }
                    </div>
                    <div className="final-composition-wrapper-img">
                        {template}
                    </div>
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
                    <FacebookShareButton url={sharingUrl}>
                        <FacebookIcon size={64} borderRadius={"5px"} />
                        <span className="ms-3">Compartir en Facebook</span>
                    </FacebookShareButton>
                </div>
                <div className="p-3">
                <TwitterShareButton url={sharingUrl}>
                    <TwitterIcon size={64} borderRadius={"5px"} />
                    <span className="ms-3">Compartir en Twitter</span>
                </TwitterShareButton>
                </div>
            </div>
        </div>
    </>}
</>)
};