$(document).ready(function(){

	var prevArrow = '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">' +
										'<svg class="svg" width="30" height="28"><use xlink:href="images/sprite.svg#prev"/></svg>' +
									'</button>',
			nextArrow = '<button class="slick-next slick-arrow" aria-label="Next" type="button">' +
										'<svg class="svg" width="30" height="28"><use xlink:href="images/sprite.svg#next"/></svg>' +
									'</button>'

	$("[data-slider]").each(function() {
		var options = $(this).data("slider") || {},
				defaults = {
					prevArrow: prevArrow,
					nextArrow: nextArrow
				};

		$(this).slick($.extend(defaults, options))
	});

	$("[data-open-menu]").click(function() {

	});

	$("[data-fancybox]").fancybox({
		autoFocus: false
	})

	$("[data-toggle-parent]").click(function() {
		var toggleClass = $(this).data("toggle-parent");

		$(this).parent().toggleClass(toggleClass)
	});
});