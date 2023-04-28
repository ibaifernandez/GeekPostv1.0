import React from "react";
import "../../styles/profile.css";
import { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { HexColorPicker } from "react-colorful";
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { Link } from "react-router-dom"

export const MyProfile = () => {

    const { store, actions } = useContext(Context);
    const [profileData, setProfileData] = useState({
        name: "",
        lastName: "",
        email: "",
        contact: "",
        facebookProfile: "",
        instagramProfile: "",
        tiktokProfile: "",
        identity: "",
        logo: "",
        mainColor: "",
        secondaryColor: "",
        auxColor: ""
    });
    const [newLogoIsLoaded, setNewLogoIsLoaded] = useState(false);
    // const [message, setMessage] = useState("");

    useEffect(() => {
        actions.getUserDetails();
        console.log("store.user")
        console.log(store.user)
      }, []);
      
      useEffect(() => {
        setProfileData({
          name: store.user.firstName,
          lastName: store.user.lastName,
          email: store.user.email,
          contact: store.user.contact,
          facebookProfile: store.user.facebookProfile,
          instagramProfile: store.user.instagramProfile,
          tiktokProfile: store.user.tiktokProfile,
          identity: store.user.identity,
          logo: store.user.logo,
          mainColor: store.user.mainColor,
          secondaryColor: store.user.secondaryColor,
          auxColor: store.user.auxColor
        })
      }, [store.user]);

    // const handleBlur = () => {
    //     actions.putProfile()
    //     setMessage("success")
    // }

    const apiUrl = process.env.IMGUR_URL;
    const apiKey = process.env.IMGUR;

    const handleLogoUpload = async (e) => {
        e.preventDefault();
        const input = document.getElementById('profile-logo-file');
        const file = input.files[0];
        if (!file) return;
      
        const formData = new FormData();
        formData.append('image', file);
      
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              Authorization: "Client-ID " + apiKey
            },
            body: formData,
          });
      
            if (response.ok) {
                const data = await response.json();
                const newLogoUrl = data.data.link;
                console.log(newLogoUrl)
                setNewLogoIsLoaded(true);
                setLogo(newLogoUrl);
                actions.putProfile(logo)
            } else {
                throw new Error('Fallo al cargar el logo.');
            }
        } catch (error) {
          console.error(error);
        }
      };

      const emailTooltip = (
        <Tooltip id="email-tooltip">
            Si quieres cambiar tu correo electrónico, por favor, ve a la seccón «Seguridad» de tu cuenta.
        </Tooltip>
        );

    return (
        <section className="home-profile section-bg">
            <div className="container-fluid" data-aos="fade-up">
                <div className="row m-3">
                    <div className="px-3">

                        <div className="section-title">
                            <h2>Mi perfil</h2>
                            <p>Aquí puedes actualizar tu perfil para personalizar tu experiencia en GeekPost.</p>
                        </div>

                        <div>
                            <form id="profile-form" className="d-flex flex-column">
                                <div className="row">
                                    <div className="col-lg-6 pe-3">

                                        <div className="form-group mb-3">
                                            <input
                                                name="name"
                                                placeholder="Nombre"
                                                className="form-control border border-0 border-bottom"
                                                type="text"
                                                autoComplete="name"
                                                value={profileData.name}
                                                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                                                onBlur={() => {actions.putProfile(profileData)}}
                                                // onBlur={handleBlur}
                                            />
                                            {message === "success" ? <div>Guardado</div> : null}
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                name="last-name"
                                                placeholder="Apellido(s)"
                                                className="form-control border border-0 border-bottom"
                                                type="text"
                                                value={profileData.lastName}
                                                onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                                                onBlur={() => {actions.putProfile(profileData)}}
                                                />
                                        </div>

                                        <OverlayTrigger placement="right" overlay={emailTooltip}>
                                            <div className="form-group mb-3">
                                            <input
                                                name="email"
                                                placeholder="Dirección de correo electrónico"
                                                className="form-control border border-0 border-bottom"
                                                type="text"
                                                disabled
                                                defaultValue={profileData.email}
                                            />
                                        </div>
                                        </OverlayTrigger>

                                        <div className="form-group mb-3">
                                            <input
                                                name="contact"
                                                placeholder="Nº de WhatsApp, sitio web, dirección de email..."
                                                className="form-control border border-0 border-bottom"
                                                type="text"
                                                value={profileData.contact}
                                                onChange={(e) => setProfileData({...profileData, contact: e.target.value})}
                                                onBlur={() => {actions.putProfile(profileData)}}
                                            />
                                        </div>

                                    </div>

                                    <div className="col-lg-6 pe-3">

                                        <div className="form-group mb-3">
                                            <input
                                                name="facebook"
                                                placeholder="https://facebook.com/[tu nombre de usuario o fan page]"
                                                className="form-control border border-0 border-bottom"
                                                type="text"
                                                value={profileData.facebookProfile}
                                                onChange={(e) => setProfileData({...profileData, facebookProfile: e.target.value})}
                                                onBlur={() => {actions.putProfile(profileData)}}
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                name="instagram"
                                                placeholder="https://instagram.com/[tu usuario de Instagram]"
                                                className="form-control border border-0 border-bottom"
                                                type="text"
                                                value={profileData.instagramProfile}
                                                onChange={(e) => setProfileData({...profileData, instagramProfile: e.target.value})}
                                                onBlur={() => {actions.putProfile(profileData)}}
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                name="tiktok"
                                                placeholder="https://tiktok.com/[@tu nombre de usuario de Tiktok]"
                                                className="form-control border border-0 border-bottom"
                                                type="text"
                                                value={profileData.tiktokProfile}
                                                onChange={(e) => setProfileData({...profileData, tiktokProfile: e.target.value})}
                                                onBlur={() => {actions.putProfile(profileData)}}
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                name="identity"
                                                placeholder="El nombre de tu marca"
                                                className="form-control border border-0 border-bottom"
                                                type="text"
                                                value={profileData.identity}
                                                onChange={(e) => setProfileData({...profileData, identity: e.target.value})}
                                                onBlur={() => {actions.putProfile(profileData)}}
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div className="row d-flex align-items-center my-3">
                                    <div className="col-6">
                                        <div className="form-group mb-3">
                                        <input
                                            className="form-control-image-uploader"
                                            type="file"
                                            id="profile-logo-file"
                                            accept="image/*"
                                            onChange={(e) => handleLogoUpload(e)}
                                />
                                        </div>
                                    </div>

                                        <div className="col-6 d-flex justify-content-center">
                                            <div id="pre-uploaded-logo" className="">
                                                { newLogoIsLoaded ? 
                                                    (<div className="">
                                                        <img src={logo} alt="" className="profile-logo" />
                                                    </div>)
                                                : store.user.logo ?
                                                    (<div className="">
                                                        <img src={store.user.logo} alt="" className="profile-logo" />
                                                    </div>)                                
                                                : null }
                                            </div>
                                        </div>
                                    </div>
                                
                                <div id="color-pickers" className="row mt-3">
                                    <div className="col-4">
                                        <div className="form-group mb-3 w-100">
                                            <label htmlFor="main-color" className="d-flex justify-content-center">Color principal</label>
                                            <HexColorPicker
                                                id="main-color"
                                                className="w-100"
                                                name="main-color"
                                                color={profileData.mainColor}
                                                onChange={(e) => setMainColor(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="form-group mb-3 w-100">
                                            <label htmlFor="secondary-color" className="d-flex justify-content-center">Color secundario</label>
                                            <HexColorPicker
                                                id="secondary-color"
                                                className="w-100"
                                                name="secondary-color"
                                                color={profileData.secondaryColor}
                                                onChange={(e) => setSecondaryColor(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="form-group mb-3 w-100">
                                            <label htmlFor="aux-color" className="d-flex justify-content-center">Color auxiliar</label>
                                            <HexColorPicker
                                                id="aux-color"
                                                className="w-100"
                                                name="aux-color"
                                                color={profileData.auxColor}
                                                onChange={(e) => setAuxColor(e.target.value)}/>
                                        </div>
                                    </div>
                                    
                                
                                </div>

                                    
                            </form>

                            <div className="row security">
                                <div className="col-8 pe-3">
                                    <p>¿Quieres cambiar tu correo, tu contraseña o borrar tu cuenta?</p>
                                    <p>Por favor, accede a la sección de Seguridad.</p>
                                </div>
                                <div className="col-4 d-flex justify-content-center">
                                    <Link to="/seguridad">
                                        <button className="btn-access-security">Seguridad</button>
                                    </Link>
                                </div>
                                

                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
