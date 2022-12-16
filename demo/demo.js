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

// squishMenu
const squishMenu = (options) => {
	const itemClass = options.itemClass ? options.itemClass : "menu-item";
	const container = document.getElementById(options.containerId);

	if (container === undefined || container === null) {
		console.warn("containerId is undefined");
	} else {
		const itemsWidth = getItemsWidth({
			container,
			itemClass,
			callback: () => {
				// After we've calculated the width of all the menu items + 10%
				// add class .squish-ready to the container
				container.classList.add("squish-ready");
			},
		});

		// Set appropriate classes
		const setClasses = () => {
			const containerWidth = container.offsetWidth;

			if (options.debug === true) {
				console.log({ container, itemsWidth, containerWidth });
			}

			if (options.threshold && containerWidth <= options.threshold) {
				container.classList.add("below-threshold");
				container.classList.add("too-small");
			} else if (itemsWidth <= containerWidth) {
				container.classList.remove("below-threshold");
				container.classList.remove("too-small");
				container.classList.remove("is-open");
			} else if (itemsWidth > containerWidth) {
				container.classList.remove(["below-threshold"]);
				container.classList.add("too-small");
			}
		};

		setClasses();

		window.addEventListener("resize", setClasses);

		const toggles = document.getElementsByClassName(options.toggleClass);

		if (toggles.length > 0) {
			// Click the .menu-toggle to open the menu. Obvs.
			document.querySelectorAll(`.${options.toggleClass}`).forEach((item) =>
				item.addEventListener("click", () => {
					container.classList.toggle("is-open");
				})
			);
		} else {
			console.warn("No toggleClass found or toggleClass is undefined");
		}
	}
};
