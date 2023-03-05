import { utils } from "../utils/utils.js";
import { pageService } from "../services/pages.service.js";

const tbody = document.getElementById("table-pages");
init();

function init() {
	bindPages();
	attachEventListeners();
}

async function bindPages() {
	const pages = await pageService.getPages();
	const rowHtml = pages.map(forgePageRowHtml).join("");

	tbody.innerHTML = rowHtml;
}

function attachEventListeners() {
	utils.addEventListener(tbody, "click", "btn-delete", (target) => {
		const pageId = target.getAttribute("page-id");
		deletePage(pageId);
	});
}

//TODO: Confirmation
function deletePage(pageId) {
	console.log(pageId);
}

function forgePageRowHtml(page) {
	return `<tr>
                    <td>${page.id}</td>
                    <td>${page.url}</td>
                    <td>${page.title}</td>
                    <td>
                        <button type="button" class="btn-delete" page-id="${page.id}">DELETE</button>
                    </td>
                </tr>`;
}
