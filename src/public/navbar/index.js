import { pageService } from "../services/pages.service.js";

const dropDown = document.getElementById("dropdown-menu-pages");

init();

function init() {
	bindPages();
}

async function bindPages() {
	const pages = await pageService.getPages();
	const rowHtml = pages.map(forgePageRowHtml).join("");

	dropDown.innerHTML = rowHtml;
}

function forgePageRowHtml(page) {
	return `<li class="nav-item">
               <a href="${page.url}" class="nav-link">${page.title}</a>
            </li>`;
}
