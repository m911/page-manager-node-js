import { utils } from "../../utils/utils.js";
import { pageService } from "../../services/pages.service.js";

const newPageForm = document.getElementById("newPageForm");

class IPage {
	title = "";
	metaDescription = "";
	pageContent = "";
	url = "";
}

const formPage = new IPage();

init();

function init() {
	attachEventListeners();
}

function attachEventListeners() {
	utils.addEventListener(newPageForm, "input", "form-control", (target) => {
		utils.updateFieldValues(target, formPage);
	});
}
