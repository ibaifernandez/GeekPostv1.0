import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./component/ScrollToTop.jsx";

import { Intro } from "./pages/Intro.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Infopost } from "./pages/Infopost.jsx";
import { Home } from "./pages/Home.jsx";
import { VerticalSemiFormalTemplate } from "./templates/VerticalSemiFormalTemplate.jsx"
import { SquareSemiFormalTemplate } from "./templates/SquareSemiFormalTemplate.jsx"
import { MyCompositions } from "./pages/MyCompositions.jsx";
import injectContext from "./store/appContext";

import Layout from "./layout.js";

const App = () => {
    const basename = process.env.BASENAME || "";

    return (
        <BrowserRouter basename={basename}>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="ibai-square" element={<SquareSemiFormalTemplate />} />
            <Route path="ibai-vertical" element={<VerticalSemiFormalTemplate />} />
            <Route path="/infopost" element={<Infopost />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Intro />} />
                    {/* <Route path="/hello" element={<Hello />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/help" element={<Help />} /> */}
                    <Route path="*" element={<h1>Not found!</h1>} />
                {/* </Route>
                <Route path="/" element={<HomeLayout />}>
                    <Route path="/xxx" element={<HomeProcess />} />
                    <Route path="/yyy" element={<Profile />} /> */}
                <Route path="/my-compositions" element={<MyCompositions />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default injectContext(App);
