import React from "react";
import "../../styles/profile.css";
import roundedPhoto1 from "../../img/cta-bg.jpg";

export const profile = () => {


    return(
        <div class=" w-50 d-flex justify-content-center ContenedorProfile">

        <img class="fotoAvatar " src="https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg"/>
        <h2 class="TituloProfile">Mi Perfil</h2>
        <form class="well form-horizontal" action=" " method="post"  id="contact_form">
        <fieldset class="formularioProfile">

    <div class="form-group ">
        <label class="col-md-4 control-label">Primer Nombre</label>  
        <div class="col-md-10 inputGroupContainer">
        <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input  name="first_name" placeholder="Primer Nombre" class="form-control border border-0 border-bottom w-100"  type="text"/>
        </div>
      </div>
    </div>
    

    <div class="form-group">
        <label class="col-md-4 control-label" >Apellido</label> 
        <div class="col-md-10 inputGroupContainer">
        <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input name="last_name" placeholder="Apellido" class="form-control border border-0 border-bottom"  type="text"/>
        </div>
        </div>
    </div>
    
  
    <div class="form-group">
        <label class="col-md-4 control-label">E-Mail</label>  
        <div class="col-md-10 inputGroupContainer">
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
        <input name="email" placeholder="E-Mail " class="form-control border border-0 border-bottom"  type="text"/>
        </div>
        </div>
    </div>
    

    <div class="form-group">
        <label class="col-md-4 control-label">Dato de contacto</label>  
        <div class="col-md-10 inputGroupContainer">
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
        <input name="contact_data" placeholder="Dato de contacto" class="form-control border border-0 border-bottom" type="text"/>
        </div>
        </div>
    </div>
    

    <div class="form-group">
        <label class="col-md-4 control-label">Perfil de Facebbok</label>  
        <div class="col-md-10 inputGroupContainer">
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
        <input name="facebook_profile" placeholder="Perfil de Facebook" class="form-control border border-0 border-bottom" type="text"/>
        </div>
        </div>
    </div>
    

    <div class="form-group">
        <label class="col-md-4 control-label">Perfil de Instagram</label>  
        <div class="col-md-10 inputGroupContainer">
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
        <input name="instagram_profile" placeholder="Perfil de Instagram" class="form-control border border-0 border-bottom"  type="text"/>
        </div>
        </div>
    </div>


    <div class="form-group">
        <label class="col-md-4 control-label">Perfil de TikTok</label>  
            <div class="col-md-10 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
            <input name="tiktok_profile" placeholder="Perfil de TikTok" class="form-control border border-0 border-bottom"  type="text"/>
            </div>
        </div>
      </div>
      
  
    <div class="form-group">
            <label class="col-md-4 control-label">Identidad</label>  
            <div class="col-md-10 inputGroupContainer">
            <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
            <input name="identity" placeholder="Identidad" class="form-control border border-0 border-bottom"  type="text"/>
            </div>
            </div>
        </div>
    
      <div className="form-group d-flex justify-content-around">
        <label htmlFor="formFileSm" className="form-label labelcss">
          Logo
          <input
              className="form-control form-control-sm"
              id="image"
              onChange={(e) => setImage(e.target.value)}
                value={image}
              type="file"
          />
        </label>

      </div>

      <div class="form-group">
        <label class="col-md-4 control-label">Color 1</label>  
          <div class="col-md-10 inputGroupContainer">
          <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
        <input name="main_color" placeholder="Color 1" class="form-control border border-0 border-bottom"  type="text"/>
          </div>
        </div>
      </div>
      
      <div class="form-group">
        <label class="col-md-4 control-label">Color 2</label>  
          <div class="col-md-10 inputGroupContainer">
          <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
        <input name="secondary_color" placeholder="Color 2" class="form-control border border-0 border-bottom"  type="text"/>
          </div>
        </div>
      </div>
      
      <div class="form-group">
        <label class="col-md-4 control-label">Color 3</label>  
          <div class="col-md-10 inputGroupContainer">
          <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
        <input name="aux_color" placeholder="Color 3" class="form-control border border-0 border-bottom"  type="text"/>
          </div>
        </div>
      </div>

    
  
  
    <div class="form-group">
        <label class="col-md-4 control-label"></label>
        <div class="col-md-10">
        <button type="submit" class="btn btn-warning" >Send <span class="glyphicon glyphicon-send"></span></button>
        </div>
    </div>
    
    <div className="d-flex justify-content-center"><a href="#signup" className="btn-get-registered">Crear 🖌</a></div>
            <div className="d-flex justify-content-center">
            <button type="reset" className="btn-delete "> 
                Borrar todo <i class="fa-regular fa-trash-can"></i>
            </button>
            </div>

    </fieldset>


    </form>
    </div>
        
    )
};