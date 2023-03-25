import React, { useState, useEffect } from "react";

export const Newsletter = () => {
    // const [username, setUsername] = useState("");
    const [usermail, setUsermail] = useState("");

    // const handleUsername = (e) => {
    //     setUsername(e.target.value);
    //     console.log(username);
    //     return usermail;
    // };

    const handleUsermail = (e) => {
        setUsermail(e.target.value);
        console.log(usermail);
        return usermail;
    };

    const createSubscriber = () => {
        e.preventDefault();
        fetch(
            "https://https://api.mailerlite.com/api/v2/groups/111962385/subscribers",
            {
                method: "POST",
                body: JSON.stringify(`{"email": ${usermail}}`),
                headers: {
                    "X-MailerLite-ApiKey": "ed5fca3482aca890befaed42fa964ff9",
                    "Content-Type": "application/json",
                },
            }
        )
            .then((resp) => {
                console.log(resp);
                console.log(
                    resp.status +
                        " should be 200 if it wet right and 400 if it went wrong"
                );
                console.log(resp.text() + " is resp.text()");
                console.log(resp.data + " should be an array");
                return resp.json();
            })
            .then((data) => {
                //here is were your code should start after the fetch finishes
                console.log(data); //this will print on the console the exact object received from the server
            })
            .catch((error) => {
                //error handling
                console.log(error);
            });
    };
    return (
        <div className="footer-newsletter">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h4>Tu taza humenate de inspiración de los lunes</h4>
                        <p className="lead">
                            Suscríbete a nuestra lista de difusión para recibir
                            cada lunes nuestro boletín de noticias semanal con
                            el que avivaremos la llama de tu inspiración.
                            Directo a tu buzón. Sin spam. Lo prometemos. Tus
                            datos están a salvo con nosotros.
                        </p>
                        <form method="POST">
                            {/* <input
                                type="text"
                                name="name"
                                // value={username}
                                // onChange={handleUsername}
                            /> */}
                            <input
                                type="email"
                                name="email"
                                value={usermail}
                                onChange={handleUsermail}
                            />
                            <input
                                type="submit"
                                value="Suscríbete"
                                onClick={() => createSubscriber()}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
