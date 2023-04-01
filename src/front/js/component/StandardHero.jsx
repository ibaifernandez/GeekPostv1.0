import React, { useState } from "react";
import "../../styles/index.css";
import YouTube from "react-youtube";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

export const StandardHero = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
    <section id="standard-hero" className="d-flex align-items-center p-3">
        <div className="container">
            <div className="row">
                <div
                    className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 mt-md-5 pt-md-5"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
aaa
                </div>
                <div
                    className="col-lg-6 hero-img"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <h1 className="hero-h1">
                        Publica en redes sociales de una manera sencilla...
                    </h1>
                    <h2 className="fs-1">... muy sencilla.</h2>
                    
                    <div className="d-flex justify-content-center justify-content-lg-end justify-content-md-around">
                        <Link to={`/signup`} className="btn-get-started">
                            Regístrate 🖋
                        </Link>
                        <Button
                        onClick={handleShow}
                        className="btn-watch-video nav-link">
                            &gt; Ver vídeo 🎥
                        </Button>
                        <Modal size="lg" show={show} onHide={handleClose} centered className="d-flex">
                            <Modal.Header closeButton>
                                <Modal.Title as="h4">¡Conoce GeekPost!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="d-flex justify-content-center">
                                <YouTube videoId="K22qJ-VikTo" />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="btn-close-video" onClick={handleClose}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
};
