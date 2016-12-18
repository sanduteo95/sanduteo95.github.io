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
	$('li').map(function () {
        $(this).hide();
    });
	
	setTimeout(function () {
		$('#img-middle').removeClass('img-pop-up');
		$('li').map(function () {
			$(this).show();
		});
	}, 1000);

	$(window).resize(function () {
		var width = $('#nav').width();
		var height = width;
		var heightPercentage = 100 * height / $('#nav').offsetParent().height();
		
		var widthPercentage = 100 * width / $('#nav').offsetParent().width();
		
		$('#nav').css('height', heightPercentage + '%');
		
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
	});
    $(window).resize();

    $('li').map(function () {
        $(this).on('click mouseover', function () {
            $(this).removeClass('blur-in');
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
