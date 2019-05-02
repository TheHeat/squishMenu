# squishMenu

## To squish, or not to squish? That is the question. squishMenu.js automagically squishes menus the minute they get too big for their boots

Actually it doesn't. It just makes it easier for _you_ to squish the menu when you need to by alerting you to the fact the container is <code>.too-small</code>. What you decide to do with that information is up to you.

The script measures the width of each menu item to create an <var>itemsWidth</var> value and compares it to the <var>containerWidth</var>.

##But why?

Setting fixed breakpoints in designs isn't always possible. Clients may be apt to add very long menu items and knacker up your beautiful design.

By basing the menu state on _the actual conditions_ ie the width of the menu-items in use and the available space for them, we can hold off hiding our navigation items until we _really_ need to.

I've included some basic styles to illustrate the point in the demo, and [there's a CodePen version you can play with too](http://codepen.io/TheHeat/pen/jEqqvW).

##Now with added flex-ability

squishMenu now adds a <code>.squish-ready</code> class when it's done its sums. This means as long as your <code>.menu-item</code> is inline-block by default, you can style <code>.squish-ready .menu-item</code> however you like (ie flex-grow those suckers).

##User Manual

1. squishMenu uses jQuery - you'll need that.
2. Target your menu container element ID and toggle class name in a settings object <code>squishMenu(
   {
   containerId: "menu-1",
   toggleClass: ".menu-1-toggle"
   }
   );</code>
3. The script looks for and measures the combined width of all <code>.menu-item</code> elements inside the targetted container. This is a naming convention from WordPress that is as good as any.
4. It's important that the menu-items are <code>display:inline-block;</code> in their default state. Anything fancypants like flexbox wont give you a usable measurement to compare to the container. (you can flex them up after .squish-ready is added).
5. The script requires at least one instance of the named menu toggle element in the container for opening and closing the menu when it is `.too-small`. Clicking the toggle will add/remove a `.is-open` class on the container.
