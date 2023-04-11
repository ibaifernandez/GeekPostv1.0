import React from "react";
import { teamData } from "../data/teamData.js";

export const OurTeam = () => (
    <section id="team" className="team section-bg px-3 pb-5">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
                <h2 className="pt-3">El equipo</h2>
                <p className="our-team-p">
                    Mejor que tener a tres Messi en la delantera es tener a este equipo. Te juegan lo mismo en el back-end 
                    que en el front-end; tienen un control del Visual Studio Code que ya quisieran otros. Y lo mejor: 
                    ahora mismo, como novatos que son, están a precio de ganga.
                </p>
            </div>
        </div>
        
        <div className="container-fluid d-flex flex-wrap">
            {teamData.map(({ id, image, alt, name, title, description, twitter, facebook, instagram, linkedin, github }) => (
            <div key={id} className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                <div className="member d-flex align-items-start">
                    <div className="pic">
                        <img src={image} className="img-fluid" alt={alt} />
                    </div>
                    <div className="member-info">
                        <h4>{name}</h4>
                        <span>{title}</span>
                        <p>{description}</p>
                        <div className="social">
                            {twitter ? <a href={twitter}><i className="fab fa-twitter"></i></a> : null}
                            {facebook ? <a href={facebook}><i className="fab fa-facebook-square"></i></a> : null}
                            {instagram ? <a href={instagram}><i className="fab fa-instagram"></i></a> : null}
                            {linkedin ? <a href={linkedin}><i className="fab fa-linkedin-in"></i></a> : null}
                            {github ? <a href={github}><i className="fab fa-github"></i></a> : null}
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
);