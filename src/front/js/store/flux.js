let url = process.env.BACKEND_URL;

const getState = ({ getStore, getActions, setStore }) => {
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
            infoPost: {},
            errorLogin: "",
            },

            actions: {
                fetchCredentials: async ({ email, password }) => {
                    try {
                    const resp = await fetch(url + "/api/login", {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                        email: email,
                        password: password,
                        }),
                    });
                
                    if (resp.status === 404) {
                        setStore({
                        errorLogin: "Usuario o contraseña incorrecta",
                        });
                        return false;
                    } else if (resp.status === 400) {
                        return false;
                    }
                
                    if (resp.status === 200) {
                        const data = await resp.json();
                        localStorage.setItem("token", data?.access_token);
                        setStore({
                        auth: true,
                        });
                        await getActions().getUserDetails(); // Actualizar la información del usuario
                        return true;
                    }
                    } catch (error) {
                    console.log("Error cargando mensaje desde el back-end.", error);
                    return false;
                    }
                },
                

            createUser: async ({ email, password, firstName }) => {
                try {
                const resp = await fetch(url + "/api/signup", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    email,
                    password,
                    first_name: firstName,
                    }),
                });
                if (resp.status === 403) {
                    setStore({
                    errorSignup:
                        "Ha habido un fallo con el registro. Por favor, inténtelo de nuevo.",
                    });
                    return false;
                } else if (resp.status === 400) {
                    return false;
                }

                if (resp.status === 200) {
                    const data = await resp.json();
                    localStorage.setItem("token", data?.access_token);
                    setStore({
                    errorSignup: "Sin errores a la hora del registro.",
                    });
                    setStore({
                    auth: true,
                    });
                    return true;
                }
                } catch (error) {
                console.log("Error cargando mensaje desde el back-end.", error);
                return false;
                }
            },

            getUserDetails: async () => {
                let api = url + "/api/profile";
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
                    email: data.email,
                    },
                });
                } catch (error) {
                console.log(error);
                }
            },

            logOut: () => {
                localStorage.clear();
                setStore({
                auth: false,
                });
            },

            storeInfoPost: async (
                identity,
                mainText,
                secondaryText,
                price,
                logo,
                formality,
                mainColor,
                secondaryColor,
                auxColor,
                ratio,
                contact,
                cta
            ) => {
                getActions().cleanInfoPost();
                let api = url + "/api/infopost";
                try {
                const resp = await fetch(api, {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
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
                    cta,
                    }),
                });
                if (resp.ok) {
                    console.log("La petición se ha completado con éxito.");
                    // ¿Qué puedo hacer con la respuesta?
                } else {
                    console.error(
                    "Error en la petición:",
                    resp.status,
                    resp.statusText
                    );
                }
                } catch (error) {
                console.error("Error en la petición:", e);
                }
            },

            getInfoPost: async () => {
                let api = url + "/api/infopost";
                try {
                const resp = await fetch(api, {
                    method: "GET",
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                });
                if (resp.status === 200) {
                    const data = await resp.json();
                    setStore({
                    infoPost: {
                        cta: data.post.cta,
                        identity: data.post.identity,
                        mainText: data.post.main_text,
                        secondaryText: data.post.secondary_text,
                        price: data.post.price,
                        contactData: data.post.contact_data,
                        mainColor: data.post.main_color,
                        secondaryColor: data.post.secondary_color,
                        auxColor: data.post.aux_color,
                        formality: data.post.formality,
                        ratio: data.post.ratio,
                        logo: data.post.logo,
                        id: data.post.id,
                        imageUrl: data.post.image_url
                    },
                    });
                    return true;
                }
                } catch (error) {
                console.log(error);
                return false;
                }
            },

            addUrlToPost: async (postId, imageUrl) => {
                try {
                const resp = await fetch(`${url}/api/post/${postId}/image-url`, {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    image_url: imageUrl,
                    }),
                });
                } catch (error) {}
            },
            cleanInfoPost: () => {
                setStore({
                infoPost: {},
                });
            },
            cleanLocalStorage: () => {
                const elementsToRemove = ["mainImage", "logo", "finale-composition"];
                elementsToRemove.forEach((element) => localStorage.removeItem(element));
            },

            putProfile: async (profileData) => {
                const api = url + "/api/profile";
                try {
                console.log("Datos que se envían al servidor: ", profileData);
                const resp = await fetch(api, {
                    method: "PUT",
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                    body: JSON.stringify({
                    name: profileData.name,
                    lastName: profileData.lastName,
                    email: profileData.email,
                    contact: profileData.contact,
                    facebookProfile: profileData.facebookProfile,
                    instagramProfile: profileData.instagramProfile,
                    tiktokProfile: profileData.tiktokProfile,
                    identity: profileData.identity,
                    logo: profileData.logo,
                    mainColor: profileData.mainColor,
                    secondaryColor: profileData.secondaryColor,
                    auxColor: profileData.auxColor,
                    }),
                });
            
                if (resp.ok) {
                    console.log("La información se ha actualizado correctamente [MENSAJE DE FLUX].");
                    const updatedUserData = await resp.json();
                    setStore({
                        user: {
                            name: profileData.name,
                            lastName: profileData.lastName,
                            email: profileData.email,
                            contact: profileData.contact,
                            facebookProfile: profileData.facebookProfile,
                            instagramProfile: profileData.instagramProfile,
                            tiktokProfile: profileData.tiktokProfile,
                            identity: profileData.identity,
                            logo: profileData.logo,
                            mainColor: profileData.mainColor,
                            secondaryColor: profileData.secondaryColor,
                            auxColor: profileData.auxColor,
                        },
                    });
                    return updatedUserData;
                } else {
                    const errorData = await resp.json();
                    return errorData;
                }
                } catch (e) {
                console.log(e);
                throw new Error("Ha ocurrido un error en la actualización de perfil");
                }
            }
            
            },
        };
        };

        export default getState;
