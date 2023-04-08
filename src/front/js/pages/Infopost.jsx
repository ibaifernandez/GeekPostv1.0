import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../../front/styles/infopost.css";
import { Link, useNavigate } from "react-router-dom";
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
export const Infopost = () => {

    const { store, actions } = useContext(Context);
  
    const [mainImageisLoaded, setMainImageIsLoaded] = useState(false);
   
    const [identity, setIdentity] = useState("");

    const [mainText, setMainText] = useState("");

    const [secondaryText, setSecondaryText] = useState("");

    const [price, setPrice] = useState("");
    
    const [contact, setContact] = useState("");

    const [logo, setLogo] = useState("");
    
    const [newLogoIsLoaded, setNewLogoIsLoaded] = useState(false);

    const [formality, setFormality] = useState("");

    const [mainColor, setMainColor] = useState("");

    const [secondaryColor, setSecondaryColor] = useState("");

    const [auxColor, setAuxColor] = useState("");

    const [ratio, setRatio] = useState("")

    useEffect(() => {
        actions.getUserDetails();
        setIdentity(store.user.identity);
        setLogo(store.user.logo);
        setContact(store.user.contact);
        setIdentity(store.user.identity);
        setIdentity(store.user.identity);
        setIdentity(store.user.identity);
        console.log(identity)
      }, []);

    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        e.preventDefault();
        const input = document.getElementById('mainImageFile');
        const file = input.files[0];
        if (!file) return;
        const imageURL = URL.createObjectURL(file);
        localStorage.setItem("mainImage", imageURL); 
        setMainImageIsLoaded(true);
    }
    
    const handleLogoUpload = (e) => {
        e.preventDefault();
        const input = document.getElementById('logoFile');
        const file = input.files[0];
        if (!file) return;
        const logoURL = URL.createObjectURL(file);
        localStorage.setItem("newLogo", logoURL); 
        setNewLogoIsLoaded(true);
    }

    const imageUploaderTooltip = (
    <Tooltip id="image-uploader-tooltip">
        Sube aquí la imagen que quieres que sea el foco principal de la composición de tu post final.
    </Tooltip>
    );

    const identityTooltip = (
    <Tooltip id="identity-tooltip">
        Escribe aquí la identidad de tu negocio, que bien podría ser tu nombre en el caso de que se 
        trate de una marca personal o del nombre de tu negocio si lo que quieres es publicar algo 
        relativo a él.
    </Tooltip>
    );

    const mainTextTooltip = (
    <Tooltip id="main-text-tooltip">
        Escribe aquí el que será el texto principal de tu diseño, es decir, el principal reclamo para
        quien se tope con el post.
    </Tooltip>
    );

    const secondaryTextTooltip = (
    <Tooltip id="secondary-text-tooltip">
        Escribe aquí el que será el texto secundario de tu diseño, es decir, una explicación adicional
        para entender de qué trata tu post.
    </Tooltip>
    );

    const priceTooltip = (
    <Tooltip id="price-tooltip">
        Escribe aquí el precio u oferta, si es que tu post incluye alguno. Si no, déjalo vacío. Si se trata 
        de un precio, puedes incluir el símbolo de la divisa (por ejemplo, "$3,95"). Si se trata de una 
        oferta, puedes escribirla en forma de porcentaje (por ejemplo "20%")
    </Tooltip>
    );

    const contactTooltip = (
    <Tooltip id="contact-tooltip">
        Escribe aquí una forma sencilla de que tus clientes puedan contactarte, como un número de teléfono, 
        la dirección de un sitio web o un correo electrónico.
    </Tooltip>
    );
    
    const logoTooltip = (
    <Tooltip id="logo-tooltip">
        Elige tu «logo». Quedará mucho mejor si eliges uno que tenga proporción cuadradada.
    </Tooltip>
    );
    
    return (
        <div id="infopost-main-wrapper">
            <div id="infopost-wrapper" className="container">
                <h2 className="w-100 text-center">¡Crea tu composición!</h2>
                <p className="text-center mt-3">Añade a continuación la información que quieras ver representada en tu diseño final.</p>
                <form id="infopost-form" /*onSubmit=""*/>
                    <div id="infopost-form-wrapper" className="form-group-1">
                        
                        <div id="image-uploader" className="image-uploader-card"> 
                            <label htmlFor="mainImageFile" className="form-label infopost-label">
                                1. Selecciona una imagen (tamaño máximo 5 Mb)
                            </label>
                            <div id="image-uploader-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    className="form-control-image-uploader"
                                    type="file"
                                    id="mainImageFile"
                                    accept="image/*"
                                    required
                                    onChange={(e) => handleImageUpload(e)}
                                />
                                <OverlayTrigger placement="right" overlay={imageUploaderTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                                {/* <button className="btn btn-infopost" type="submit" onClick={(e) => handleImageUpload(e)}>
                                    Subir imagen
                                </button> */}
                            </div>
                            <div id="uploaded-main-image" className="img-fluid">
                                { mainImageisLoaded ?
                                    (<div className="mt-3">
                                        <img src={localStorage.mainImage} alt="" className="img-fluid" />
                                    </div>)
                                : null }
                           </div>
                        </div>

                        <div id="identity-uploader" className="mt-4">
                            <label htmlFor="identity" className="form-label infopost-label">
                                2. ¿Cuál es la identidad de tu negocio?
                            </label>
                            <div id="identity-uploader-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    type="text"
                                    name="identity"
                                    id="identity"
                                    className="input-infopost border-0 border-bottom"
                                    onChange={(e) => setIdentity(e.target.value)}
                                    value={identity}
                                    placeholder="Pastelería La Increíble"
                                />
                                <OverlayTrigger placement="right" overlay={identityTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>
                        
                        <div id="main-text-uploader" className="mt-4">
                            <label htmlFor="main-text" className="form-label infopost-label">
                                3. Escribe el texto principal de tu post.
                            </label>
                            <div id="main-text-uploader-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    type="text"
                                    name="main-text"
                                    id="main-text"
                                    className="input-infopost border-0 border-bottom"
                                    onChange={(e) => setMainText(e.target.value)}
                                    value={mainText}
                                    placeholder="¡Deliciosos pasteles de chocolate!"
                                />
                                <OverlayTrigger placement="right" overlay={mainTextTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>
                        
                        <div id="secondary-text-uploader" className="mt-4">
                            <label htmlFor="secondary-text" className="form-label infopost-label">
                                4. Escribe el texto secundario de tu post.
                            </label>
                            <div id="secondary-text-uploader-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    type="text"
                                    name="secondary-text"
                                    id="secondary-text"
                                    className="input-infopost border-0 border-bottom"
                                    onChange={(e) => setSecondaryText(e.target.value)}
                                    value={secondaryText}
                                    placeholder="¡Hechos con cacao ecuatoriano 100% puro!"
                                />
                                <OverlayTrigger placement="right" overlay={secondaryTextTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>

                        <div id="price-uploader" className="mt-4">
                            <label htmlFor="price" className="form-label infopost-label">
                                5. Escribe aquí el precio u oferta que quieres que aparezca en tu post.
                            </label>
                            <div id="price-uploader-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="input-infopost border-0 border-bottom"
                                    onChange={(e) => setPrice(e.target.value)}
                                    value={price}
                                    placeholder="$3,95"
                                />
                                <OverlayTrigger placement="right" overlay={priceTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>

                        <div id="contact-uploader" className="mt-4">
                            <label htmlFor="contact" className="form-label infopost-label">
                                6. Escribe aquí tus datos de contacto.
                            </label>
                            <div id="contact-uploader-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    className="input-infopost border-0 border-bottom"
                                    onChange={(e) => setContact(e.target.value)}
                                    value={contact}
                                    placeholder="+59398403873"
                                />
                                <OverlayTrigger placement="right" overlay={contactTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>
                        
                        <div id="logo-uploader" className="image-uploader-card mt-4"> 
                        <label htmlFor="logoFile" className="form-label infopost-label">
                                7. Carga tu logo (tamaño máximo 5 Mb)
                            </label>
                            <div id="logo-uploader-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    className="form-control-image-uploader"
                                    type="file"
                                    id="logoFile"
                                    accept="image/*"
                                    required
                                    onChange={(e) => handleLogoUpload(e)}
                                />
                                <OverlayTrigger placement="right" overlay={logoTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                            <div id="pre-uploaded-logo" className="img-fluid">
                                { newLogoIsLoaded ? 
                                    (<div className="mt-3 d-flex justify-content-center">
                                        <img src={localStorage.newLogo} alt="" className="img-fluid" />
                                    </div>)
                                : store.user.logo ?
                                    (<div className="mt-3 d-flex justify-content-center">
                                       <img src={logo} alt="" className="img-fluid" />
                                    </div>)                                
                                : null }
                           </div>
                        </div>

                        <div id="formality-meter" className="mt-4">
                            <label htmlFor="formality" className="form-label infopost-label">
                                8. Elige el nivel de formalidad de tu post.
                            </label>
                            <div className="d-flex">
                                <div id="formality-input" className="w-100 d-flex flex-column align-middle mt-3">
                                    <input
                                        type="range"
                                        name="contact-level"
                                        id="contact-level"
                                        className="input-infopost border-0 border-bottom"
                                        min="1"
                                        max="3"
                                        step="1"
                                        onChange={(e) => {(parseInt(e.target.value))}}
                                    />
                                    <div className="d-flex justify-content-between" style={{ width:'100%' }}>
                                        <span>Formal</span>
                                        <span>Semiformal</span>
                                        <span>Informal</span>
                                    </div>
                                </div>    
    <OverlayTrigger placement="right" overlay={contactTooltip}>
      <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
    </OverlayTrigger>
  </div>
 
</div>

                    </div>
                </form>
            </div>
        </div>

         
      
    );
};
