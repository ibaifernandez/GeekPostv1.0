import React from "react";
import { Link } from "react-router-dom";
import ibai from "../../img/3geeks/ibai-fernandez.jpeg";
import sebas from "../../img/3geeks/sebastian-cardona.jpeg";
import sol from "../../img/3geeks/Sol-La-Banca.jpg";

const team = [
  {
    name: "Ibai Fernández",
    role: "Full-Stack Developer",
    image: ibai,
    url: "https://portfolio.ibaifernandez.com",
    alt: "Foto de Ibai Fernández"
  },
  {
    name: "Sebastián Cardona",
    role: "Full-Stack Developer",
    image: sebas,
    url: "https://github.com/Sebastnt",
    alt: "Foto de Sebastián Cardona"
  },
  {
    name: "Sol La Banca",
    role: "Full-Stack Developer",
    image: sol,
    url: "https://www.linkedin.com/in/sol-la-banca",
    alt: "Foto de Sol La Banca"
  }
];

export const AboutUs = () => (
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2 className="about-title">3Geeks @ 4Geeks</h2>
      </div>

      <div className="row content">
        <div className="col-lg-6 d-flex justify-content-around">
        {team.map((member, index) => (
            <a key={index} href={member.url} target="_blank" rel="noopener noreferrer">
                <div className="aboutus-img-wrap">
                <img
                    className="aboutus-img"
                    src={member.image}
                    alt={member.alt}
                />
                <div className="aboutus-img-text">
                    <p>{member.name}</p>
                    <p>
                    <em>{member.role}</em>
                    </p>
                </div>
                </div>
            </a>
            ))}
        </div>
        <div className="col-lg-5 pt-4 pt-lg-0 ms-lg-5 my-auto">
          <p className="lead">
            Somos maravillosos, increíbles, cojonudos, fabulosos, maravillosos,
            incomparables... Y empiezo a quedarme sin adjetivos para poder
            rellenar cuatro o cinco líneas de texto...
          </p>
          <div className="d-flex justify-content-center">
            <Link to="/hello" className="btn-learn-more ms-0">
              Conócenos 🤓
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)