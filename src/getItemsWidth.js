// Add up the widths of all the .menu-items
// We only do it once in the default state
// because they're apt to change width when the container is .too-small
const getItemsWidth = (container, callback) => {
  let sum = 0;
  const items = container.querySelectorAll('.menu-item');

  if (items.length > 0) {
    items.forEach((item) => {
      sum += item.offsetWidth;
    });
  } else {
    console.error('No .menu-items found in the container');
  }

  if (typeof callback === 'function') callback();
  return sum;
};

export default getItemsWidth;
