import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ScrollToTop } from "./component/ScrollToTop.jsx";

// Vistas iniciales
import { Intro } from "./pages/Intro.jsx";
import { Hello } from "./pages/Hello.jsx";
import { Docs } from "./pages/Docs.jsx";
import { Help } from "./pages/Help.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Login } from "./pages/Login.jsx";

import { Error404 } from "./pages/Error404.jsx";

// Vistas tras registro
import { Home } from "./pages/Home.jsx";
import { Infopost } from "./pages/Infopost.jsx";
import { MyCompositions } from "./pages/MyCompositions.jsx";
import { Output } from "./pages/Output.jsx";
import { MyProfile } from "./pages/MyProfile.jsx";
import injectContext from "./store/appContext";

// Plantillas
import { VerticalSemiFormalTemplate } from "./templates/VerticalSemiFormalTemplate.jsx"
import { SquareSemiFormalTemplate } from "./templates/SquareSemiFormalTemplate.jsx"
import { PostFormalFeed } from "./component/PostFormalFeed.jsx";

import { Layout } from "./layout.js";
import { HomeLayout } from "./homeLayout.js";
    
const App = () => {
    
    const basename = process.env.BASENAME || "";

    return (
        <BrowserRouter basename={basename}>
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="ibai-square" element={<SquareSemiFormalTemplate />} />
            <Route path="ibai-vertical" element={<VerticalSemiFormalTemplate />} />
            <Route path="post-formal-feed" element={<PostFormalFeed />} />
            <Route path="/infopost" element={<Infopost />} />
            <Route path="/output" element={<Output />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Intro />} />
                    <Route path="/hello" element={<Hello />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/help" element={<Help />} /> */
                    <Route path="/contact" element={<Contact />} /> */
                    <Route path="*" element={<Error404 />} />
                </Route>
                <Route path="/" element={<HomeLayout />}>
                    <Route path="/home" element={<Home />} /> 
                    <Route path="/my-compositions" element={<MyCompositions />} /> 
                    <Route path="/my-profile" element={<MyProfile />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default injectContext(App);
