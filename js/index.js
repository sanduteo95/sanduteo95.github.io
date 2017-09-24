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

$(function() {
    "use strict";

    if ($(window).width() <= 768) {
        $('#img-middle').removeClass('img-pop-up');
        $('#header').addClass('notransition');
        $('#more-info').removeClass('blur-in');
        $('li').map(function() {
            $(this).removeClass('blur-in');
        });
        $('#down-arrow').removeClass('blur-in');
    } else {
        $('li').map(function() {
            $(this).hide();
        });
        $('#more-info').hide();
        $('#down-arrow').hide();

        setTimeout(function() {
            $('#img-middle').removeClass('img-pop-up');
            $('#more-info').show();
            $('#down-arrow').show();
            $('li').map(function() {
                $(this).show();
            });
        }, 1000);
    }

    $(window).resize();
});
