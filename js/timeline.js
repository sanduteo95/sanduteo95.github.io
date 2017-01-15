$(function () {
	"use strict";
	$('.block-timeline').each(function() {
		if(!isScrolledIntoView(this)) {
			$(this).addClass('is-hidden');
		}
	});
	
	$(window).resize(function () {
		hideContent();
	});
	
	$(window).on('scroll', function() {
		hideContent();
	});
});

function hideContent() {
	$('.block-timeline').each(function() {
		if(isScrolledIntoView(this) && $(this).hasClass('is-hidden')) {
			$(this).removeClass('is-hidden').addClass('bounce-in');
		}
		console.log(this);
	});
}
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}