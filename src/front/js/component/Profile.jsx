import React from "react";
import "../../styles/profile.css";
import { useEffect, useContext, useState } from "react";
import roundedPhoto1 from "../../img/cta-bg.jpg";
import { Context } from "../store/appContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

export const Profile = () => {


  const { store, actions } = useContext(Context);
  const [first_name, setFirstname] = useState(store.user.first_name);
  const [last_name, setLastname] = useState(store.user.last_name);
  const [email, setEmail] = useState(store.user.email);
  const [contact_data, setContactdata] = useState(store.user.contact_data);
  const [facebook_profile, setFacebook] = useState(store.user.facebook_profile);
  const [instagram_profile, setInstagram] = useState(store.user.instagram_profile);
  const [tiktok_profile, setTiktok] = useState(store.user.tiktok_profile);
  const [identity, setIdentity] = useState(store.user.identity);
  const [main_color, setMaincolor] = useState(store.user.main_color);
  const [secondary_color, setSecondarycolor] = useState(store.user.secondary_color);
  const [aux_color, setAuxcolor] = useState(store.user.aux_color);
  const [logo, setLogo] = useState("");
  const [newLogoIsLoaded, setNewLogoIsLoaded] = useState(false);

  useEffect(() => {
    actions.getUserDetails();
    setLogo(store.user.logo);
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
    <section id="home-process" className="process section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Mi Perfil</h2>
        </div>
        <div className="ContenedorProfileG d-flex flex-row overflow-scroll p-3 m-3">
          <div className=" w-100  ContenedorProfile">
            <img
              className="fotoAvatar "
              src="https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg"
            />

            <form
              className="well form-horizontal"
              action=" "
              method="post"
              id="contact_form"
            >
              <fieldset className="formularioProfile">
                <div className="form-group ">
                  <label className="col-md-4 control-label">
                    Primer Nombre
                  </label>
                  <div className="col-md-10 inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-user"></i>
                      </span>
                      <input
                        name="first_name"
                        placeholder="Primer Nombre"
                        className="form-control border border-0 border-bottom w-100"
                        type="text"
                        defaultValue={store.user.first_name}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">Apellido</label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-user"></i>
                        </span>
                        <input
                          name="last_name"
                          placeholder="Apellido"
                          className="form-control border border-0 border-bottom"
                          type="text"
                          defaultValue={store.user.last_name}
                          onChange={(e) => setLastname(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">E-Mail</label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-envelope"></i>
                        </span>
                        <input
                          name="email"
                          placeholder="E-Mail "
                          className="form-control border border-0 border-bottom"
                          type="text"
                          defaultValue={store.user.email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">
                      Dato de contacto
                    </label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-earphone"></i>
                        </span>
                        <input
                          name="contact_data"
                          placeholder="Dato de contacto"
                          className="form-control border border-0 border-bottom"
                          type="text"
                          defaultValue={store.user.contact_data}
                          onChange={(e) => setContactdata(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">
                      Perfil de Facebook
                    </label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-home"></i>
                        </span>
                        <input
                          name="facebook_profile"
                          placeholder="Perfil de Facebook"
                          className="form-control border border-0 border-bottom"
                          type="text"
                          defaultValue={store.user.facebook_profile}
                          onChange={(e) => setFacebook(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">
                      Perfil de Instagram
                    </label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-home"></i>
                        </span>
                        <input
                          name="instagram_profile"
                          placeholder="Perfil de Instagram"
                          className="form-control border border-0 border-bottom"
                          type="text"
                          defaultValue={store.user.instagram_profile}
                          onChange={(e) => setInstagram(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">
                      Perfil de TikTok
                    </label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-home"></i>
                        </span>
                        <input
                          name="tiktok_profile"
                          placeholder="Perfil de TikTok"
                          className="form-control border border-0 border-bottom"
                          type="text"
                          defaultValue={store.user.tiktok_profile}
                          onChange={(e) => setTiktok(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">Identidad</label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-home"></i>
                        </span>
                        <input
                          name="identity"
                          placeholder="Identidad"
                          className="form-control border border-0 border-bottom"
                          type="text"
                          defaultValue={store.user.identity}
                          onChange={(e) => setIdentity(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  
                  

                    <div className="form-group ">
                      <div className="form-group">
                        <label
                          htmlFor="formFileSm"
                          className=" form-label labelcss text-start"
                        >
                          Subir logo
                          </label>
                          <div id="logo-uploader-input" className="d-flex align-middle justify-content-between ">
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
                                        <img src={localStorage.newLogo} alt="" className="img-fluid" />
                                    </div>)
                                : store.user.logo ?
                                    (<div className="mt-3 d-flex justify-content-center">
                                       <img src={logo} alt="" className="img-fluid" />
                                    </div>)                                
                                : null }
                           </div>
                        
                        
                    </div>
                    </div>
               

                  <div className="form-group">
                    <label className="col-md-4 control-label">Main Color</label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-home"></i>
                        </span>
                        <input
                          name="main_color"
                          placeholder="Color 1"
                          className="form-control border border-0 border-bottom"
                          type="text"
                          defaultValue={store.user.main_color}
                          onChange={(e) => setMaincolor(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">
                      Secondary Color
                    </label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-home"></i>
                        </span>
                        <input
                          name="secondary_color"
                          placeholder="Color 2"
                          className="form-control border border-0 border-bottom"
                          type="text"
                          defaultValue={store.user.secondary_color}
                          onChange={(e) => setSecondarycolor(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-4 control-label">Color 3</label>
                    <div className="col-md-10 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-home"></i>
                        </span>
                        <input
                          name="aux_color"
                          placeholder="Color 3"
                          className="form-control border border-0 border-bottom"
                          type="text"
                          defaultValue={store.user.aux_color}
                          onChange={(e) => setAuxcolor(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                  <Link  to="/my-profile" target="_blank">
                    <button
                      className="btn-get-registered"
                      onClick={() => {
                        actions.putProfile(
                         
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
                          aux_color,
                        );
                      }}
                    >
                      {" "}
                      Guardar Info <i className="fa-solid fa-paperclip"></i>{" "}
                    </button>
                    </Link>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button type="reset" className="btn-delete ">
                      Borrar todo <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
