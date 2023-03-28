import React, { useState, useEffect } from "react";

export const Newsletter = () => {
    const [usermail, setUsermail] = useState("");

    const handleUsermail = (e) => {
        setUsermail(e.target.value);
    };

    const addSubscriber = (usermail) => {
        console.log("Enviando...");
        // fetch(`https://api.mailerlite.com/api/v2/groups/${groupId}/subscribers`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'X-MailerLite-ApiKey': apiKey,
        //     },
        //     body: JSON.stringify({"email": usermail}),
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error));
}
   
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
                            <button id="newsletter-btn" value="Suscríbete" onClick={addSubscriber}>Adjúntate</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
