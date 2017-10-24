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

	(function range($range, $from, $to) {
		var $parent = $range.closest(".range"),
				$from = $parent.find(".range__from"),
				$to = $parent.find(".range__to");

		$range.ionRangeSlider({
			type: "double",
			hide_from_to: true,
			onChange: function (data) {
				$from.val(data.from);
				$to.val(data.to);
			}
		});

		$to.change(function () {
			$range.data("ionRangeSlider").update({
				to: $(this).val()
			});
		})

		$from.change(function () {
			$range.data("ionRangeSlider").update({
				from: $(this).val()
			});
		})
	})($("input[type=range]"));

	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
  });

  var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		touchRatio: 0.2,
		centeredSlides: true,
		slideToClickedSlide: true
	});

	galleryTop.controller.control = galleryThumbs;
	galleryThumbs.controller.control = galleryTop;

	new Swiper('.nav-tabs .swiper-container', {
		slidesPerView: 6,
		breakpoints: {

			992: {
				slidesPerView: 'auto',
				// pagination: {
				// 	el: '.swiper-pagination',
				// 	type: 'progressbar',
				// }
			}
		}
	})
});