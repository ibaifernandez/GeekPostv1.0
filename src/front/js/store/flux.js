let url = "https://3001-ibaifernand-geekpostv10-kr8unxhs4kh.ws-us93.gitpod.io"

const getState = ({
        getStore,
        getActions,
        setStore
    }) => {
        return {

            store: {

                user: {
                    first_name: "",
                    last_name: "",
                    identity: "",
                    facebook_profile: "",
                    instagram_profile: "",
                    tiktok_profile: "",
                    website_url: "",
                    logo: "",
                    contact: ""
                },

                post: {
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
                                first_name: data.first_name,
                                last_name: data.last_name,
                                identity: data.identity,
                                facebook_profile: data.facebook_profile,
                                instagram_profile: data.instagram_profile,
                                tiktok_profile: data.tiktok_profile,
                                website_url: data.website_url,
                                logo: data.logo,
                                contact: data.contact_data,
                            }
                        });
                    } catch (e) {
                        console.log(e);
                    }
                },

                logOut: () => {
                    localStorage.removeItem("token");
                    setStore({
                        auth: false,
                    });
                    console.log(getStore())
                },

                getInfoPost: async (identity, main_text,secondary_text,price,logo,formality,main_color,secondary_color,aux_color,ratio,image_id,post1_1,post9_16,contact_data,keyword1,keyword2,keyword3) => {
                    let api = url + "/api/infoPost";
                    try {
                        const resp = await fetch((api), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + localStorage.getItem("token"),
                            },
                            body: JSON.stringify({
                                identity,
                                main_text,
                                secondary_text,
                                price,
                                logo,
                                formality,
                                main_color,
                                secondary_color,
                                aux_color,
                                ratio,
                                image_id,
                                post1_1,
                                post9_16,
                                contact_data,
                                keyword1,
                                keyword2,
                                keyword3,
                            }),
                        })
                    } catch (e) {
                        console.log(e);
                    }
                },

                setMainImage: (imageUrl) => {
                    setStore({
                        post : {
                            mainImage: imageUrl
                        }
                    });
                }
            }
            }
        }

        export default getState;