import React, { useState } from "react";
import { subscriptionMessages } from "../data/newsletterData.js"
import { validateEmail } from "../utils/validateEmail.js"

const SubscriptionForm = ({ onSubscribe }) => {
    const [usermail, setUsermail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubscribe(usermail);
    }

    const handleUsermailChange = (e) => {
        setUsermail(e.target.value);
    }

    return (
        <form>
        <input
            type="email"
            onChange={handleUsermailChange}
            placeholder="Ingresa tu correo electrónico"
            value={usermail}
            required
        />
        <button type="submit" onClick={handleSubmit} className="newsletter-btn">
            Suscribirse
        </button>
        </form>
    )
}

export const Newsletter = () => {
    const [subscriptionMessage, setSubscriptionMessage] = useState("")

    const handleSubscribe = (email) => {
        // Validar que el usuario haya ingresado un correo electrónico
        if (email === "") {
            setSubscriptionMessage(subscriptionMessages.EMPTY_EMAIL)
            return
        }

        // Validar que el correo electrónico sea válido
        if (!validateEmail(email)) {
            setSubscriptionMessage(subscriptionMessages.INVALID_EMAIL)
            return
        }

        // Realizar la petición para agregar el correo electrónico del usuario a la lista de correo
        fetch(process.env.MAILERLITE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + process.env.MAILERLITE_API,
            },
            body: JSON.stringify({
                email: email,
                groups: ["85110772424771310"],
            }),
            })
            .then((response) => {
                // console.log(response);
                if (response.status === 201) {
                    setSubscriptionMessage(subscriptionMessages.SUBSCRIBE_SUCCESS)
                } else if (response.status === 200) {
                    setSubscriptionMessage(subscriptionMessages.ALREADY_SUBSCRIBED)
                } else {
                    setSubscriptionMessage(subscriptionMessages.SUBSCRIBE_ERROR)
                }
                return response.json()
            })
            .catch((error) => {
                console.error(error)
                setSubscriptionMessage(subscriptionMessages.SUBSCRIBE_ERROR)
            });
        };

    return (
        <div className="footer-newsletter">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-xl-6">
                        <h4>Tu taza humeante de inspiración de los lunes</h4>
                            <p className="lead">
                                Suscríbete a nuestra lista de difusión para recibir cada lunes nuestro boletín de noticias
                                semanal con el que avivaremos la llama de tu inspiración. Directo a tu buzón. Sin spam.
                                Lo prometemos. Tus datos están a salvo con nosotros.
                            </p>
                            <SubscriptionForm onSubscribe={handleSubscribe} />
                            {subscriptionMessage && (
                                <div className="mt-3 newsletter-warning">
                                    <p className="text-center">{subscriptionMessage}</p>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
};
