const config = {
	BASE_URL: "http://localhost:3000",
};

async function getPages() {
	const res = await fetch(`${config.BASE_URL}/api/pages`);
	return await res.json();
}

async function deletePage(id) {
	const res = await fetch(`${config.BASE_URL}/cPanel/${id}`, {
		method: "DELETE",
	});
	return await res.json();
}

async function postPage(body) {
	const res = await fetch(`${config.BASE_URL}/cPanel/new`, {
		method: "post",
		body: body,
	});
	return await res.json();
}

async function getToken(body) {
	await fetch(`${config.BASE_URL}/login`, {
		headers: {
			"Content-Type": "application/json",
		},
		method: "post",
		body: JSON.stringify(body),
	});
	await location.assign("/cPanel");
}

export const pageService = {
	getPages,
	deletePage,
	postPage,
	getToken,
};
