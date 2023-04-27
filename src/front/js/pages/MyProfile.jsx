import React from "react";
import "../../styles/profile.css";
import { useEffect, useContext, useState } from "react";
import roundedPhoto1 from "../../img/cta-bg.jpg";
import { Context } from "../store/appContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

export const MyProfile = () => {


  const { store, actions } = useContext(Context);
  const [first_name, setFirstname] = useState(store.user.firstName);
  const [last_name, setLastname] = useState(store.user.lastName);
  const [email, setEmail] = useState(store.user.email);
  const [contact_data, setContactdata] = useState(store.user.contact);
  const [facebook_profile, setFacebook] = useState(store.user.facebookProfile);
  const [instagram_profile, setInstagram] = useState(store.user.instagramProfile);
  const [tiktok_profile, setTiktok] = useState(store.user.tiktokProfile);
  const [identity, setIdentity] = useState(store.user.identity);
  const [main_color, setMaincolor] = useState(store.user.mainColor);
  const [secondary_color, setSecondarycolor] = useState(store.user.secondaryColor);
  const [aux_color, setAuxcolor] = useState(store.user.auxColor);
  const [logo, setLogo] = useState(store.user.logo);
  const [newLogoIsLoaded, setNewLogoIsLoaded] = useState(false);

  useEffect(() => {
    actions.getUserDetails();
   // setLogo(store.user.logo);
  }, []);

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

    return (
        <section className="home-profile section-bg">
            <div className="container-fluid" data-aos="fade-up">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <div className="section-title">
                            <h2>Mi perfil</h2>
                        </div>
                        <div className="row">
                            <form
                            className="d-flex"
                                id="profile-form"
                            >
                                <div className="col-lg-5">
                                    <div className="form-group mb-3">
                                            <input
                                                name="name"
                                                placeholder="Nombre"
                                                className="form-control border border-0 border-bottom"
                                                type="text"
                                                defaultValue={store.user.firstName}
                                                onChange={(e) => setFirstname(e.target.value)}
                                            />
                                    </div>
                                    
                                        
                                    <div className="form-group mb-3">
                                        <input
                                            name="last-name"
                                            placeholder="apellidos"
                                            className="form-control border border-0 border-bottom"
                                            type="text"
                                            defaultValue={store.user.lastName}
                                            onChange={(e) => setLastname(e.target.value)}
                                            />
                                    </div>
                                        

                                    <div className="form-group mb-3">
                                        <input
                                            name="email"
                                            placeholder="Dirección de correo electrónico "
                                            className="form-control border border-0 border-bottom"
                                            type="text"
                                            defaultValue={store.user.email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                        

                                    <div className="form-group mb-3">
                                        <input
                                            name="contact_data"
                                            placeholder="Dato de contacto"
                                            className="form-control border border-0 border-bottom"
                                            type="text"
                                            defaultValue={store.user.contact}
                                            onChange={(e) => setContactdata(e.target.value)}
                                        />
                                    </div>
                                
                                    <div className="form-group mb-3">
                                        <input
                                            name="facebook_profile"
                                            placeholder="Perfil de Facebook"
                                            className="form-control border border-0 border-bottom"
                                            type="text"
                                            defaultValue={store.user.facebookProfile}
                                            onChange={(e) => setFacebook(e.target.value)}
                                        />
                                    </div>
                        
                                    <div className="form-group mb-3">
                                        <input
                                            name="instagram_profile"
                                            placeholder="Perfil de Instagram"
                                            className="form-control border border-0 border-bottom"
                                            type="text"
                                            defaultValue={store.user.instagramProfile}
                                            onChange={(e) => setInstagram(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                                <div className="col-lg-5">
                                    <div className="form-group mb-3">
                                        <input
                                            name="tiktok_profile"
                                            placeholder="Perfil de TikTok"
                                            className="form-control border border-0 border-bottom"
                                            type="text"
                                            defaultValue={store.user.tiktokProfile}
                                            onChange={(e) => setTiktok(e.target.value)}
                                        />
                                    </div>
                            
                                    <div className="form-group mb-3">
                                        <input
                                            name="identity"
                                            placeholder="Identidad"
                                            className="form-control border border-0 border-bottom"
                                            type="text"
                                            defaultValue={store.user.identity}
                                            onChange={(e) => setIdentity(e.target.value)}
                                        />
                                        </div>

                                    <div className="form-group mb-3">
                                        <input
                                            className="form-control-image-uploader"
                                            type="file"
                                            id="logoFile"
                                            accept="image/*"
                                            required={store.user.logo ? false : true}
                                            onChange={(e) => handleLogoUpload(e)}
                                        />
                                    </div>

                                    <div id="pre-uploaded-logo" className="img-fluid">
                                        { newLogoIsLoaded ? 
                                            (<div className="mt-3 d-flex justify-content-center">
                                                <img src={localStorage.newLogo} alt="" className="w-25" />
                                            </div>)
                                        : store.user.logo ?
                                            (<div className="mt-3 d-flex justify-content-center">
                                                <img src={store.user.logo} alt="" className="img-fluid" />
                                            </div>)                                
                                        : null }
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <input
                                            name="main_color"
                                            placeholder="Color 1"
                                            className="form-control border border-0 border-bottom"
                                            type="text"
                                            defaultValue={store.user.mainColor}
                                            onChange={(e) => setMaincolor(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <input
                                            name="secondary_color"
                                            placeholder="Color 2"
                                            className="form-control border border-0 border-bottom"
                                            type="text"
                                            defaultValue={store.user.secondaryColor}
                                            onChange={(e) => setSecondarycolor(e.target.value)}
                                        />
                                    </div>
                                
                                    <div className="form-group mb-3">
                                        <input
                                            name="aux_color"
                                            placeholder="Color 3"
                                            className="form-control border border-0 border-bottom"
                                            type="text"
                                            defaultValue={store.user.auxColor}
                                            onChange={(e) => setAuxcolor(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-1"></div>
                            </form>
                            <div className="d-flex justify-content-center">
                                    <Link  to="/my-profile" target="_blank">
                                        <button
                                            className="btn-get-registered"
                                            onClick={() => {actions.putProfile (
                                                        first_name,
                                                        last_name,
                                                        email,
                                                        contact_data,
                                                        facebook_profile,
                                                        instagram_profile,
                                                        tiktok_profile,
                                                        identity,
                                                        logo,
                                                        main_color,
                                                        secondary_color,
                                                        aux_color
                                                    )
                                                }}
                                        >
                                            Guardar<i className="fa-solid fa-paperclip"></i>{" "}
                                        </button>
                                    </Link>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <button type="reset" className="btn-delete ">
                                        Borrar todo <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
