import { utils } from "../utils/utils.js";
import { pageService } from "../services/pages.service.js";

const loginForm = document.getElementById("loginForm");

const loginCredentials = {
	username: "",
	password: "",
};

init();

function init() {
	addEventListeners();
}

function addEventListeners() {
	// utils.addEventListener(loginForm, "submit", "form-control", (e) => {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	console.log(e.target);
	// });

	utils.addEventListener(loginForm, "input", "form-control", (e) => {
		console.log(e.target.value);
		utils.updateFieldValues(e.target, loginCredentials);
		console.log(loginCredentials);
	});

	// form.addEventListener("submit", async (e) => {
	// 	// const getToken = await fetch("/login", { method: "POST" });
	// });
}
