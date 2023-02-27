function fieldsLoad() {
	const userNameField = document.getElementById("userNameField");
	const passwordField = document.getElementById("passwordField");
	const form = document.getElementById("form");
}

userNameField.addEventListener("change", (ev) => fieldUpdate(ev));
passwordField.addEventListener("change", (ev) => fieldUpdate(ev));
form.addEventListener("submit", (ev) => handleLogin(ev), true);

//Configs, classes and models
let auth_token = "";

class Api {
	BASE_URL = "http://localhost:3000/";
}
const api = new Api();
const ENDPOINTS = {
	login: "login/",
	adminPanelLogin: "cPanel/login/",
	adminPanel: "cPanel/",
};

class CustomRequest {
	methods = {
		GET: "GET",
		POST: "POST",
		PUT: "PUT",
		DELETE: "DELETE",
	};
	headers = {
		appJson: "Content-Type: application/json",
		textHtml: "Content-Type: text/html",
		jwt: `authorization: "Bearer " + ${auth_token}`,
	};
}
const request = new CustomRequest();

class Names {
	static auth_token = "auth_token";
}

class Login {
	username = "";
	password = "";
	constructor() {}
}
const formFields = new Login();

// Functions
function fieldUpdate(event) {
	const ev = event.target;
	formFields[ev.name] = ev.value;
	console.log(formFields);
}

async function getAuthToken() {
	try {
		const response = await fetch(api.BASE_URL + ENDPOINTS.adminPanelLogin, {
			headers: request.headers.appJson,
			method: request.methods.POST,
			body: jsonStringifier(formFields),
		}).then((response) => {
			return response.json();
		});
		auth_token = response.auth_token;
		localStorage.setItem("auth_token", "test");
		return auth_token;
	} catch (err) {
		console.log(err.message);
	}
}

async function handleLogin(event) {
	event.preventDefault();
	try {
		// if (auth_token.length == 0) {
		// 	const auth_token = getAuthToken();
		// }
		// console.log(auth_token);
		const response2 = await fetch(api.BASE_URL + ENDPOINTS.adminPanel, {
			headers: {
				authorization: "Bearer " + auth_token,
				"content-type": "application/json",
			},
		}).then((response) => response.json());
		console.log(auth_token);
		console.log(response2);
	} catch (error) {
		console.log(error.message);
		throw new Error("Failed to fetch data");
	}
}

function jsonStringifier(data) {
	return JSON.stringify(data);
}
