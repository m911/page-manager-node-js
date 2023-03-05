function getPages() {
	return fetch("/api/pages").then((res) => res.json());
}

function deletePage(id) {
	return fetch(`/cPanel/${id}`, { method: "DELETE" }).then((res) => res.json());
}

export const pageService = {
	getPages,
	deletePage,
};
