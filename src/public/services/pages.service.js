function getPages() {
	// const pages = [{ id: 1, title: "title 1" }];
	return fetch("/api/pages").then((res) => res.json());
}

export const pageService = {
	getPages,
};
