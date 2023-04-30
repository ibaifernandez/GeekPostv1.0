import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { LinkedinShareButton, LinkedinIcon } from "react-share";

import ClipLoader from "react-spinners/ClipLoader";

import html2canvas from "html2canvas";

import { Context } from "../store/appContext.js";

import { FormalSquareTemplate } from "../templates/FormalSquareTemplate.jsx";
import { FormalVerticalTemplate } from "../templates/FormalVerticalTemplate.jsx";
import { SemiFormalSquareTemplate } from "../templates/SemiFormalSquareTemplate.jsx";
import { SemiFormalVerticalTemplate } from "../templates/SemiFormalVerticalTemplate.jsx";
import { InformalSquareTemplate } from "../templates/InformalSquareTemplate.jsx";
import { InformalVerticalTemplate } from "../templates/InformalVerticalTemplate.jsx";

import "../../styles/output.css";

export const Output = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate();

    const [template, setTemplate] = useState(null);
    const [isTemplateLoaded, setIsTemplateLoaded] = useState(false);
    const [isTemplateExported, setIsTemplateExported] = useState(false);
    const [sharingUrl, setSharingUrl] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("")

    const getInfoPost = async () => {
        const infoPost = await actions.getInfoPost();
        return infoPost;
    };

    const ratio = store.infoPost.ratio;
    const formality = store.infoPost.formality;

    useEffect(() => {
        if (ratio === "vertical") {
        if (formality === 1) {
            setTemplate(<InformalVerticalTemplate />);
        } else if (formality === 2) {
            setTemplate(<SemiFormalVerticalTemplate />);
        } else if (formality === 3) {
            setTemplate(<FormalVerticalTemplate />);
        }
        setIsTemplateLoaded(true);
        } else if (ratio === "square") {
        if (formality === 1) {
            setTemplate(<InformalSquareTemplate />);
        } else if (formality === 2) {
            setTemplate(<SemiFormalSquareTemplate />);
        } else if (formality === 3) {
            setTemplate(<FormalSquareTemplate />);
        }
        setIsTemplateLoaded(true);
        }
    }, [ratio, formality]);

    useEffect(() => {
        if (getInfoPost() && isTemplateLoaded) {
        if (document.getElementById("vsft")) {
            const handleDownloadImage = async () => {
            html2canvas(document.getElementById("vsft"), {
                backgroundColor: null,
                logging: false,
                x: 3,
                y: 6,
            })
                .then((canvas) => {
                    let imageData = canvas.toDataURL();
                    localStorage.setItem("finale-composition", imageData);
                    setIsTemplateExported(true);
                    setDownloadUrl(imageData);

                    const apiUrl = process.env.IMGUR_URL;
                    const apiKey = process.env.IMGUR;

                    const finalImageToBeUploaded = imageData.split(",")[1];
                    const formData = new FormData();
                    formData.append("image", finalImageToBeUploaded);

                    return fetch(apiUrl, {
                        method: "POST",
                        headers: {
                        Authorization: "Client-ID " + apiKey
                        },
                        body: formData,
                    });
                    })
                    .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Error al subir imagen");
                    }
                    })
                    .then((data) => {
                        setSharingUrl(data.data.link);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                };
            handleDownloadImage();
        }
        }
    }, [isTemplateLoaded]);

    useEffect(() => {
        if (sharingUrl !== "" && store.infoPost.id) {
            actions.addUrlToPost(store.infoPost.id, sharingUrl)
            // .then((response) => {})
            .catch((error) => console.log(error));
        }
    }, [sharingUrl]);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.download = "Mi-diseño-GeekPost.png";
        link.href = downloadUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
        {!isTemplateLoaded ? (
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
        ) : (
            <>
            <div className="row p-0 m-0 output-wrapper">
                <div className="col-sm-12 col-lg-5 p-0">
                <div className="final-composition-wrapper ps-5">
                    <div
                    id="finale-composition-graphic"
                    className={`${
                        ratio !== "square" ? "verticalcss" : "squarecss"
                    }`}
                    >
                    {isTemplateLoaded && isTemplateExported ? (
                        <img
                        className="img-fluid"
                        src={localStorage.getItem("finale-composition")}
                        />
                    ) : null}
                    </div>
                    <div
                    id="final-composition-wrapper-img"
                    className="final-composition-wrapper-img"
                    >
                    {template}
                    </div>
                </div>
                </div>
                <div className="col-sm-12 col-lg-6 p-3 ms-5 right-output-wrapper">
                    <h2 className="px-3">¡Felicidades!</h2>
                    <h3 className="px-3 mt-3">
                        ¡Ya eres todo un (o una) <em>GeekPoster</em>!
                    </h3>
                    <p className="lead feedback-happy-talk-lead">
                        Aquí te vamos a endulzar el oído con un montón de charla que no
                        necesitas leer pero que hace bonito. Por cierto, ¿qué piensas
                        sobre la inmortalidad del pulpo?
                    </p>
                    <div className="feedback-happy-talk">
                        <p>
                        Yo opino que la idea de la inmortalidad del pulpo es
                        fascinante... como idea. Sin embargo, no hay evidencia
                        científica que respalde tal hecho.
                        </p>
                    </div>
                    <h2 className="px-3 pt-3">Hashtag sugeridos</h2>
                    <div className="border border-primary ms-3 mt-3 p-3">
                        Aquí vamos a cargar un montón de
                        <em> hashtags </em>
                        algún día.
                    </div>
                    <div className="d-flex">
                        <div className="z-index-999 mt-4 p-3 d-flex flex-column w-50 justify-content-between">
                        <FacebookShareButton
                            url={sharingUrl}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <FacebookIcon size={64} borderRadius={"5px"} />
                            <span>Compartir en Facebook</span>
                        </FacebookShareButton>
                        <LinkedinShareButton
                            url={sharingUrl}
                            className="d-flex justify-content-between align-items-center mt-5"
                        >
                            <LinkedinIcon size={64} borderRadius={"5px"} />
                            <span>Compartir en LinkedIn</span>
                        </LinkedinShareButton>
                        </div>
                        <div className="mt-4 p-3 d-flex flex-column w-50 justify-content-between">
                        <TwitterShareButton
                            url={sharingUrl}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <TwitterIcon size={64} borderRadius={"5px"} />
                            <span className="ms-3">Compartir en Twitter</span>
                        </TwitterShareButton>
                        <div className="d-flex justify-content-between align-items-center mt-5">
                            <button
                            className="download-button"
                            onClick={handleDownload}
                            >
                            <i className="fa fa-download color-white"></i>
                            </button>
                            <span className="ms-3">Descargar composición</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </>
            )}
        </>
    );
    };
