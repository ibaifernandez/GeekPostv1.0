import React, { useContext } from "react"
import { HomeProcess } from "../component/HomeProcess.jsx"
import Joyride from "react-joyride"

import "../../styles/home.css"

const customLocale = {
    back: 'Atrás',
    close: 'Cerrar',
    last: 'Último',
    next: 'Siguiente',
    skip: 'Saltar',
  };

const Tutorial = () => {
    const steps = [
        {
            target: "body",
            content: (<div>
                        <p>HOla Ibai</p>
                        <br />
                        <h3>Soy otra linea</h3>
                    </div>),
            placement: "center",
            disableBeacon:true,
        },
        {
            target: "#profile-link-home-sidebar",
            content: "Puedes configurar tu perfil aquí.",
            disableBeacon: true,
            placement: "right-end",    
        },
        {
            target: "#header-create-post-button",
            content: "Crea tu post haciendo clic a este botón...",
            disableBeacon: true,
            placement: "left-start"
        },
        {
            target: "#create-post-button",
            content: "... o a este de aquí.",
            disableBeacon: true,
            placement: "top",
        },
        {
            target: "#my-compositions-link-home-sidebar",
            content: "Más tarde, aquí podrá ir viendo todas los posts que diseñes con GeekPost.",
            disableBeacon: true,
            placement: "right-end",    
        },
        {
            target: "body",
            content: "¡Listo! ¡Esperamos que disfrutes utilizando GeekPost!",
            disableBeacon: true,
            placement: "center"
        }
  ];

  return (
    <Joyride steps={steps}
        disableScrolling={true}
        locale={customLocale}
        showSkipButton={true}
        continuous={true}
        showProgress={true}
        styles={{
            options: {
              arrowColor: '#e3ffeb',
              backgroundColor: '#e3ffeb',
              overlayColor: 'rgba(79, 26, 0, 0.4)',
              primaryColor: '#000',
              textColor: '#004a14',
              width: 900,
              zIndex: 1000,
            }
          }}
    />
  );
};



export const Home = () => (
    <div className="main-wrapper">
        <Tutorial />
        <HomeProcess />
    </div>
    );