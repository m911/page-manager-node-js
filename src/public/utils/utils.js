function addEventListener(element, event, cssClass, callback) {
	element.addEventListener(event, (e) => {
		const hasClass = e.target.classList.contains(cssClass);
		if (!hasClass) return;

		callback(e.target);
	});
}

export const utils = {
	addEventListener,
};
