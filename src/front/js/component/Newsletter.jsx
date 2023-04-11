import React, { useState, useEffect } from "react";

export const Newsletter = () => {
    const MLT = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMjc2ZjA2OTA5YmYzMmQyZThjOGRhM2E5YjI3N2M4YWE1MGRkNjExYjlmZWQ1OWIzOGM4ZjU5NzBlZGIyZTcyMDFhYWU4M2Q1YTFmMGRmNDAiLCJpYXQiOjE2ODExNjc4NzQuMTE1MTQyLCJuYmYiOjE2ODExNjc4NzQuMTE1MTQ1LCJleHAiOjQ4MzY4NDE0NzQuMTA2NTYzLCJzdWIiOiI0MjYxMjYiLCJzY29wZXMiOltdfQ.vxU995WcKo1YyVxLVrccGsZaZAusgIYl_PLy3wGNQJpJkMiXY02zUHHWmBvVqyDn5da5x_lSAnfIgjwRzYOf5lHK9PGaOIguL0AMvgm--xVjzsOYgeBfYRt2dLcYsKbZNkdkz8cF0kfZIA0kyrj7h96favKjaStLfCp4nkeYhqpI2ySr46N7OMj2L8YJqgNS_qsNnJwI-qMYnmb_So9Z8NZ_UzcNHXHpK4WN2r2zHGmenDOfe3xik2cbxqX9_jaFmKtV0YzF9x6S8f8S8iZwoCnGLg2xAwpu0gCC6DKalWDXlPODxhR1RhT48yvG9VSS6OSS3PRcUiv9HfA7hAMVDkRosZ8V0OPaKp7yAKpolL5RPNb-3bNx94eS_ZuCfMNrGt20eOevtaNFZcy89RwUlHoOufkkxMiHcnTibBT-8RGNJoM-E0plt6GC9kJDsL6X2MCcXRExGuA2q5pygBKCXVvCvNU4LtRs4_V8TvPWNu1cn3ZKxz4G95V2avSW3E_oQGyh0PO65z64uR0-FsXVYjtVaQkCraRjeSnSFmXJ7ZQcKGyLdIreDEoL50OJX7kF-n5mCpsCg619e7taMoSNasXXOIR9JCBAH9OdSy8-FVlmb7b73ypWVI_BdirKNFPONMiI0m87vbHzl5rSj--s2qTdhYwYGckAP5-LBKAfvBs"
    
    const [usermail, setUsermail] = useState("");

    const [successfulSubscription, setSuccessfulSubscription] = useState("");
    const [subscriptionError, setSubscriptionError] = useState("");

    const handleUsermail = (e) => {
        setUsermail(e.target.value);
    };

    const addSubscriber = (e) => {
        e.preventDefault();

        if (usermail === "") {
            setSuccessfulSubscription(false);
            setSubscriptionError("Por favor, ingresa tu correo electrónico.");
            return;
        }

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(usermail)) {
            setSuccessfulSubscription(false);
            setSubscriptionError("Por favor, ingresa una dirección de correo electrónico válida.");
            return;
        }

        fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
             Authorization: "Bearer " + MLT,
            },
            body: JSON.stringify({
                email: usermail,
              fields: { name: "xxx" },
                groups: ["85110772424771310"],
            }),
          })
            .then((response) => {
                if (response.status === 200) {
                setSuccessfulSubscription("Suscrito con éxito. ¡Gracias!");
                setSubscriptionError("");
                } else {
               setSuccessfulSubscription(false);
                setSubscriptionError("Ocurrió un error al intentar suscribirse. Por favor, inténtelo de nuevo más tarde.");
                }
                return response.json();
            })
            .catch((error) => {
                console.error(error);
                setSuccessfulSubscription(false);
                setSubscriptionError("Ocurrió un error al intentar suscribirse. Por favor, inténtelo de nuevo más tarde.");
            });
        };
      
    return (
        <div className="footer-newsletter">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h4>Tu taza humeante de inspiración de los lunes</h4>
                        <p className="lead">
                            Suscríbete a nuestra lista de difusión para recibir
                            cada lunes nuestro boletín de noticias semanal con
                            el que avivaremos la llama de tu inspiración.
                            Directo a tu buzón. Sin spam. Lo prometemos. Tus
                            datos están a salvo con nosotros.
                        </p>
                        <form>
                            <input
                                type="email"
                                name="email"
                                value={usermail}
                                onChange={handleUsermail}
                                placeholder="Escribe aquí tu correo electrónico"
                            />
                            <button id="newsletter-btn" value="Suscríbete" onClick={addSubscriber}>Suscríbete</button>
                        </form>
                        {subscriptionError ? <p className="mt-3">{subscriptionError}</p> : null}
                        {successfulSubscription !== "" ? <p className="mt-3">{successfulSubscription}</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
