import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
import foto1 from "../../../front/img/foto1.jpg";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState(" ");
  const [firstName, setFirstname] = useState(" ");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName==="" || email === "" || password === "") {
      store.errorLogin = "Llene todos los campos"
    } else {
      const createUser = await actions.createUser({
        email,
        password,
        firstName,
      });
      if (createUser) {
        navigate("/home");
      }
    }
  };
  

  return (
    <div className="d-flex justify-content-around">
      <div>
        <h1 className=" d-flex flex-row mt-5 ms-3 p-3"> Sign Up</h1>
        <form className="d-flex flex-column m- ms-3">
          <div className=" col-12 d-flex flex-row m-3 ms-3 ">
            <label
              className="opacity-50 icono"
              htmlFor="inlineFormInputGroupName"
            >
              <i className="fa-solid fa-user"></i>
            </label>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                className="border border-0 border-bottom w-100"
                id="inlineFormInputGroupName"
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Ingrese su nombre"
                required
              />
            </div>
          </div>

          <div className="   d-flex flex-row m-3 ms-3">
            <label
              className="opacity-50 icono"
              htmlFor="inlineFormInputGroupEmail"
            >
              <i className="fa-regular fa-envelope"></i>
            </label>
            <div className="input-group">
              <input
                type="email"
                className="border border-0 border-bottom w-100"
                id="inlineFormInputGroupEmail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Ingrese su correo"
                required
              />
            </div>
          </div>

          <div className="  d-flex flex-row m-3 ms-3">
            <label
              className="opacity-50 icono"
              htmlFor="inlineFormInputGroupPassword"
            >
              <i className="fa-solid fa-lock"></i>
            </label>
            <div className="input-group">
              <input
                type="password"
                className="border border-0 border-bottom w-100"
                id="inlineFormInputGroupPassword"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Ingrese un password"
                required
              />
            </div>
          </div>

          <div className="  d-flex flex-row m-3 ms-3">
            <label
              className="opacity-50 icono"
              htmlFor="inlineFormInputGroupPassword2"
            >
              <i className="fa-solid fa-lock "></i>
            </label>
            <div className="input-group">
              <input
                type="password"
                className="border border-0 border-bottom w-100 "
                id="inlineFormInputGroupPassword3"
                
                placeholder="  Confirme su password"
              />
            </div>
          </div>

          <div className="  d-flex flex-row m-3 ms-3">
            <div className="form-check">
              <label className="form-check-label" htmlFor="inlineFormCheck">
                <input
                  className="form-check-input mt-3"
                  type="checkbox"
                  id="inlineFormCheck"
                  required
                 
                />
                Estas de acuerdo con los{" "}
              
                <button type="button" className="btn btn-link bg-white mb-2 fs-6" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Terminos y condiciones
                  </button>


                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5 " id="staticBackdropLabel">Terminos y condiciones</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                 

 Terminos y Condiciones de uso <br />
 
 Es requisito necesario para la adquisición de los productos que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios así como la compra de nuestros productos implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los productos  que son ofrecidos por nuestro sitio web pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un producto, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.
 
 El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en cualquier momento, en caso de que se haya registrado y que sea necesario para la compra de alguno de nuestros productos. d no asume la responsabilidad en caso de que entregue dicha clave a terceros.
 
 Todas las compras y transacciones que se lleven a cabo por medio de este sitio web, están sujetas a un proceso de confirmación y verificación, el cual podría incluir la verificación del stock y disponibilidad de producto, validación de la forma de pago, validación de la factura (en caso de existir) y el cumplimiento de las condiciones requeridas por el medio de pago seleccionado. En algunos casos puede que se requiera una verificación por medio de correo electrónico.
 
 Los precios de los productos ofrecidos en esta Tienda Online es válido solamente en las compras realizadas en este sitio web. <br />
 
 LICENCIA <br />
 
 GeekPost  a través de su sitio web concede una licencia para que los usuarios utilicen  los productos que son vendidos en este sitio web de acuerdo a los Términos y Condiciones que se describen en este documento. <br />
 
 USO NO AUTORIZADO <br />
 
 En caso de que aplique (para venta de software, templetes, u otro producto de diseño y programación) usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún tipo. <br />
 
 PROPIEDAD <br />
 
 Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los productos son propiedad  de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros productos se proporcionan  sin ningún tipo de garantía, expresa o implícita. En ningún esta compañía será  responsables de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros productos. <br />
 
 POLÍTICA DE REEMBOLSO Y GARANTÍA <br />
 
 En el caso de productos que sean  mercancías irrevocables no-tangibles, no realizamos reembolsos después de que se envíe el producto, usted tiene la responsabilidad de entender antes de comprarlo.  Le pedimos que lea cuidadosamente antes de comprarlo. Hacemos solamente excepciones con esta regla cuando la descripción no se ajusta al producto. Hay algunos productos que pudieran tener garantía y posibilidad de reembolso pero este será especificado al comprar el producto. En tales casos la garantía solo cubrirá fallas de fábrica y sólo se hará efectiva cuando el producto se haya usado correctamente. La garantía no cubre averías o daños ocasionados por uso indebido. Los términos de la garantía están asociados a fallas de fabricación y funcionamiento en condiciones normales de los productos y sólo se harán efectivos estos términos si el equipo ha sido usado correctamente. Esto incluye: <br />
 
 – De acuerdo a las especificaciones técnicas indicadas para cada producto. <br />
 – En condiciones ambientales acorde con las especificaciones indicadas por el fabricante. <br />
 – En uso específico para la función con que fue diseñado de fábrica. <br />
 – En condiciones de operación eléctricas acorde con las especificaciones y tolerancias indicadas. <br />
 
 COMPROBACIÓN ANTIFRAUDE <br />
 
 La compra del cliente puede ser aplazada para la comprobación antifraude. También puede ser suspendida por más tiempo para una investigación más rigurosa, para evitar transacciones fraudulentas. <br />
 
 PRIVACIDAD <br />
 
 Este d garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Los datos ingresados por usuario o en el caso de requerir una validación de los pedidos no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una orden judicial o requerimientos legales. <br />
 
 La suscripción a boletines de correos electrónicos publicitarios es voluntaria y podría ser seleccionada al momento de crear su cuenta.
 
 d reserva los derechos de cambiar o de modificar estos términos sin previo aviso. <br />
                        </div>
                      <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                       
                        </div>
                        </div>
                        </div>
                        </div>
              </label>
            </div>
          </div>
          {store.errorLogin
          ? <div className="text-danger"><p>{store.errorLogin}</p></div> 
          : null
          }
          <div className="col-12 m-3 ms-3">     
            <button
              type="button"
              className="btn-get-registered"
              onClick={handleSubmit}
            >
              Regístrate 🖋
            </button>

            <Link to="/login" className=" text-secondary text-decoration-underline ps-5">
                Ya estoy registrado
            </Link>
          </div>
        </form>
      </div>
      <div>
        <img className="col-8  mt-5 me-5 w-100 rounded" src={foto1} alt="" />
      </div>
    </div>
  );
};
