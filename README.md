# squishMenu

## squishMenu.js automagically squishes menus the minute they get too big for their boots

Actually it doesn't.

It just makes it easier for _you_ to squish the menu when you need to by alerting you to the fact the container is `.too-small`. What you decide to do with that information is up to you.

The script measures the width of each menu item to create an itemsWidth value and compares it to the containerWidth. I've included some basic styles to illustrate the point.

## User Manual

Target your menu container element with its ID and set a toggle classname

    squishMenu({
      containerId: "menu-1",
      toggleClass: "menu-1-toggle",
    });

The script looks for and measures the combined width of all `.list-item` elements inside the targetted container. This is a naming convention from WordPress that is as good as any.

It's important that the menu-items aren't stretched more than their minimum possible length in their default state. If they're usable measurement to compare to the container. We add a `.squish-ready` class once the measurements are taken so you can sprinkle extra magic then.

### Optional Params

#### threshold

There are paramaters to set a minimum width for the function to run. Set in pixels, when the container is below that width it will always be `.too-small` and `.below-threshold`

#### itemClass

You can overide the default menu item class. The default is `.menu-item`

#### degug

`debug:true` will print the targeted container element and calculated lengths to the console.

    squishMenu({
        containerId: "menu-2",
        itemClass: "item",
        toggleClass: "menu-2-toggle",
        threshold: 700,
        debug: true
    });

### Additional toggles

Because the menu toggle is defined by a class name, it's possible to create additional, external menu toggles.

## Params

<table>
      <thead>
         <tr>
            <th>Param</th>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
            <th>Description</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>containerId</td>
            <td>string</td>
            <td>undefined</td>
            <td>required</td>
            <td>
               The outer element of the menu that you want measurements to be based
               on
            </td>
         </tr>
         <tr>
            <td>toggleClass</td>
            <td>string</td>
            <td>undefined</td>
            <td>optional</td>
            <td>A classname to attach menu toggle functionality to.</td>
         </tr>
         <tr>
            <td>itemClass</td>
            <td>string</td>
            <td>menu-item</td>
            <td>optional</td>
            <td>The classname of the individual menu items to be measured.</td>
         </tr>
         <tr>
            <td>threshold</td>
            <td>number</td>
            <td>undefined</td>
            <td>optional</td>
            <td>
               A lower threshold for the function to run. Set in pixels, when the
               container is below that width it will always be
               <code>.too-small</code> and <code>.below-threshold</code>.
            </td>
         </tr>
         <tr>
            <td>debug</td>
            <td>bool</td>
            <td>false</td>
            <td>optional</td>
            <td>
               If true squishMenu will log the container DOM node and measurements
               to the console.
            </td>
         </tr>
      </tbody>
   </table>
