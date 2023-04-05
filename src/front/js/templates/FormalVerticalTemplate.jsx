import React, { useContext } from "react";
import "../../styles/templates/formal-vertical-template.css";
import { Context } from "../store/appContext";



export const FormalVerticalTemplate = () => {
  
  const { store } = useContext(Context);
  
  return (
  <>  
    <div className="container-fluid CuadroQueContieneS">
      <div className=" CuadradoBlancoS">  
        <div className="CuadradoExteriorS">
        <img className="logoPFFS" src={store.infoPost.logo} alt=""/>
        <div className="border-bottom divTextoPrincipalS">
        <h3  className="TextoPrincipalS text-decoration-underline">{store.infoPost.main_text}"Texto Principal"</h3>
        </div>
        <h5 className="TextoSecundarioS">{store.infoPost.secondary_text}"Texto Secundario"</h5>
        <div className="rounded-circle circuloS overflow-hidden" style={{backgroundColor:"{store.infoPost.main_color}"}}></div>
        <div className="CuadradoBordeS border border-5" style={{backgroundColor:"{store.infoPost.aux_color}"}}></div>
        <div className="CuadradoColor2S" style={{backgroundColor:"{store.infoPost.secondary_color}"}}></div>
        <img src="https://cnnespanol.cnn.com/wp-content/uploads/2023/02/230217101303-deportes-diana-flores-football-full-169.jpg?quality=100&strip=info&w=780&h=438&crop=1" alt="" className="ImagenCargadaS shadow-lg p-3 mb-5 bg-body-tertiary rounded"/>
        <div className="ofertaS p-2 border border-light-subtle ps-5 pt-3"><h4>{store.infoPost.price}"Oferta"</h4></div>
        <h3 className="TextoPrincipalbS">{store.infoPost.identity} "Identidad"</h3>
        <div className="Cuadricula1S" style={{backgroundColor:"{store.infoPost.secondary_color}"}}></div>
        <div className="Cuadricula2S" style={{backgroundColor:"{store.infoPost.secondary_color}"}}></div>
    </div>
        <div className="recorte1S"></div>
        <div  className="recorte2S"></div>
    </div>
    </div>

    </>
    )
}
