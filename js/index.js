/*jslint browser: true*/
/*global $, jQuery, alert*/


function loadPage(page) {
	"use strict";
	var win = window.open(page, '_blank');
	if (win) {
		win.focus();
	} else {
		alert('Please allow popups for this website');
	}
}

$(function () {
	"use strict";
    $('#more-info').hide();
	
	setTimeout(function () {
		$('#img-middle').removeClass('img-pop-up');
		$('li').map(function () {
			$(this).show();
		});
	}, 1000);

	$(window).resize(function () {
		var width = $('#img-middle').width();
		var parentHeight = $('#img-middle').offsetParent().height();
		var height = width;
		var heightPercentage = 100 * height / parentHeight;

		$('#img-middle').css('height', heightPercentage + '%');

		$('#img-bottom').css('height', ($('#img-middle').height() + 30) + 'px');

		width = width + 8 * $(window).width() / 100;
		var angle = 180 / ($('#img-bottom img').length - 1);
		var rot = 180;

		$('#img-bottom img').map(function () {
			var icon = $(this).get(0);
			$(icon).css({
				'color': 'red',
				'-webkit-transform': 'rotate(' + rot + 'deg) translate(' + width / 2 + 'px) rotate(-' + rot + 'deg)',
				'-moz-transform': 'rotate(' + rot + 'deg) translate(' + width / 2 + 'px) rotate(-' + rot + 'deg)',
				'-ms-transform': 'rotate(' + rot + 'deg) translate(' + width / 2 + 'px) rotate(-' + rot + 'deg)',
				'-o-transform': 'rotate(' + rot + 'deg) translate(' + width / 2 + 'px) rotate(-' + rot + 'deg)',
				'transform': 'rotate(' + rot + 'deg) translate(' + width / 2 + 'px) rotate(-' + rot + 'deg)'
			});
			rot = rot - angle;
		});

		parentHeight = $('#more-info').offsetParent().height();
		heightPercentage = 100 * height / parentHeight;

		$('#more-info').css('height', heightPercentage + '%');

		height = height / 2;
		heightPercentage = 100 * height / parentHeight;

		$('.info-text').css('height', heightPercentage / 2 + '%');
	});
    $(window).resize();

    $('li').map(function () {
        $(this).hide();
    });
	
	$('img#img-middle').on('mouseover', function () {
		$('#img-middle').stop().animate({
			opacity: 0.2
		});
		$('#more-info').show();
	}).on('mouseout', function () {
		$('#img-middle').stop().animate({
			opacity: 1
		});
		$('#more-info').hide();
    });
    
//	$("#img-bottom").hover(function () {
//		$('#img-middle').css("opacity", 0.2);
//		$('#more-info').show();
//	});
//	$("#img-bottom").mouseleave(function () {
//		$('#img-middle').css("opacity", 1);
//		$('#more-info').hide();
//	});
//	


    $('li').map(function () {
        $(this).on('click mouseover', function () {
            $(this).removeClass('img-blur-in');
        });
    });

    $('#img-linkedin').click(function () {
        loadPage("https://uk.linkedin.com/in/teodora-sandu-b66b5b106");
    });

    $('#img-github').click(function () {
        loadPage("https://github.com/sanduteo95/");
    });

    $('#img-facebook').click(function () {
        loadPage("https://www.facebook.com/sanduteo95");
    });

    $('#img-twitter').click(function () {
        loadPage("https://twitter.com/sanduteo95");
    });
});
