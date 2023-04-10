import React, { useState } from "react";
import comparte from "../../img/comparte.jpeg"

export const OurProject = () => {
    return (
    <section id="why-us" className="why-us section-pure-white-bg py-5 px-3">
        <div className="container-fluid" data-aos="fade-up">
            <div className="container-fluid d-flex justify-content-between px-0">
                <div className="col-lg-6 d-flex flex-column justify-content-center align-items-stretch">
                    <div className="content">
                        <h3>
                            GeekPost: una solución a tu medida
                        </h3>
                        <p className="mt-3">
                            Te va a encantar GeekPost porque tiene un montón de cosas increíbles. Por ejemplo,
                            puede convertir el plomo en oro, si bien esto no ha sido demostrado. A continuación
                            te dejamos las claves del proyecto:
                        </p>
                    </div>
                    <OurProjectAccordion />
                </div>
                <div
                    className="col-lg-5 our-project-img-container"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                >
                    <img src={comparte} alt="GeekPost-images" />
                </div>
            </div>
        </div>
    </section>
    )
}

const OurProjectAccordion = () => {
    return (
    <div className="our-project-accordion accordion-list">
        <ul>
            <li>
                <AccordionItem
                    index={1}
                    title="Hacer las cosas con cariño"
                    content="Porque cuando las cosas se hacen con cariño, ¿qué puede salir mal?"
                />
            </li>
            <li>
                <AccordionItem
                    index={2}
                    title="¿Qué más se puede pedir?"
                    content="Cuéntame un cuento y verás qué contento me voy a la cama y tengo lindos sueños."
                />
            </li>
            <li>
                <AccordionItem
                    index={3}
                    title="¿Y todo eso gratis?"
                    content="Y no solo todo eso, sino también todo esto otro. Y esto... ¡y esto! Miles de promesas que no vamos a cumplir para que nos compres nuestro producto."
                />
            </li>
        </ul>
    </div>
  );
}

const AccordionItem = ({ title, content, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="section-bg p-3">
        <div className="d-flex w-100 align-items-center">
            <span className="me-3">{index}</span>
            <div className="d-flex w-100 justify-content-between">
                <a
                    href="#"
                    onClick={handleClick}
                    className="collapsed d-flex w-100 justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    aria-expanded={isOpen}
                >
                <span>{title}</span>
                    {isOpen ?
                        <i className="fa-solid fa-chevron-right"></i>
                    :   <i className="fa-solid fa-chevron-down"></i>}
                </a>
            </div>
        </div>
        <div className={`collapse ${isOpen ? 'show' : ''}`} data-bs-parent=".our-project-accordion">
            <p>{content}</p>
        </div>
    </div>
    )    
}
