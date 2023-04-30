// Import de React y de hooks de React
import React from "react";

// Import de hooks de React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import de React Helmet
import { Helmet } from "react-helmet";

// Import de componentes globales
import { ScrollToTop } from "./component/scroll-to-top/ScrollToTop.jsx";
import { ScrollToTopButton } from "./component/scroll-to-top/ScrollToTopButton.jsx";
import injectContext from "./store/appContext";

// Import de AOS (Animated On Scroll)
import AOSWrapper from "./component/AOS/AOSWrapper.jsx";

// Import de estilos globales
import "../styles/global/index.css";

// Vistas iniciales
import { Intro } from "./pages/Intro.jsx";
import { Hello } from "./pages/Hello.jsx";
import { Help } from "./pages/Help.jsx";
import { Docs } from "./pages/Docs.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { POP } from "./pages/POP.jsx";
import { TOS } from "./pages/TOS.jsx";
import { Branding } from "./pages/Branding.jsx";
import { Error404 } from "./pages/Error404.jsx";

// Vistas tras registro
import { Home } from "./pages/Home.jsx";
import { Infopost } from "./pages/Infopost.jsx";
import { MyCompositions } from "./pages/MyCompositions.jsx";
import { Output } from "./pages/Output.jsx";
import { MyProfile } from "./pages/MyProfile.jsx";

// Import de templates
import { FormalSquareTemplate } from "./templates/FormalSquareTemplate.jsx";
import { FormalVerticalTemplate } from "./templates/FormalVerticalTemplate.jsx";
import { SemiFormalSquareTemplate } from "./templates/SemiFormalSquareTemplate.jsx";
import { SemiFormalVerticalTemplate } from "./templates/SemiFormalVerticalTemplate.jsx";
import { InformalSquareTemplate } from "./templates/InformalSquareTemplate.jsx";
import { InformalVerticalTemplate } from "./templates/InformalVerticalTemplate.jsx";

// Import de layouts
import { IntroLayout } from "./layouts/introLayout.js";
import { Layout } from "./layouts/layout.js";
import { HomeLayout } from "./layouts/homeLayout.js";
import { Download } from "./pages/Download.jsx";

// Componente App
const App = () => {
  const basename = process.env.BASENAME || "";

    return (
        <>
        <Helmet>
            <meta name="title" content="GeekPost" />
            <meta
            name="description"
            content="Semi-automatic system for social media post creation."
            />
            <meta
            name="keywords"
            content="Social Media, React, HTML, CSS, JavaScript, Python, Flask, SQLAlchemy, Front-End Development, Back-end Development, Full-Stack Development, Software Engineer, Full-Stack Engineer, Web Developer, Web Development, Web Design, Full-Stack Web Developer, Node.js, SQL"
            />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="Spanish" />
            <meta
            name="author"
            content="Ibai Fernández, Sol La Banca & Sebastián Cardona"
            />

            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="GeekPost" />
            <meta property="og:url" content="#" />
            <meta property="og:site_name" content="GeekPost" />
            <meta
            property="og:description"
            content="Semi-automatic system for social media post creation."
            />
            <meta property="og:image" content="../img/geekpost-iso.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="GeekPost" />
            <meta
            name="twitter:description"
            content="Semi-automatic system for social media post creation."
            />
            <meta name="twitter:image" content="../img/geekpost-iso.png" />

            <title> GeekPost </title>

            <link rel="icon" href="/geekpost-icon.png" />
        </Helmet>
        <BrowserRouter basename={basename}>
            <ScrollToTop />
            <ScrollToTopButton />
            <Routes>
            {/* Ruta para Error [sin header ninguno]*/}
                <Route path="download" element={<Download />} />
            {/* Rutas para previsualizar templates [sin header ninguno] */}
                <Route path="formal-square-template" element={<FormalSquareTemplate />} />
                <Route path="formal-vertical-template" element={<FormalVerticalTemplate />} />
                <Route path="semiformal-square-template" element={<SemiFormalSquareTemplate />} />
                <Route path="semiformal-vertical-template" element={<SemiFormalVerticalTemplate />} />
                <Route path="informal-square-template" element={<InformalSquareTemplate />} />
                <Route path="informal-vertical-template" element={<InformalVerticalTemplate />} />
            {/* Rutas de la vista <Intro /> [con «IntroHeader»] */}
                <Route path="/" element={<IntroLayout />}>
                    <Route index element={<Intro />} />
                </Route>
            {/* Rutas de las vistas «extra» de la aplicación [con «Standard Header»] */}
                <Route path="/" element={<Layout />}>
                    <Route path="*" element={<Error404 />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/hola" element={<Hello />} />
                    <Route path="/documentacion" element={<Docs />} />
                    <Route path="/ayuda" element={<Help />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/politica-de-privacidad" element={<POP />} />
                    <Route path="/terminos-y-condiciones" element={<TOS />} />
                    <Route path="/branding" element={<Branding />} />
                </Route>
            {/* Rutas de las vistas posteriores al registro e ingreso [con «Home Header»] */}
                <Route path="/" element={<HomeLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/my-profile" element={<MyProfile />} />
                    <Route path="/my-compositions" element={<MyCompositions />} />
                    <Route path="/infopost" element={<Infopost />} />
                    <Route path="/output" element={<Output />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
    );
};

export default injectContext(App);
