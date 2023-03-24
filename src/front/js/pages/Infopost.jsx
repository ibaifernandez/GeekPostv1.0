import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../../front/styles/infopost.css";
import { Link, useNavigate } from "react-router-dom";

export const Infopost = () => {
  const { store, actions } = useContext(Context);
  const [image, setImage] = useState(" ");
  const [identity, setIdentity] = useState(" ");
  const [main_text, setMain_text] = useState("");
  const [secondary_text, setSecondary_text] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [contact_details, setContact_details] = useState("");
  const [logo, setLogo] = useState("");
  const [formality, setFormality] = useState(" ");
  const [main_color, setMain_color] = useState(" ");
  const [secondary_color, setSecondary_color] = useState("");
  const [aux_color, setAux_color] = useState("");
  const navigate = useNavigate();

  return (
    <div className="main todo">
      <div className="container cont">
        <form method="POST" className="appointment-form" id="appointment-form">
          <h2 className="tituloh2">Completar la siguiente informacion</h2>

          <div className="form-group-1">
            <div className="form-group d-flex justify-content-around">
              <label htmlFor="formFileSm" className="form-label labelcss">
                Subir foto
                <input
                    className="form-control form-control-sm"
                    id="image"
                    onChange={(e) => setImage(e.target.value)}
                    //  value={image}
                    type="file"
                />
              </label>
              <button
                  type="button"
                  className=" ayuda btn btn-outline-secondary h-25 mt-4 ms-2 rounded-circle border border-dark-subtle "
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Subir la foto que quieras publicar en formato jpg">
                    <i className="fa-solid fa-question"></i>
              </button>
            </div>
            <div className="form-group d-flex justify-content-around">
              <input
              type="text"
              name="identity"
              id="identity"
              onChange={(e) => setIdentity(e.target.value)}
              value={identity}
              placeholder="Identidad"
              />
              <button
                  type="button"
                  className=" ayuda btn btn-outline-secondary h-25 mt-4 ms-2 rounded-circle border border-dark-subtle "
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Escribe el nombre destacado de tu marca/emprendimiento">
                    <i className="fa-solid fa-question"></i>
              </button>
          </div>

          <div className="form-group d-flex justify-content-around">
            <input
              type="text"
              name="main_text"
              id="main_text"
              onChange={(e) => setMain_text(e.target.value)}
              value={main_text}
              placeholder="Texto principal (opcional)"
            />
               <button
                  type="button"
                  className=" ayuda btn btn-outline-secondary h-25 mt-4 ms-2 rounded-circle border border-dark-subtle "
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Escribe un titulo que quieras que aparezca en la publicacion">
                    <i className="fa-solid fa-question"></i>
              </button>
           </div>

           <div className="form-group d-flex justify-content-around"> 
            <input
              type="text"
              name="secondary_text"
              id="secondary_text"
              onChange={(e) => setSecondary_text(e.target.value)}
              value={secondary_text}
              placeholder="Texto secundario (opcional)"
            />
                    <button
                  type="button"
                  className=" ayuda btn btn-outline-secondary h-25 mt-4 ms-2 rounded-circle border border-dark-subtle "
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Escribe un texto menos destacado">
                    <i className="fa-solid fa-question"></i>
              </button>
          </div>

          <div className="form-group d-flex justify-content-around"> 
            <input
              type="text"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="Oferta (opcional)"
            />
                  <button
                  type="button"
                  className=" ayuda btn btn-outline-secondary h-25 mt-4 ms-2 rounded-circle border border-dark-subtle "
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Escribe un precio/promocion/oferta">
                    <i className="fa-solid fa-question"></i>
              </button>
           </div>

           <div className="form-group d-flex justify-content-around"> 
            <input
              type="text"
              name="contact"
              id="contact"
              onChange={(e) => setContact_details(e.target.value)}
              value={contact_details}
              placeholder="Dato de contacto (opcional)"
            />
              <button
                  type="button"
                  className=" ayuda btn btn-outline-secondary h-25 mt-4 ms-2 rounded-circle border border-dark-subtle "
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Escribe un telefo/email/pagina web o algun dato que quieras que aparezca.">
                    <i className="fa-solid fa-question"></i>
              </button>
            </div>

           
            <div className="form-group">
              <label htmlFor="formFileSm" className="form-label labelcss">
                Subir logo
              </label>
              <input
                className="form-control form-control-sm"
                id="Logo"
                onChange={(e) => setLogo(e.target.value)}
                value={logo}
                type="file"
              />
             
            
         
          </div>
            <div className="select-list seleccionar">
              <label
                 htmlFor="confirm_type"
                 className="form-label labelcss"
                 required
              >
                Que tan formal queres que sea tu publicacion
              </label>
              <select
                name="confirm_type"
                onChange={(e) => setFormality(e.target.value)}
                value={formality}
                id="formality"
              >
                <option selected>Elegir</option>
                <option value="Muy formal">Muy formal</option>
                <option value="Mas o menos formal">Mas o menos formal</option>
                <option value="Informal">Informal</option>
              </select>
            </div>

            <h3 className="tituloh3">
              ELIGE 3 COLORES QUE SE IDENTIFIQUEN CON TU MARCA:
            </h3>
            <div className="d-flex justify-content-around">
              <div className="">
                <label htmlFor="color" className="ms-2 labelcss ">
                  Color 1:{" "}
                </label>
                <input
                  type="color"
                  name="color"
                  id="color"
                  className="w-50 ms-3 elegir "
                  onChange={(e) => setMain_color(e.target.value)}
                  value={main_color}
                
                />
                {/* <button
                  className="ms-3 rounded-circle"
                  onClick={(e) => setMain_color(e.target.value)}
                  value={main_color}
                >
                  <i class="fa-sharp fa-solid fa-check"></i>
                </button> */}
              </div>
              <div>
              <label htmlFor="color" className="ms-2 labelcss ">
                  Color 1:{" "}
                </label>
                <input
                  type="color"
                  name="color"
                  id="color"
                  className="w-50 ms-3 elegir "
                  onChange={(e) => setSecondary_color(e.target.value)}
                  value={secondary_color}
                
                />

                   </div>
                {/* <button
                  className="ms-3 rounded-circle"
                  onClick={(e) => setSecondary_color(e.target.value)}
                  value={secondary_color}
                >
                  <i class="fa-sharp fa-solid fa-check"></i>
                </button> */}
              
              
              <div>
              <label htmlFor="color" className="ms-2 labelcss ">
                  Color 1:{" "}
                </label>
                <input
                  type="color"
                  name="color"
                  id="color"
                  className="w-50 ms-3 elegir "
                  onChange={(e) => setAux_color(e.target.value)}
                  value={aux_color}
                
                />


{/* 
                <button
                    className="ms-3 rounded-circle"
                    onClick={(e) => setAux_color(e.target.value)}
                    value={aux_color}>
                  <i class="fa-sharp fa-solid fa-check"></i>
                </button> */}
              </div>
            </div>
          </div>

          <div className="form-submit d-flex justify-content-center mt-5 ">
            <button className="crear">CREA TU DISEÑO</button>
          </div>
        </form>
      </div>
    </div>
  );
};
