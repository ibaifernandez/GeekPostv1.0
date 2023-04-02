import React from "react";
import { useLocation } from "react-router-dom";
import { FAQ } from "../component/FAQ.jsx"
import { OurProject } from "../component/OurProject.jsx"
import { OurSkills } from "../component/OurSkills.jsx"
import "../../styles/hello.css";

export const Help = () => {
    const location = useLocation();
    return (
    <>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container ps-4 pt-1 m-0">
        <ol>
          <li><a href="index.html">Inicio</a></li>
          <li>Inner Page</li>
        </ol>
      </div>
    </section>
    
    <section className="inner-page">
        <FAQ />
    </section>
      
    </>
)};