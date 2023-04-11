let url = "https://3001-ibaifernand-geekpostv10-kr8unxhs4kh.ws-us93.gitpod.io"

const getState = ({
        getStore,
        getActions,
        setStore
    }) => {
        return {

            store: {

                user: {
                    firstName: "",
                    lastName: "",
                    identity: "",
                    facebookProfile: "",
                    instagramProfile: "",
                    tiktokProfile: "",
                    logo: "",
                    contact: "",
                    mainColor: "",
                    secondaryColor: "",
                    auxColor: "",
                },

                infopost: {
                    mainImage: ""
                },

                errorLogin: "",
            },

            actions: {

                fetchCredentials: async ({
                    email,
                    password
                }) => {
                    try {
                        const resp = await fetch(url + "/api/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: email,
                                password: password
                            }),
                        });
                        if (resp.status === 404) {
                            setStore({
                                errorLogin: "Usuario o contraseña incorrecta"
                            })
                            return false;
                        } else if (resp.status === 400) {
                            return false;
                        }
                        if (resp.status === 200) {
                            const data = await resp.json();
                            localStorage.setItem("token", data ?.access_token);
                            setStore({
                                auth: true
                            });
                            return true;
                        }
                    } catch (error) {
                        console.log("Error loading message from backend", error);
                        return false
                    }
                },

                createUser: async ({
                    email,
                    password,
                    firstName
                }) => {
                    try {
                        const resp = await fetch(url + "/api/signup", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email,
                                password,
                                first_name: firstName
                            }),
                        });
                        if (resp.status === 403) {
                            setStore({
                                errorSignup: "Ha habido un fallo con el registro. Por favor, inténtelo de nuevo."
                            })
                            return false;
                        } else if (resp.status === 400) {
                            return false;
                        }
                        if (resp.status === 200) {
                            const data = await resp.json();
                            localStorage.setItem("token", data ?.access_token);
                            setStore({
                                errorSignup: "Sin errores a la hora del registro."
                            })
                            setStore({
                                auth: true
                            });
                            return true;
                        }
                    } catch (error) {
                        console.log("Error loading message from backend", error);
                        return false
                    }
                },

                getUserDetails: async () => {
                    let api = url + "/api/profile";
                    try {
                        const resp = await fetch((api), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + localStorage.getItem("token"),
                            },
                        });
                        const data = await resp.json();
                        setStore({
                            user: {
                                firstName: data.first_name,
                                lastName: data.last_name,
                                identity: data.identity,
                                facebookProfile: data.facebook_profile,
                                instagramProfile: data.instagram_profile,
                                tiktokProfile: data.tiktok_profile,
                                websiteUrl: data.website_url,
                                logo: data.logo,
                                contact: data.contact_data,
                                mainColor: data.main_color,
                                secondaryColor: data.secondary_color,
                                auxColor: data.aux_color,
                            }
                        });
                    } catch (e) {
                        console.log(e);
                    }
                },

                logOut: () => {
                    localStorage.clear()
                    setStore({
                        auth: false,
                    });
                    console.log(getStore())
                },

                storeInfoPost: async (identity, mainText, secondaryText, price, logo, formality, mainColor, secondaryColor, auxColor, ratio, contact) => {
                    console.log("ENVIADO DESDE FLUX");
                    console.log(identity, mainText, secondaryText, price, logo, formality, mainColor, secondaryColor, auxColor, ratio, contact);
                    
                    let api = url + "/api/infopost";
                    
                    try {
                        const resp = await fetch(api, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + localStorage.getItem("token"),
                            },
                            body: JSON.stringify({
                            identity,
                            main_text: mainText,
                            secondary_text: secondaryText,
                            price,
                            contact_data: contact,
                            logo,
                            formality,
                            ratio,
                            main_color: mainColor,
                            secondary_color: secondaryColor,
                            aux_color: auxColor,
                        }),
                    });
                    if (resp.ok) {
                        console.log('La petición se ha completado con éxito');
                        // ¿Qué puedo hacer con la respuesta?
                    } else {
                        console.error('Error en la petición:', resp.status, resp.statusText);
                    }
                } catch (e) {
                    console.error('Error en la petición:', e);
                }
            },
            getInfoPost: async (postId) => {
                let api = url + "/api/infopost/" + postId;
                try {
                  const resp = await fetch(api, {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  });
                  const data = await resp.json();
                  setStore({
                    post: {
                      mainImage: data.main_image,
                    },
                  });
                } catch (e) {
                  console.log(e);
                }
              },

            }
            }

        }
      },
    },
  };
};

export default getState;
