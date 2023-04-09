import React from "react";
import "../../styles/profile.css";
import { useEffect, useContext, useState } from "react";
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
    <div className="ContenedorProfileG d-flex flex-row overflow-scroll p-3 m-3">
    <div className=" w-100  ContenedorProfile">
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
          <div className="form-group">
              <label htmlFor="formFileSm" className=" form-label labelcss">
                Subir logo
              </label>
              <input
                className="form-control form-control-sm inputLogo "
                id="Logo"
                onChange={(e) => setLogo(e.target.value)}
              //  value={logo}
                type="file"
              />
          </div>



            <label htmlFor="formFileSm" className="form-label labelcss">
              <img src="data:image/png;base64,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" style={{width:50}} className="ms-4 mt-4 "/>
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

          {/* <div className="form-group">
            <label className="col-md-4 control-label"></label>
            <div className="col-md-10">
              <button type="submit" className="btn btn-warning">
                Send <span className="glyphicon glyphicon-send"></span>
              </button>
            </div>
          </div> */}

          <div className="d-flex justify-content-center">
          
          

            <button 
                className="btn-get-registered"
                onClick={() => {
                  actions.putProfile( firstname,lastname,contactdata,facebook,instagram,tiktok,identity,logo,maincolor,secondarycolor,auxcolor);
                    }}>  Guardar Info <i class="fa-solid fa-paperclip"></i> </button>

            </div>

          <div className="d-flex justify-content-center">
            <button type="reset" className="btn-delete ">
              Borrar todo <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
    </div>
  );
};
