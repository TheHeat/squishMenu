// Demo only
let containerWidth;
let itemsWidth;

const reportWidths = () => {
  document.querySelector("#container-width").textContent = containerWidth;
  document.querySelector("#items-width").textContent = itemsWidth;
};

// Add up the widths of all the .menu-items
// We only do it once in the default state
// because they're apt to change width when the container is .too-small
const getItemsWidth = (container, callback) => {
  var sum = 0;

  container.querySelectorAll(".menu-item").forEach(item => {
    sum += item.offsetWidth;
  });

  typeof callback === "function" && callback();
  return sum;
};

// Demo only
window.onresize = reportWidths;

document.addEventListener("DOMContentLoaded", () => {
  squishMenu({ containerId: "menu-1", toggleClass: ".menu-1-toggle" });
  squishMenu({ containerId: "menu-2", toggleClass: ".menu-2-toggle" });

  /// Demo only
  reportWidths();
});
