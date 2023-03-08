import { utils } from "../../utils/utils.js";
import { pageService } from "../../services/pages.service.js";

const newPageForm = document.getElementById("newPageForm");
const forms = document.querySelectorAll(".needs-validation");

class IPage {
	id = null;
	title = "";
	metaDescription = "";
	pageContent = "";
	url = "";
}

const formPage = new IPage();
let pagesUrl;
init();

function init() {
	attachEventListeners();
	fetchPages();
}

function attachEventListeners() {
	utils.addEventListener(newPageForm, "input", "form-control", (target) => {
		utils.updateFieldValues(target, formPage);
	});
}
function handleSubmit() {
	if (isUrlUnique(formPage.url)) {
		pageService.postPage(formPage).then((response) => {
			console.log(response);
		});
	}
}

async function fetchPages() {
	const pages = await pageService.getPages();
	const urls = pages.map((page) => page.url.toLowerCase());
	pagesUrl = urls;
}
async function isUrlUnique(url) {
	url = url.trim().toLowerCase();
	const urlIndex = pagesUrl.indexOf(url);
	if (urlIndex !== -1) {
		return false;
	}
	return true;
}
