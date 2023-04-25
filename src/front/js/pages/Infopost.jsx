import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../../front/styles/infopost.css";
import { useNavigate } from "react-router-dom";
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
    const [formality, setFormality] = useState(2);
    const [mainColor, setMainColor] = useState("#000000");
    const [secondaryColor, setSecondaryColor] = useState("#000000");
    const [auxColor, setAuxColor] = useState("#000000");
    const [ratio, setRatio] = useState("")
    const [cta, setCta] = useState("")

    useEffect(() => {
        actions.getUserDetails();
        setIdentity(store.user.identity);
        setLogo(store.user.logo);
        setContact(store.user.contact);
        setMainColor(store.user.mainColor);
        setSecondaryColor(store.user.secondaryColor);
        setAuxColor(store.user.auxColor);
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
        setLogo(null);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        actions.storeInfoPost(
          identity,
          mainText,
          secondaryText,
          price,
          logo,
          formality,
          mainColor,
          secondaryColor,
          auxColor,
          ratio,
          contact,
          cta
        );
        fetch(logo)
        .then(response => {
            return response.arrayBuffer();
        })
        .then(arrayBuffer => {
            const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result;
                localStorage.setItem('logo', base64);
            };
            reader.readAsDataURL(blob);
        })
        .catch(error => {
            console.error('Error fetching image:', error);
        });
        navigate("/output");
    };

    const imageUploaderTooltip = (
    <Tooltip id="image-uploader-tooltip">
        Sube aquí la imagen que quieres que sea el foco principal de la composición de tu post final.
    </Tooltip>
    );

    const identityTooltip = (
    <Tooltip id="identity-tooltip">
        Escribe aquí la identidad de tu negocio, que bien podría ser tu nombre en el caso de que se 
        trate de una marca personal o del nombre de tu negocio si lo que quieres es publicar algo 
        relativo a él. Máximo 25 caracteres.
    </Tooltip>
    );

    const mainTextTooltip = (
    <Tooltip id="main-text-tooltip">
        Escribe aquí el que será el texto principal de tu diseño, es decir, el principal reclamo para
        quien se tope con el post. Máximo 25 caracteres.
    </Tooltip>
    );

    const secondaryTextTooltip = (
    <Tooltip id="secondary-text-tooltip">
        Escribe aquí el que será el texto secundario de tu diseño, es decir, una explicación adicional
        para entender de qué trata tu post. Máximo 75 caracteres.
    </Tooltip>
    );

    const priceTooltip = (
    <Tooltip id="price-tooltip">
        Escribe aquí el precio u oferta, si es que tu post incluye alguno. Si no, déjalo vacío. Si se trata 
        de un precio, puedes incluir el símbolo de la divisa (por ejemplo, "$3,95"). Si se trata de una 
        oferta, puedes escribirla en forma de porcentaje (por ejemplo "20%"). Máximo 10 caracteres.
    </Tooltip>
    );

    const contactTooltip = (
    <Tooltip id="contact-tooltip">
        Escribe aquí una forma sencilla de que tus clientes puedan contactarte, como un número de teléfono, 
        la dirección de un sitio web o un correo electrónico. Máximo 15 caracteres.
    </Tooltip>
    );
    
    const logoTooltip = (
    <Tooltip id="logo-tooltip">
        Elige tu «logo». Quedará mucho mejor si eliges uno que tenga proporción cuadradada.
    </Tooltip>
    );

    const ctaTooltip = (
    <Tooltip id="cta-tooltip">
        Invita aquí a los usuarios que vean tu post a realizar una acción.
    </Tooltip>
    );
    
    const formalityTooltip = (
    <Tooltip id="logo-tooltip">
        Dependiendo de la naturaleza de tu negocio y de tu publicación, elige el nivel de formalidad que más te
        convenga. ¡Cada uno arrojará un resultado diferente en forma de post final!
    </Tooltip>
    );
    
    const ratioTooltip = (
    <Tooltip id="logo-tooltip">
        Ten en cuenta que las publicaciones cuadradas se ven mejor en los feed de las diferentes redes sociales 
        mientras que las publicaciones verticales son más adecuadas para las <em>stories</em>.
    </Tooltip>
    );
    
    const mainColorTooltip = (
    <Tooltip id="logo-tooltip">
        ¿Tiene tu marca un color principal? De ser así, elígelo aquí.
    </Tooltip>
    );
    
    const secondaryColorTooltip = (
    <Tooltip id="logo-tooltip">
        ¿Tiene tu marca un color secundario? De ser así, elígelo aquí.
    </Tooltip>
    );
    
    const auxColorTooltip = (
    <Tooltip id="logo-tooltip">
        ¿Tiene tu marca un color auxiliar? De ser así, elígelo aquí.
    </Tooltip>
    );

    return (
        <div className="infopost-main-wrapper">
            <div className="container infopost-wrapper">
                <h2 className="w-100 text-center">¡Crea tu composición!</h2>
                <p className="text-center mt-3">Añade a continuación la información que quieras ver representada en tu diseño final.</p>
                <form className="infopost-form" method="post" onSubmit={(e) => {handleSubmit(e)}}>
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
                            </div>
                            <div id="uploaded-main-image" className="img-fluid">
                                { mainImageisLoaded ?
                                    (<div className="mt-3 d-flex justify-content-center">
                                        <img src={localStorage.mainImage} alt="" className="infopost-img" />
                                        {/* <button type="button" onClick={localStorage.removeItem("mainImage") && setMainImageIsLoaded(false)}>wefeqwfw</button> */}
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
                                    placeholder="Pastelería La Increíble (max. 25 caracteres)"
                                    maxLength={25}
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
                                    placeholder="¡Deliciosos pasteles de chocolate! (Máx. 25 caracteres)"
                                    maxLength={25}
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
                                    placeholder="¡Hechos con cacao ecuatoriano 100% puro! (Máx. 75 caracteres)"
                                    maxLength={75}
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
                                    placeholder="$3,95 (Máx. 10 caracteres)"
                                    maxLength={10}
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
                                    placeholder="+59398403873 (Máx. 15 caracteres)"
                                    maxLength={15}
                                />
                                <OverlayTrigger placement="right" overlay={contactTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>

                        <div id="cta-uploader" className="mt-4">
                            <label htmlFor="cta" className="form-label infopost-label">
                                7. ¿A qué vas a invitar a tus clientes?
                            </label>
                            <div id="cta-uploader-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    type="text"
                                    name="cta"
                                    id="cta"
                                    className="input-infopost border-0 border-bottom"
                                    onChange={(e) => setCta(e.target.value)}
                                    value={cta}
                                    placeholder="¡Encarga el tuyo! (max. 25 caracteres)"
                                    maxLength={25}
                                />
                                <OverlayTrigger placement="right" overlay={ctaTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>
                        
                        <div id="logo-uploader" className="image-uploader-card mt-4"> 
                        <label htmlFor="logoFile" className="form-label infopost-label">
                                8. Carga tu logo (tamaño máximo 5 Mb)
                            </label>
                            <div id="logo-uploader-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    className="form-control-image-uploader"
                                    type="file"
                                    id="logoFile"
                                    accept="image/*"
                                    required={store.user.logo ? false : true}
                                    onChange={(e) => handleLogoUpload(e)}
                                />
                                <OverlayTrigger placement="right" overlay={logoTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                            <div id="pre-uploaded-logo" className="img-fluid">
                                { newLogoIsLoaded ? 
                                    (<div className="mt-3 d-flex justify-content-center">
                                        <img src={localStorage.newLogo} alt="" className="infopost-img" />
                                    </div>)
                                : store.user.logo ?
                                    (<div className="mt-3 d-flex justify-content-center">
                                       <img src={logo} alt="" className="infopost-img" />
                                    </div>)                                
                                : null }
                           </div>
                        </div>

                        <div id="formality-meter" className="mt-4">
                            <label htmlFor="formality" className="form-label infopost-label">
                                9. Elige el nivel de formalidad de tu post.
                            </label>
                            <div className="d-flex w-100">
                                <div id="formality-input" className="d-flex flex-column align-middle mt-3 w-100">
                                    <input
                                        type="range"
                                        name="formality-level"
                                        id="formality-level"
                                        className="input-infopost border-0 border-bottom"
                                        min="1"
                                        max="3"
                                        step="1"
                                        onChange={(e) => {setFormality(parseInt(e.target.value))}}
                                        value={formality}
                                    />
                                    <div className="d-flex justify-content-between slider-tags-infopost">
                                        <span>Informal</span>
                                        <span>Semiformal</span>
                                        <span>Formal</span>
                                    </div>
                                </div>    
                                <OverlayTrigger placement="right" overlay={formalityTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>

                        <div id="ratio-input" className="mt-4">
                            <div htmlFor="square" className="form-label infopost-label">
                                10. ¿Quieres tu post en formato cuadrado o vertical?
                            </div>
                            <div id="ratio-input-selector" className="mt-3 d-flex justify-content-between">
                                <div id="square-input" className="w-25">
                                    <input
                                        type="radio"
                                        id="square"
                                        name="ratio"
                                        value={ratio}
                                        className="form-check-input"
                                        onChange={(e) => setRatio(e.target.id)}
                                        required
                                    />
                                    <label htmlFor="square" className="ms-3">
                                        Cuadrado
                                    </label>
                                </div>
                                <div id="vertical-input" className="w-25">
                                    <input
                                        type="radio"
                                        id="vertical"
                                        name="ratio"
                                        value={ratio}
                                        className="form-check-input"
                                        onChange={(e) => setRatio(e.target.id)}
                                        required
                                     />
                                     <label htmlFor="vertical" className="ms-3">
                                        Vertical
                                    </label>
                                </div>
                                <OverlayTrigger placement="right" overlay={ratioTooltip}>
                                    <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>

                        <div id="main-color-picker" className="mt-4">
                            <label htmlFor="main-color" className="form-label infopost-label">
                                11. ¿Cuál es el color principal de tu marca?
                            </label>
                            <div id="main-color-picker-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    type="color"
                                    name="main-color"
                                    id="main-color"
                                    className="input-infopost border-0 border-bottom"
                                    onChange={(e) => setMainColor(e.target.value)}
                                    value={mainColor}
                                />
                                <OverlayTrigger placement="right" overlay={mainColorTooltip}>
                                <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>
                        
                        <div id="secondary-color-picker" className="mt-4">
                            <label htmlFor="secondary-color" className="form-label infopost-label">
                                12. ¿Cuál es el color secundario de tu marca?
                            </label>
                            <div id="secondary-color-picker-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    type="color"
                                    name="secondary-color"
                                    id="secondary-color"
                                    className="input-infopost border-0 border-bottom"
                                    onChange={(e) => setSecondaryColor(e.target.value)}
                                    value={secondaryColor}
                                />
                                <OverlayTrigger placement="right" overlay={secondaryColorTooltip}>
                                <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>
                        
                        <div id="aux-color-picker" className="mt-4">
                            <label htmlFor="aux-color" className="form-label infopost-label">
                                13. ¿Cuál es el color auxiliar de tu marca?
                            </label>
                            <div id="aux-color-picker-input" className="d-flex align-middle justify-content-between mt-3">
                                <input
                                    type="color"
                                    name="aux-color"
                                    id="aux-color"
                                    className="input-infopost border-0 border-bottom"
                                    onChange={(e) => setAuxColor(e.target.value)}
                                    value={auxColor}
                                />
                                <OverlayTrigger placement="right" overlay={auxColorTooltip}>
                                <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                </OverlayTrigger>
                            </div>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-submit-infopost">Enviar</button>

                </form>
            </div>
        </div>

         
      
    );
};

//  Librerías para «poner bonito» el color picker input:
//  (1) react-color: proporciona una gama de diferentes selectores de color para elegir. Admite formatos de color RGB, 
//  HSL y HEX e incluye funciones como transparencia alfa, muestras de color y paletas de colores.
//  (2) react-colorful: proporciona un componente de selector de color simple e intuitivo. Admite formatos de color RGB, 
//  HSL y HEX e incluye funciones como transparencia alfa y ajustes preestablecidos de color.
//  (3) react-native-color-picker: (para React Native) proporciona un componente de selector de color personalizable que
//  se puede usar en las plataformas iOS y Android. Admite formatos de color RGB, HSL y HSV e incluye características como
//  transparencia alfa, ajustes preestablecidos de color y un selector de rueda de color.
//  (4) react-sketch-picker: selector de color simple y personalizable para React que incluye una rueda de color, controles
//  deslizantes de saturación y brillo, y campos de entrada RGB y HEX.
//  (5) react-color-hook: proporciona un conjunto de hooks de React para crear componentes de selección de color
//  personalizados. Incluye hooks para manejar la selección de color, la conversión de formato de color y la validación de
//  color.