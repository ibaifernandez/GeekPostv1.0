import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./component/ScrollToTop.jsx";

import { Intro } from "./pages/Intro.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Infopost } from "./pages/Infopost.jsx";
import { Home } from "./pages/Home.jsx";
// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import Layout from "./layout.js";

const App = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/infopost" element={<Infopost />} />
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Intro />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(App);
