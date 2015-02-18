// Demo only
var containerWidth;
var itemsWidth;

function reportWidths(){
  $('#container-width').html(containerWidth);
  $('#items-width').html(itemsWidth);
}

// squishMenu
	$.fn.squishMenu = function() {

		container = this;
		itemsWidth = getItemsWidth();

		// Add up the widths of all the .menu-items
		// We only do it once in the default state
		// because they're apt to change width when the container is .too-small
		function getItemsWidth(){
			var sum = 0;
			container.find('.menu-item').each( function(){
				var elementWidth = $(this).outerWidth(true);
				sum += elementWidth;
			});
			return sum;
		};

		// Set appropriate 
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
		container.find('.menu-toggle').click(function(){
			container.toggleClass('is-open');
		});
	}

$(document).ready(function(){
	$('#site-nav').squishMenu();

	// Demo only
	reportWidths();

	$(window).resize(function(){
	  reportWidths();
	});

});