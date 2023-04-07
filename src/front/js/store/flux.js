let url = "https://3001-ibaifernand-geekpostv10-yj3bpkw39wq.ws-us93.gitpod.io";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: {},
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
              errorLogin: "Usuario o Contraseña incorrecta",
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
            return true;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
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
              errorLogin: "Cuenta ya existente",
            });
            return false;
          } else if (resp.status === 400) {
            return false;
          }
          if (resp.status === 200) {
            const data = await resp.json();
            localStorage.setItem("token", data?.access_token);
            setStore({
              errorLogin: "",
            });
            setStore({
              auth: true,
            });
            return true;
          }
        } catch (error) {
          console.log("Error loading message from backend", error);
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
              first_name: data.first_name,
              last_name: data.last_name,
              email: data.email,
              contact_data: data.contact_data,
              facebook_profile: data.facebook_profile,
              instagram_profile: data.instagram_profile,
              tiktok_profile: data.tiktok_profile,
              identity: data.identity,
            },
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
        console.log(getStore());
      },

      getInfoPost: async (
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
        keyword3
      ) => {
        let api = url + "/api/infoPost";
        try {
          const resp = await fetch(api, {
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
          });
        } catch (e) {
          console.log(e);
        }
      },

        putProfile: async (
        first_name,
        last_name,
        contact_data,
        facebook_profile,
        instagram_profile,
        tiktok_profile,
        identity,
        logo,
        main_color,
        secondary_color,
        aux_color
      ) => {
        let api = url + "/api/profile";
        try {
          const resp = await fetch(api, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify({
              first_name,
              last_name,
              contact_data,
              facebook_profile,
              instagram_profile,
              tiktok_profile,
              identity,
              logo,
              main_color,
              secondary_color,
              aux_color,
            }),
          });
        } catch (e) {
          console.log(e);
        }
      },
    },
  };
};

export default getState;
