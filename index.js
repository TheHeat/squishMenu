// Add up the widths of all the .menu-items
// We only do it once in the default state
// because they're apt to change width when the container is .too-small
getItemsWidth = (container, callback) => {
  var sum = 0;

  container.querySelectorAll(".menu-item").forEach(item => {
    sum += item.offsetWidth;
  });

  typeof callback === "function" && callback();
  return sum;
};

// squishMenu
const squishMenu = options => {
  const container = document.getElementById(options.containerId);

  itemsWidth = getItemsWidth(container, () => {
    // After we've calculated the width of all the .menu-items
    // add class .squish-ready to the container
    container.classList.add("squish-ready");
  });

  // Set appropriate
  function setStates() {
    containerWidth = container.offsetWidth;

    if (itemsWidth <= containerWidth) {
      container.classList.remove("too-small");
      container.classList.remove("is-open");
    }

    if (itemsWidth > containerWidth) {
      container.classList.add("too-small");
    }
  }

  setStates();

  window.addEventListener("resize", setStates);

  // Click the .menu-toggle to open the menu. Obvs.
  document.querySelectorAll(options.toggleClass).forEach(item =>
    item.addEventListener("click", () => {
      container.classList.toggle("is-open");
    })
  );
};

export default squishMenu;
