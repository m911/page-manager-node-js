function fieldsLoad() {
	const userNameField = document.getElementById("userNameField");
	const passwordField = document.getElementById("passwordField");
	const form = document.getElementById("form");
}

userNameField.addEventListener("change", (ev) => fieldUpdate(ev));
passwordField.addEventListener("change", (ev) => fieldUpdate(ev));
// form.addEventListener("submit", (ev) => handleLogin(ev), true);

class Api {
	BASE_URL = "http://localhost:3000";
	ENDPOINTS = {
		cPanelLogin: "cPanel/login",
		adminPanel: "cPanel",
	};
}

const api = new Api();

class Login {
	username = "";
	password = "";

	constructor() {}
}

const formFields = new Login();

function fieldUpdate(event) {
	const ev = event.target;
	formFields[ev.name] = ev.value;
	console.log(ev.value);
	console.log(formFields);
}
async function handleLogin(event) {
	console.log(event);
	console.log(formFields);
	try {
		const response = await fetch(
			`${api.BASE_URL}/${api.ENDPOINTS.cPanelLogin}`,
			{
				method: "POST",
				body: JSON.stringify(formFields),
				headers: {
					"Content-Type": "application/json",
					// Accept: "*/*",
					// "Cache-Control": "no-cache",
					// Host: "localhost:3000",
					// "Accept-Encoding": "gzip, deflate, br",
					// Connection: "keep-alive",
					// "Content-Length": formFields.toString().length,
				},
			}
		);
		await response.json();
		const { access_token, token_type, expires_in } = response;
		document.cookie = `accessToken=${token_type} ${access_token};expires=${expires_in}; path=/cPanel`;
	} catch (err) {
		console.log(err.message);
	}
}
const printConsole = () => {
	console.log("Button clicked");
};
const pages = [];
