import getItemsWidth from "./getItemsWidth";

// squishMenu
const squishMenu = (options) => {
  const container = document.getElementById(options.containerId);

  if (container === undefined) {
    console.log("containerId is undefined");
  } else if (container === null) {
    console.log("containerId is not available");
  } else {
    const itemsWidth = getItemsWidth(container, () => {
      // After we've calculated the width of all the .menu-items
      // add class .squish-ready to the container
      container.classList.add("squish-ready");
    });

    // Set appropriate classes
    const setStates = () => {
      const containerWidth = container.offsetWidth;

      if (itemsWidth <= containerWidth) {
        container.classList.remove("too-small");
        container.classList.remove("is-open");
      }

      if (itemsWidth > containerWidth) {
        container.classList.add("too-small");
      }
    };

    setStates();

    window.addEventListener("resize", setStates);

    const toggles = document.getElementsByClassName(options.toggleClass);

    if (toggles.length > 0) {
      // Click the .menu-toggle to open the menu. Obvs.
      document.querySelectorAll(`.${options.toggleClass}`).forEach((item) =>
        item.addEventListener("click", () => {
          container.classList.toggle("is-open");
        })
      );
    } else {
      console.log("No toggleClass found or toggleClass is undefined");
    }
  }
};

export default squishMenu;
