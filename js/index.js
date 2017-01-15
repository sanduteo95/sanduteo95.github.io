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
		
		$('#first-page').css('height', $(window).height() * 90/100 +'px');
//		$('#second-page').css('height', $(window).height() * 110/100 +'px');
		
		var width = $('#img-bottom').width();
		var angle = 180 / ($('#img-bottom i').length - 1);
		var rot = 180;
		
		var border_width = 20;
		if($(window).width() <= 425) {
			border_width = 10;
		} else {
			if($(window).height() <= 425) {
				border_width = 4;
			}
		}

		$('#img-bottom i').map(function () {
			var icon = $(this).get(0);
			$(icon).css({
				'-webkit-transform': 'rotate(' + rot + 'deg) translate(' + (width + border_width) / 2 + 'px) rotate(-' + rot + 'deg)',
				'-moz-transform': 'rotate(' + rot + 'deg) translate(' + (width + border_width) / 2 + 'px) rotate(-' + rot + 'deg)',
				'-ms-transform': 'rotate(' + rot + 'deg) translate(' + (width + border_width) / 2 + 'px) rotate(-' + rot + 'deg)',
				'-o-transform': 'rotate(' + rot + 'deg) translate(' + (width + border_width) / 2 + 'px) rotate(-' + rot + 'deg)',
				'transform': 'rotate(' + rot + 'deg) translate(' + (width + border_width) / 2 + 'px) rotate(-' + rot + 'deg)'
			});
			rot = rot - angle;
		});
	});
	
    $(window).resize();
//
//	$(window).scroll(function(){
//		var scrollTop = $(window).scrollTop();
//		var height;
//		if(scrollTop > $('#first-page').height() + $('#second-page').height()){
//			height = $('#second-page').height()
//		}
//		$('#second-page').stop().animate({'height': height+"px"}, 500);
//	});
	
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
	
	$('#scroll').click(function () {
		$('#timeline').show();
	});
});
