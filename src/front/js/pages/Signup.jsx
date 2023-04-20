import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../../styles/signup.css";
import signupImg from "../../img/sign-up.jpg";

export const Signup = () => {    
  const navigate = useNavigate();
  const location = useLocation();

  const { store, actions } = useContext(Context);

  const initialValues = {
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
    tos: false,
  };

	//	«validationSchema» es una instancia de la clase Yup.object().shape(), que se utiliza para definir un esquema de validación
	//	de objetos en Yup. Este esquema de validación se define utilizando una serie de métodos de validación de Yup, como .string(),
	//	.required(), .min(), .max(), .email(), entre otros. 
	
	const validationSchema = Yup.object().shape({
		firstName: Yup.string()
		  .required('El nombre es obligatorio.')
		  .min(3, 'El nombre debe ser de al menos 3 caracteres.')
		  .matches(/^[^\s]+(\s+[^\s]+)*$/, 'El nombre no debe contener espacios en blanco.'),
		email: Yup.string()
		  .email('Debe ingresar un email válido.')
		  .required('El email es obligatorio.')
		  .test(
			'valid-extension',
			'El correo electrónico debe tener una extensión de dominio válida.',
			(value) => {
			  if (!value) return false;
			  const extRregex = /\.[A-Za-z]{2,}$/;
			  return extRregex.test(value);
			}
		  ),
		password: Yup.string()
		  .required('La contraseña es obligatoria.')
		  .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
			"La contraseña debe contener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: @, #, $, %, &, !, *"),
		confirmPassword: Yup.string()
		  .required('La confirmación de la contraseña es obligatoria.')
		  .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir.'),
		tos: Yup.boolean()
		  .oneOf([true], 'Debes aceptar los términos y condiciones para poder continuar.'),
	  });

	//	«handleSubmit» —a continuación— es una función que se pasa como prop «onSubmit» al componente Formik —y que, por tanto, se 
	//	ejecuta cuando el usuario envía el formulario. Esta función toma dos argumentos: «values» y «setSubmitting». «values» es un 
	//	objeto que contiene los valores de los campos del formulario. Cada propiedad de dicho objeto se corresponde con un campo 
	//	del formulario y tiene como valor el contenido actual del campo. «setSubmitting» es una función que se utiliza para indicar 
	//	si el formulario está siendo enviado en este momento. Cuando se llama con el valor true, Formik mostrará un indicador de carga
	//	y deshabilitará los botones del formulario. Cuando se llama con el valor false, Formik desactivará el indicador de carga y
	//	volverá a habilitar los botones. Dentro de la función «handleSubmit», se usa setTimeout para simular una solicitud asíncrona
	//	a un servidor. En este caso, se muestra una alerta con los valores del formulario. Luego, se llama a setSubmitting(false) 
	//	para indicar que la solicitud ha terminado y que el formulario está listo para enviar de nuevo. 

	const handleSubmit = async (values, { setSubmitting }) => {
		const { email, password, firstName } = values;
		const createUser = await actions.createUser({
		  email,
		  password,
		  firstName,
		});
		if (createUser) {
		  navigate("/home", { state: { prevPath: location.pathname } })
		}
		setSubmitting(false);
	  };

	return (
		<section id="signup" className="container-fluid m-0">
			<div className="row">
				<div id="signup-left-wrapper" className="col-sm-12 col-lg-6">

					<h1 className="d-flex justify-content-center p-3">Registro</h1>
						{store.errorSignup ? (
							<div className="rounded signup-warning text-white p-3">
								Una cuenta con el email seleccionado ya está creada. Por favor,{" "}
								<Link to="/login">ingresa a tu perfil</Link>.
							</div>
						) : null}

					<Formik
						//	Se pasa el objeto «initialValues» que contiene los valores iniciales de los campos
						//	del formulario como valor del prop homólogo (línea 20)
						initialValues={initialValues}
						//	Se pasa el objeto «validationSchemes» (línea 28) como valor del prop homólogo.
						//	El objeto  «validationSchemes» se crea con el método object() del paquete Yup
						//	y contiene la lógica de validación de los campos del formulario.
						validationSchema={validationSchema}
						//	Al enviarse el formulario, se ejecuta la función handleSubmit (línea 56).
						onSubmit={handleSubmit}
						//	A continuación dos propiedades (booleanas) nativas de Formik.
						//	ValidateOnBlur indica si se deben validar los campos en cada evento de «desenfoque»
						//	Al establecer «validateOnBlur» como «true» y «validateOnChange» como «false» se validará
						//	cada campo cuando se desenfoque del mismo, más no cuando cambie el valor de cada input.
						validateOnBlur={true}
						validateOnChange={false}
					>
						{({ values, isSubmitting }) => (
							
							<Form id="signup-form" className="d-flex flex-column input-group" noValidate>

								{/* Campo del nombre */}

								<div id="user-first-name" className="d-flex flex-row m-3">
									<label className="opacity-50 signup-icon" htmlFor="first-name-input">
										<i className="fa-solid fa-user"></i>
									</label>
									<Field
										id="first-name-input"
										name="firstName"
										type="text"
										className="border-0 border-bottom w-100 ms-3 bg-transparent"
										placeholder="Ingresa tu nombre"
										autoComplete="off"
									/>
								</div>
								<div>
									<ErrorMessage name="firstName" component="div" className="signup-warning" />
								</div>

								{/* Campo del correo electrónico */}
								
								<div id="user-email" className="d-flex m-3">
									<label className="opacity-50 signup-icon" htmlFor="email-input">
										<i className="fa-solid fa-envelope"></i>
									</label>
									<Field
										id="email-input"
										name="email"
										type="email"
										className="border-0 border-bottom w-100 ms-3 bg-transparent"
										placeholder="Ingresa tu correo electrónico"
										autoComplete="email"
									/>
								</div>
								<div>
									<ErrorMessage name="email" component="div" className="signup-warning" />
								</div>
							
								{/* Campo de la contraseña */}

								<div id="user-pwd" className="d-flex m-3 bg-transparent">
									<label className="opacity-50 signup-icon" htmlFor="pwd-input">
										<i className="fa-solid fa-lock"></i>
									</label>
									<Field
										id="pwd-input"
										name="password"
										type="password"
										className="border-0 border-bottom w-100 ms-3 bg-transparent"
										placeholder="Ingresa tu contraseña"
										autoComplete="new-password"
									/>
								</div>
								<div>
									<ErrorMessage name="password" component="div" className="signup-warning" />
									<ErrorMessage name="passwordType" component="div" className="signup-warning" />
								</div>
							
								{/* Campo de confirmación de contraseña */}

								<div id="user-pwd-check" className="d-flex m-3 bg-transparent">
								<label className="opacity-50 signup-icon" htmlFor="pwd-check-input">
									<i className="fa-solid fa-lock"></i>
								</label>
								<Field
									id="pwd-check-input"
									name="confirmPassword"
									type="password"
									className="border-0 border-bottom w-100 ms-3 bg-transparent"
									placeholder="Confirma tu contraseña"
									autoComplete="new-password"
								/>
								</div>
								<div>
									<ErrorMessage name="confirmPassword" component="div" className="signup-warning" />
									<ErrorMessage name="passwordMatch" component="div" className="signup-warning" />
								</div>

								{/* Campo de aceptación de términos y condiciones */}

								<div id="tos-check" className="d-flex m-3 bg-transparent">
								<Field id="tos-check" type="checkbox" name="tos" />
									<label className="opacity-50 signup-icon ms-3" htmlFor="tos-check-input">
										Acepto los
											<Link className="secondary-link" to="/terminos-y-condiciones" target="_blank">
												{" "}términos y condiciones{" "} 
											<i class="fas fa-external-link-alt"></i>
											</Link> de GeekPost.
									</label>
								</div>
								<div>
									<ErrorMessage name="tos" component="div" className="signup-warning" />
								</div>
								
								<div id="submit-btn" className="d-flex justify-content-center m-3">
									<button type="submit" className="btn-signup" disabled={isSubmitting}>
										Registrarse
									</button>
								</div>
							
							</Form>
						)}
					</Formik>
				</div>
			
				<div id="signup-right-wrapper" className="col-sm-12 col-lg-6"></div>
			</div>
		</section>
	)
}

// Create Amazing Password Forms
// https://www.chromium.org/developers/design-documents/create-amazing-password-forms/
