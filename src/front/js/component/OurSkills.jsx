import React from "react";
import disena from "../../img/disena.jpeg"

export const OurSkills = () => (
    <section id="skills" className="skills section-bg py-5 px-3">
        <div className="container-fluid d-flex justify-content-between" data-aos="fade-up">
            <div className="col-lg-5 d-flex align-items-center overflow-hidden" data-aos="fade-right" data-aos-delay="100">
                <img src={disena} alt="GeekPost Context Images"
                />
            </div>
            <div
                className="col-lg-6 pt-4 pt-lg-0 content"
                data-aos="fade-left"
                data-aos-delay="100"
            >
                <h4>
                    ¿Qué tecnologías, metodologías y herramientas hemos manejado durante el proyecto?
                </h4>
                <p className="mt-3">
                    En definitiva, todo lo que hemos aprendido en el bootcamp de Desarrollo de Software Full-Stack
                    de <a href="https://4geeksacademy.com/es/inicio" target="_blank">4Geeks</a>. A saber:
                </p>
                <div className="skills-content">
                    <div id="html-progress-bar" className="progress">
                        <span className="skill">HTML5 <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                            ></div>
                        </div>
                    </div>

                    <div id="css-progress-bar" className="progress">
                        <span className="skill">CSS3 <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>

                    <div id="bootstrap-progress-bar" className="progress">
                        <span className="skill">Bootstrap <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>

                    <div id="javascript-progress-bar" className="progress">
                        <span className="skill">JavaScript <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>

                    <div id="react-progress-bar" className="progress">
                        <span className="skill">React <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>
                    
                    <div id="python-progress-bar" className="progress">
                        <span className="skill">Python <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>
                    
                    <div id="flask-progress-bar" className="progress">
                        <span className="skill">Flask <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>
                    
                    <div id="sql-progress-bar" className="progress">
                        <span className="skill">SQL <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>
                    
                    <div id="sqlalchemy-progress-bar" className="progress">
                        <span className="skill">SQLAlchemy <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>
                    
                    <div id="git-progress-bar" className="progress">
                        <span className="skill">Git <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>

                    <div id="github-progress-bar" className="progress">
                        <span className="skill">GitHub <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>
                    
                    <div id="scrum-progress-bar" className="progress">
                        <span className="skill">Metodología SCRUM <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{width: '100%'}}
                                ></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
</section>
)