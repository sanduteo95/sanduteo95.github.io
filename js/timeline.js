$(function () {
	"use strict";
	$(window).on('scroll', function(){
		$('.block-timeline').each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.date-timeline').hasClass('is-hidden') ) {
				$(this).find('.date-timeline, .content-timeline').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});