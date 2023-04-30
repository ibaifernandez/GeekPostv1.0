import React from "react"
import "../../styles/profile.css"
import { useEffect, useContext, useState } from "react"
import { Context } from "../store/appContext"
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from "react-router-dom"

export const MyProfile = () => {
    const { store, actions } = useContext(Context)
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
    })
    const [newLogoIsLoaded, setNewLogoIsLoaded] = useState(false)
    const [updateStatus, setUpdateStatus] = useState("")
    const [message, setMessage] = useState("")
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        actions.getUserDetails()
    }, [])
      
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
    }, [store.user])

    const handleBlur = async () => {
        try {
            const resp = await actions.putProfile(profileData)
            if (resp.msg === "Campo actualizado.") {
                setUpdateStatus("success")
                setMessage(resp.msg)
                setTimeout(() => {
                    setFadeOut(true)
                    setUpdateStatus("")
                }, 2000)
            } else {
                setUpdateStatus("error")
                setMessage(resp.msg)
                setTimeout(() => {
                    setFadeOut(true)
                    setUpdateStatus("")
                }, 2000)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const apiUrl = process.env.IMGUR_URL
    const apiKey = process.env.IMGUR

    const handleLogoUpload = async (e) => {
        e.preventDefault()

        const input = document.getElementById('profile-logo-file')
        const file = input.files[0]
        if (!file) return

        const formData = new FormData()
        formData.append('image', file)

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    Authorization: "Client-ID " + apiKey
                },
                body: formData,
            })
                if (response.ok) {
                    const data = await response.json()
                    const newLogoUrl = data.data.link
                    setProfileData((prevData) => ({
                        ...prevData,
                        logo: newLogoUrl
                    }))
                    setNewLogoIsLoaded(true)
                    actions.putProfile({ ...profileData, logo: newLogoUrl })
                } else {
                    throw new Error('Fallo al cargar el logo.')
                }
            } catch (error) {
                console.error(error)
            }
        }

    const EmailTooltip = (
        <Tooltip id="email-tooltip">
            Si quieres cambiar tu correo electrónico, por favor, ve a la seccón «Seguridad» de tu cuenta.
        </Tooltip>
    )

    const HexColors = (
        <Tooltip id="hex-colors-tooltip">
            El color hexadecimal es un sistema de notación numérica utilizado para representar colores en
            la mayoría de las páginas web. Se basa en la combinación de tres valores numéricos: rojo, verde
            y azul (RGB, por sus siglas en inglés).
        </Tooltip>
    )

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
                                                onBlur={handleBlur}
                                            />
                                        </div>

                                        <div className="form-group mb-3">
                                            <input
                                                name="last-name"
                                                placeholder="Apellido(s)"
                                                className="form-control border border-0 border-bottom"
                                                type="text"
                                                value={profileData.lastName}
                                                onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                                                onBlur={handleBlur}
                                                />
                                        </div>
                                        
                                        <OverlayTrigger placement="left" overlay={EmailTooltip}>
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
                                                onBlur={handleBlur}
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
                                                onBlur={handleBlur}
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
                                                onBlur={handleBlur}
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
                                                onBlur={handleBlur}
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
                                                // onBlur={() => {actions.putProfile(profileData)}}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-12">
                                        {updateStatus === "success" ?
                                            <div className={`success-message ${fadeOut ? 'fade-out' : ''}`}>
                                                {message}
                                            </div>
                                        :
                                        updateStatus === "error" ?
                                            <div className={`success-message ${fadeOut ? 'fade-out' : ''}`}>
                                                {message}
                                            </div>
                                        :
                                            null
                                        } 
                                    </div>
                                </div>

                                <div className="row d-flex align-items-center mt-3">
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
                                                    <img src={profileData.logo} alt="" className="profile-logo" />
                                                </div>)
                                            : store.user.logo ?
                                                (<div className="">
                                                    <img src={store.user.logo} alt="" className="profile-logo" />
                                                </div>)                                
                                            : null }
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row mt-3">
                                    <div className="col-11">Si tu marca tiene colores corporativos es más que probable que conozas sus 
                                        <strong> códigos hexadecimales</strong>. En tal caso, puedes introducirlos aquí.
                                    </div>
                                    <div className="col-1 d-flex justify-content-center">
                                        <OverlayTrigger placement="top" overlay={HexColors}>
                                            <i className="fa-solid fa-circle-question fs-1 d-flex align-items-center color-purple"></i>
                                        </OverlayTrigger>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-4">
                                        <div className="form-group mb-3 w-100">
                                            <label htmlFor="main-color" className="d-flex justify-content-center">
                                                <strong>Color principal</strong>
                                            </label>
                                            <div className="form-group mb-3">
                                                <input
                                                    name="main-color"
                                                    className="form-control border border-0 border-bottom mt-3"
                                                    placeholder="#rrggbb"
                                                    type="text"
                                                    value={profileData.mainColor}
                                                    onChange={(e) => setProfileData({...profileData, mainColor: e.target.value})}
                                                    onBlur={handleBlur}
                                                    />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="form-group mb-3 w-100">
                                            <label htmlFor="secondary-color" className="d-flex justify-content-center">
                                                <strong>Color secundario</strong>
                                            </label>
                                            <input
                                                name="secondary-color"
                                                className="form-control border border-0 border-bottom mt-3"
                                                placeholder="#rrggbb"
                                                type="text"
                                                value={profileData.secondaryColor}
                                                onChange={(e) => setProfileData({...profileData, secondaryColor: e.target.value})}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="form-group mb-3 w-100">
                                            <label htmlFor="aux-color" className="d-flex justify-content-center">
                                                <strong>Color auxiliar</strong>
                                            </label>
                                            <input
                                                name="aux-color"
                                                className="form-control border border-0 border-bottom mt-3"
                                                placeholder="#rrggbb"
                                                type="text"
                                                value={profileData.auxColor}
                                                onChange={(e) => setProfileData({...profileData, auxColor: e.target.value})}
                                                onBlur={handleBlur}
                                            />
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
