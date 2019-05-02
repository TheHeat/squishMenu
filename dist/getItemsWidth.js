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

export default getItemsWidth;
