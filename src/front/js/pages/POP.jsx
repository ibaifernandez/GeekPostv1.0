import React from "react";
import { useLocation } from "react-router-dom";
import { OurTeam } from "../component/OurTeam.jsx"
import { OurProject } from "../component/OurProject.jsx"
import { OurSkills } from "../component/OurSkills.jsx"
import { MainHero } from "../component/MainHero.jsx"
import "../../styles/hello.css";

export const POP = () => {
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
       <h1>Política de privacidad</h1>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis necessitatibus cupiditate doloribus eos quisquam, esse delectus mollitia nam quos officia ab quidem voluptas. Praesentium odit doloribus tempore voluptas esse aliquid?</p>
       <h2>Más política de privacidad</h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis necessitatibus cupiditate doloribus eos quisquam, esse delectus mollitia nam quos officia ab quidem voluptas. Praesentium odit doloribus tempore voluptas esse aliquid?</p>
    </section>
      
    </>
)};