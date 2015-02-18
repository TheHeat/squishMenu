# squishMenu
## To squish, or not to squish? That is the question. squishMenu.js automagically squishes menus the minute they get too big for their boots

Actually it doesn't. It just makes it easier for _you_ to squish the menu when you need to by alerting you to the fact the container is <code>.too-small</code>. What you decide to do with that information is up to you.

The script measures the width of each menu item to create an <var>itemsWidth</var> value and compares it to the <var>containerWidth</var>. I've included some basic styles to illustrate the point.

##User Manual

1. squishMenu uses jQuery - you'll need that.
2. Target your container with <code>$('#your-container').squishMenu();</code>
3. The script looks for and measures the combined width of all <code>.list-item</code> elements inside the targetted container. This is a naming convention from WordPress that is as good as any.
4. It's important that the menu-items are <code>display:inline-block;</code> in their default state. Anything fancypants like flexbox wont give you a usable measurement to compare to the container.