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
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();
		e.stopPropagation();
		pageService.getToken(loginCredentials);
	});

	utils.addEventListener(loginForm, "input", "form-control", (e) => {
		utils.updateFieldValues(e, loginCredentials);
	});
}
