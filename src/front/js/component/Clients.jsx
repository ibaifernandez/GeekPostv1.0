import React from "react";

function importClientsLogo(logos) {
    return logos.keys().map(logos);
}

const clientLogos = importClientsLogo(
    require.context("../../img/clients", false, /\.(png)$/)
);

export const Clients = ({ image, altTextForClient }) =>
    clientLogos.map((clientLogo, index) => (
        <div
            key={index}
            className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center bg-light"
        >
            <img
                src={clientLogos[index]}
                className="clients-logo img-fluid"
                alt={`Client ${index + 1} Logo`}
            />
        </div>
    ));
