import React, { useState } from "react";
import comparte from "../../img/comparte.jpeg"

export const OurProject = () => {
    return (
        <section id="why-us" className="why-us section-bg p-5">
            <div className="container" data-aos="fade-up">
                <div className="row p-3">
                    <div className="col-lg-6 our-project-img-container ps-0" data-aos="zoom-in" data-aos-delay="150">
                        <img src={comparte} alt="GeekPost-images" />
                    </div>
                    <div className="col-lg-6 ps-lg-5 ps-md-0 pt-lg-0 pt-md-3">
                        <div className="content">
                            <h3>GeekPost: una solución a tu medida</h3>
                            <p className="lead mt-3">
                                Te va a encantar GeekPost porque tiene un montón de cosas increíbles. Por ejemplo, puede convertir el
                                plomo en oro, si bien esto no ha sido demostrado. A continuación te dejamos las claves del proyecto:
                            </p>
                        </div>
                        <OurProjectAccordion />
                    </div>
                </div>
            </div>
        </section>
    )
}

const OurProjectAccordion = () => {
    return (
        <div className="our-project-accordion accordion-list mt-md-4">
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
        <div className="p-3">
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
                        <i className="our-project-chevron fa-solid fa-chevron-right"></i>
                    :   <i className="our-project-chevron fa-solid fa-chevron-down"></i>}
                </a>
            </div>
        </div>
        <div className={`collapse ${isOpen ? 'show' : ''}`} data-bs-parent=".our-project-accordion">
            <p>{content}</p>
        </div>
    </div>
    )    
}
