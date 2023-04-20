import React, { useState, useEffect } from "react";

export const Newsletter = () => {
    
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
             Authorization: "Bearer " + process.env.MAILERLITE_URL,
            },
            body: JSON.stringify(
                {
                    email: usermail,
                    groups: ["85110772424771310"],
                }
            ),
          })
            .then((response) => {
                console.log(response)
                if (response.status === 201) {
                    setSuccessfulSubscription("Suscrito con éxito. ¡Gracias!");
                    setSubscriptionError("")
                } else if (response.status === 200) {
                    setSuccessfulSubscription("Ya te registraste en nuestra lista de correo anteriormente. ¡Gracias!")
                    setSubscriptionError("")
                } else {
                    setSuccessfulSubscription(false)
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
                                className="newsletter-input"
                            />
                            <button id="newsletter-btn" value="Suscríbete" onClick={addSubscriber}>Suscríbete</button>
                        </form>
                        {subscriptionError ? <p className="mt-3 newsletter-warning">{subscriptionError}</p> : null}
                        {successfulSubscription !== "" ? <p className="mt-3 newsletter-warning">{successfulSubscription}</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
