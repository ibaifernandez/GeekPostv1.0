import React from "react";
import { OurTeam } from "../component/OurTeam.jsx"
import { OurProject } from "../component/OurProject.jsx"
import { OurSkills } from "../component/OurSkills.jsx"
import "../../styles/hello/our-team.css";
import "../../styles/hello/our-project.css";
import "../../styles/hello/our-skills.css";

export const Hello = () => {
    return (
        <section className="inner-page">
            <OurTeam />
            <OurProject />
            <OurSkills />
        </section>
        )
    };