import React from "react";
import { useLocation } from "react-router-dom";
import { OurTeam } from "../component/OurTeam.jsx"
import { OurProject } from "../component/OurProject.jsx"
import { OurSkills } from "../component/OurSkills.jsx"
import { MainHero } from "../component/MainHero.jsx"
import "../../styles/hello.css";

export const Branding = () => {
    const location = useLocation();
    return (
    <>
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container ps-4 pt-1 m-0">
        <ol>
          <li><a href="index.html">Inicio</a></li>
          <li>Inner Page</li>
        </ol>
      </div>
    </section>
    
    <section class="inner-page m-5 p-5">
       <h1>Branding</h1>
    </section>
      
    </>
)};