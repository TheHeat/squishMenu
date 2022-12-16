// Add up the widths of all the itemClass elements inside the container
// We only do it once in the default state
// because they're apt to change width when the container is .too-small
const getItemsWidth = ({ container, itemClass, callback }) => {
	let sum = 0;
	const items = container.querySelectorAll(`.${itemClass}`);

	if (items.length > 0) {
		items.forEach((item) => {
			sum += item.offsetWidth * 1.1;
		});
	} else {
		console.warn("No elements with itemClass found in the container");
	}

	if (typeof callback === "function") callback();
	return sum;
};

export default getItemsWidth;
