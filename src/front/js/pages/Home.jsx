import React, { useContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
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
                        <h1 className="mb-3">¡Bienvenid@ a tu escritorio de GeekPost!</h1>
                        <p>Permítenos mostrarte tus posibilidades en este mini-tutorial.</p>
                        <p>Si no te apetece verlo, siempre puedes hacer clic sobre el botón «Saltar».</p>
                    </div>),
            placement: "center",
            disableBeacon:true,
        },
        {
            target: "#profile-link-home-sidebar",
            content: (<div>
                        <h2 className="mb-3">Aquí puedes configurar tu perfil</h2>
                        <p>Toda la información que agruegues será información que utilizaremos tanto para personalizar 
                            tu experiencia como a la hora de confeccionar tus posts.</p>
                        <p>¡Pero no te preocupes si no es la información que te gustaría ver en tus posts!
                            Siempre la podrás cambiar...</p>
                    </div>),
            disableBeacon: true,
            placement: "right-end",    
        },
        {
            target: "#header-create-post-button",
            content: (<div>
                        <h2 className="mb-3">... lo que podrás hacer justo aquí.</h2>
                        <p>¡Y es que este es el botón de crear posts!</p>
                    </div>),
            disableBeacon: true,
            placement: "left-start"
        },
        {
            target: "#create-post-button",
            content: (<div>
                        <h2 className="mb-3">¡Y este también lo es!</h2>
                        <p>Este y el anterior serán los botones que te lleven al formulario de creación de posts.</p>
                    </div>),            disableBeacon: true,
            placement: "top",
        },
        {
            target: "#my-compositions-link-home-sidebar",
            content: (<div>
                        <h2 className="mb-3">Aquí guardaremos todas las composiciones que hagas en GeekPost</h2>
                        <p>¡Para que los puedas ver cuando gustes!</p>
                    </div>),            disableBeacon: true,
            placement: "right-end",    
        },
        {
            target: "body",
            content: (<div>
                        <h2 className="mb-3">¡Esperamos que disfrutes!</h2>
                        <p>¡Y no te olvides de darnos amor compartiéndonos con tus amigos!</p>
                    </div>),          disableBeacon: true,
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
              width: 600,
              zIndex: 1000,
            }
          }}
    />
  );
};



export const Home = () => {
    const [freshRegistry, setFreshRegistry] = useState(false);
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        if (location.state && location.state.prevPath === "/signup") {
            setFreshRegistry(true);
        }
    }, [location.state]);

    return (
        <div className="main-wrapper">
            {freshRegistry && <Tutorial />}
            <HomeProcess />
        </div>
    );
};