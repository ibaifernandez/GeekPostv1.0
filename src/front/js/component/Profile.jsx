import React from "react";
import { useEffect, useContext, useState } from "react";
import "../../styles/composition.css";
import roundedPhoto1 from "../../img/cta-bg.jpg";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  const [ firstname, setFirstname ] = useState(store.user.first_name);
  const [ lastname, setLastname ] = useState(store.user.first_name);
  const [ email, setEmail ] = useState(store.user.first_name);
  const [ contactdata, setContactdata ] = useState(store.user.first_name);
  const [ facebook, setFacebook ] = useState(store.user.first_name);
  const [ instagram, setInstagram ] = useState(store.user.first_name);
  const [ tiktok, setTiktok ] = useState(store.user.first_name);
  const [ identity, setIdentity ] = useState(store.user.first_name);
  const [ maincolor, setMaincolor ] = useState(store.user.first_name);
  const [ secondarycolor, setSecondarycolor ] = useState(store.user.first_name);
  const [ auxcolor, setAuxcolor ] = useState(store.user.first_name);


  useEffect(() => {
    actions.getUserDetails();
  }, []);


  return (
    <div className=" w-50 d-flex justify-content-center ContenedorProfile">
      <img
        className="fotoAvatar "
        src="https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg"
      />
      <h2 className="TituloProfile">Mi Perfil</h2>
      <form
        className="well form-horizontal"
        action=" "
        method="post"
        id="contact_form"
      >
        <fieldset className="formularioProfile">
          <div className="form-group ">
            <label className="col-md-4 control-label">Primer Nombre</label>
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
                  onChange={(e)=> setFirstname(e.target.value) }
                />
              </div>
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
                  onChange={(e)=> setLastname(e.target.value) }
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
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label">Dato de contacto</label>
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
                  onChange={(e)=> setContactdata(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label">Perfil de Facebook</label>
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
                  onChange={(e)=> setFacebook(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label">Perfil de Instagram</label>
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
                  onChange={(e)=> setInstagram(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label">Perfil de TikTok</label>
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
                  onChange={(e)=> setTiktok(e.target.value)}
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
                  onChange={(e)=> setIdentity(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group d-flex justify-content-around">
            <label htmlFor="formFileSm" className="form-label labelcss">
              Logo
              <img src={store.user.logo}/>
            </label>
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
                  onChange={(e)=> setMaincolor(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label">Secondary Color</label>
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
                  onChange={(e)=> setSecondarycolor(e.target.value)}
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
                  onChange={(e)=> setAuxcolor(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label"></label>
            <div className="col-md-10">
              <button type="submit" className="btn btn-warning">
                Send <span className="glyphicon glyphicon-send"></span>
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <a href="#signup" className="btn-get-registered">
              Crear 🖌
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <button type="reset" className="btn-delete ">
              Borrar todo <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
