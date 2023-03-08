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
	newPageForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		e.stopPropagation();
		const urlSlug = await pageService.getPages();
		const url = urlSlug.map()
		sessionStorage.setItem("event", JSON.stringify(e));
		sessionStorage.setItem("event0", JSON.stringify(e.target[0].value));
		sessionStorage.setItem("event1", JSON.stringify(e.target[1].value));
		sessionStorage.setItem("event2", JSON.stringify(e.target[2].value));
		debugger;
		sessionStorage.setItem("event3", JSON.stringify(e.target[3].value));
		sessionStorage.setItem("event target", JSON.stringify(e.target));
	});
}
