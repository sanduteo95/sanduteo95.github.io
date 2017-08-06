$(function () {
	"use strict";
    if($(window).width() > 768) {
        $('.block-timeline').each(function() {
            if(!isScrolledIntoView(this)) {
                $(this).addClass('is-hidden');
            }
	   });
    }
	
	$(window).resize(function () {
		hideContent();
		
		var width = $('#title-timeline').width()+parseInt($('#title-timeline').css('padding-left'))+parseInt($('#title-timeline').css('padding-right'));
	});
	$(window).resize();
	
    $('.description-timeline').each(function() {
        if(this.length == 0) {
            this.style.display = 'none';
        }
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
	});
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}