import React from "react";
import {
    Outlet
} from "react-router-dom";
import {
    StandardHeader
} from "../component/StandardHeader.jsx";
import {
    Footer
} from "../component/Footer.jsx";

export const Layout = () => {
    return ( <
        >
        <
        StandardHeader / >
        <
        Outlet / >
        <
        Footer / >
        <
        />
    );
};