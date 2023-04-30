import React from "react";
import disena from "../../img/disena.jpeg";

const skills = [
  { name: "HTML5", percentage: "100%" },
  { name: "CSS3", percentage: "100%" },
  { name: "Bootstrap", percentage: "100%" },
  { name: "JavaScript", percentage: "100%" },
  { name: "React", percentage: "100%" },
  { name: "Python", percentage: "100%" },
  { name: "Flask", percentage: "100%" },
  { name: "SQL", percentage: "100%" },
  { name: "SQLAlchemy", percentage: "100%" },
  // Agrega otras habilidades aquí
];

const skillBars = skills.map((skill, index) => (
  <div key={index} className="progress" id={`${skill.name.toLowerCase()}-progress-bar`}>
    <span className="skill">
      {skill.name} <i className="val">{skill.percentage}</i>
    </span>
    <div className="progress-bar-wrap">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: skill.percentage }}
      ></div>
    </div>
  </div>
));

const titleText = "¿Qué tecnologías, metodologías y herramientas hemos manejado durante el proyecto?";
const bodyText = "En definitiva, todo lo que hemos aprendido en el bootcamp de Desarrollo de Software Full-Stack de";

export const OurSkills = () => (
    <section id="skills" className="skills section-pure-white-bg p-5">
        <div className="container-fluid" data-aos="fade-up">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 p-0">
                    <div className="content" data-aos="fade-left" data-aos-delay="100">
                        <h4>{titleText}</h4>
                        <p className="mt-3">{bodyText} <a href="https://4geeksacademy.com/es/inicio" target="_blank">4Geeks</a>. A saber:</p>
                        <div className="skills-content">
                            {skillBars}
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 our-project-img-container ps-lg-5 ps-md-0 pt-lg-0 pt-md-3" data-aos="zoom-in" data-aos-delay="150">
                        <img src={disena} alt="GeekPost-images" />
                    </div>
                            </div>
        </div>
  </section>
)
