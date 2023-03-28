let url = "https://3001-ibaifernand-geekpostv10-gfvsk2kj0s4.ws-us92.gitpod.io"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			user: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			fetchCredentials: async ({ email, password }) => {
				try {
				  const resp = await fetch(url + "/api/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password }),
				  });
				  if (resp.status === 401) {
					return false;
				  } else if (resp.status === 400) {
					return false;
				  }
				  if (resp.status === 200) {
					const data = await resp.json();
					localStorage.setItem("token", data?.access_token);
					setStore({ auth: true });
					return true;
				  }
				} catch (error) {
				  console.log("Error loading message from backend", error);
				}
			},
			createUser: async ({ email, password, firstName }) => {
				try {
				  const resp = await fetch(url + "/api/signup", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password, first_name: firstName }),
				  });
				  if (resp.status === 401) {
					return false;
				  } else if (resp.status === 400) {
					return false;
				  }
				  if (resp.status === 200) {
					const data = await resp.json();
					localStorage.setItem("token", data?.access_token);
					setStore({ auth: true });
					return true;
				  }
				} catch (error) {
				  console.log("Error loading message from backend", error);
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
				setStore({ user: { 
					first_name: data.first_name,
					last_name: data.last_name,
					business_name: data.business_name,
					facebook_profile: data.facebook_profile,
					instagram_profile: data.instagram_profile,
					tiktok_profile: data.tiktok_profile,
					website_url: data.website_url,
				 } });
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
		
		}
	};
};

export default getState;
