const deletePage = async (id) => {
	try {
		await fetch(`delete?id=${id}&continue=`, {
			method: "DELETE",
			body: JSON.stringify({ id, continue: "/cPanel" }),
		});
	} catch (error) {
		console.log(error.message);
	}
};
