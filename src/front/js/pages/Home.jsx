import React, { useContext } from "react";
import { HomeProcess } from "../component/HomeProcess.jsx"
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store } = useContext(Context);
    return (
        <div className="main-wrapper">
            <HomeProcess />
        </div>
)};