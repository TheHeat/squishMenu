/*global jQuery */

/*
* squishMenu 0.3
*
* jQuery plugin which adds state classes to the targetted element
*
* Depends on the targetted element containing only .menu-item(s)
* Adds a .squish-ready state to the container once itemsWidth is calculated
* Includes the toggling of .is-open state by clicking a .menu-toggle element that can be anywhere in the DOM
*
* The MIT License (MIT)
* Copyright 2015, Marc Heatley @marcheatley http://properdesign.rs
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without restriction,
* including without limitation the rights to use, copy, modify,
* merge, publish, distribute, sublicense, and/or sell copies of the Software,
* and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
* IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
* DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
* TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
* THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
*/

// For compatability with Browserfy and Webpack
if(typeof require === "function"){
  // We're in a packaging environment
  global.$ = global.jQuery = require('jquery');
}

(function( $ ){

  $.fn.squishMenu = function() {

    container = this;
    var itemsWidth = getItemsWidth(function(){
      // After we've calculated the width of all the .menu-items
      // add class .squish-ready to the container
      container.addClass('squish-ready');
    });

    // Add up the widths of all the .menu-items
    // We only do it once in the default state
    // because they're apt not to change width when the container is .too-small
    function getItemsWidth(callback){
      var sum = 0;
      container.find('.menu-item').each( function(callback){
        var elementWidth = $(this).outerWidth(true);
        sum += elementWidth;
      });

      typeof callback === 'function' && callback();
      return sum;
    };

    // Set appropriate classes
    function setStates(){

      containerWidth = container.width();

      if (itemsWidth <= containerWidth) {
        container.removeClass('too-small');
        container.removeClass('is-open');
      }

      if (itemsWidth > containerWidth) {
        container.addClass('too-small');
      }
    }

    setStates();

    $(window).resize(function() {
      setStates();
    });

    // Click the .menu-toggle to open the menu. Obvs.
    $( '.menu-toggle').click(function(){
      container.toggleClass('is-open');
    });
  }

// Requires jQuery
})( window.jQuery );