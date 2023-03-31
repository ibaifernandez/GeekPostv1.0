import React from "react";
import "../../styles/profile.css";
import roundedPhoto1 from "../../img/cta-bg.jpg";

export const Profile = () => {


    return(
      <div className="ContenedorProfileG d-flex flex-row overflow-scroll p-3 m-3">
        <div className=" w-100  ContenedorProfile">

        <img className="fotoAvatar " src="https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg"/>
        <h2 className="TituloProfile">Mi Perfil</h2>
        <form className="well form-horizontal" action=" " method="post"  id="contact_form">
        <fieldset className="formularioProfile">

    <div className="form-group ">
        <label className="col-md-10 control-label">Primer Nombre</label>  
        <div className="col-md-10 inputGroupContainer">
        <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
        <input  name="first_name" placeholder="Primer Nombre" className=" InputProfile border border-0 border-bottom w-100"  type="text"/>
        </div>
      </div>
    </div>
    

    <div className="form-group">
        <label className="col-md-4 control-label" >Apellido</label> 
        <div className="col-md-10 inputGroupContainer">
        <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
        <input name="last_name" placeholder="Apellido" className=" InputProfile border border-0 border-bottom"  type="text"/>
        </div>
        </div>
    </div>
    
  
    <div className="form-group">
        <label className="col-md-4 control-label">E-Mail</label>  
        <div className="col-md-10 inputGroupContainer">
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
        <input name="email" placeholder="E-Mail " className=" InputProfile border border-0 border-bottom"  type="text"/>
        </div>
        </div>
    </div>
    

    <div className="form-group">
        <label className="col-md-4 control-label">Dato de contacto</label>  
        <div className="col-md-10 inputGroupContainer">
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
        <input name="contact_data" placeholder="Dato de contacto" className=" InputProfile border border-0 border-bottom" type="text"/>
        </div>
        </div>
    </div>
    

    <div className="form-group">
        <label className="col-md-4 control-label">Perfil de Facebbok</label>  
        <div className="col-md-10 inputGroupContainer">
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
        <input name="facebook_profile" placeholder="Perfil de Facebook" className="InputProfile border border-0 border-bottom" type="text"/>
        </div>
        </div>
    </div>
    

    <div className="form-group">
        <label className="col-md-4 control-label">Perfil de Instagram</label>  
        <div className="col-md-10 inputGroupContainer">
        <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
        <input name="instagram_profile" placeholder="Perfil de Instagram" className="InputProfile border border-0 border-bottom"  type="text"/>
        </div>
        </div>
    </div>


    <div className="form-group">
        <label className="col-md-4 control-label">Perfil de TikTok</label>  
            <div className="col-md-10 inputGroupContainer">
            <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
            <input name="tiktok_profile" placeholder="Perfil de TikTok" className="InputProfile border border-0 border-bottom"  type="text"/>
            </div>
        </div>
      </div>
      
  
    <div className="form-group">
            <label className="col-md-4 control-label">Identidad</label>  
            <div className="col-md-10 inputGroupContainer">
            <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
            <input name="identity" placeholder="Identidad" className="InputProfile border border-0 border-bottom"  type="text"/>
            </div>
            </div>
        </div>
    
      <div className="form-group d-flex justify-content-around">
        <label htmlFor="formFileSm" className="form-label labelcss mt-4">
          Logo
          <input
              className="form-control form-control-sm InputArchivos mb-4"
              // id="image"
              // onChange={(e) => setImage(e.target.value)}
              //   value={image}
                type="file"
          />
        </label>

      </div>

      <div className="form-group">
        <label className="col-md-4 control-label">Color 1</label>  
          <div className="col-md-10 inputGroupContainer">
          <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
        <input name="main_color" placeholder="Color 1" className="InputProfile border border-0 border-bottom"  type="text"/>
          </div>
        </div>
      </div>
      
      <div className="form-group">
        <label className="col-md-4 control-label">Color 2</label>  
          <div className="col-md-10 inputGroupContainer">
          <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
        <input name="secondary_color" placeholder="Color 2" className="InputProfile border border-0 border-bottom"  type="text"/>
          </div>
        </div>
      </div>
      
      <div className="form-group">
        <label className="col-md-4 control-label">Color 3</label>  
          <div className="col-md-10 inputGroupContainer">
          <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-home"></i></span>
        <input name="aux_color" placeholder="Color 3" className="InputProfile border border-0 border-bottom"  type="text"/>
          </div>
        </div>
      </div>

    
  
  
  
    
    <div className="d-flex justify-content-center BotonP1"><a href="#signup" className="btn-get-registered">Actualizar <i className="fa-solid fa-paperclip"></i></a></div>
            <div className="d-flex justify-content-center">
            <button type="reset" className="btn-delete BotonP1"> 
                Borrar todo <i className="fa-regular fa-trash-can"></i>
            </button>
            </div>
     
    </fieldset>


    </form>
    </div>
    </div>    
    )
};