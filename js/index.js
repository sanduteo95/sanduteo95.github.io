/*jslint browser: true*/
/*global $, jQuery, alert*/

function loadPage(page) {
  "use strict"
  var win = window.open(page, '_blank')
  if (win) {
    win.focus()
  } else {
    alert('Please allow popups for this website')
  }
}

$(function() {
  "use strict";

  if ($(window).width() <= 768) {
    $('#img-middle').removeClass('img-pop-up')
    $('#header').addClass('notransition')
    $('#more-info').removeClass('blur-in')
    $('li').map(function() {
        $(this).removeClass('blur-in')
    })
    $('#down-arrow-top').removeClass('blur-in')

    $('#img-linkedin').removeClass('blur-in')
    $('#img-github').removeClass('blur-in')
    $('#img-cv').removeClass('blur-in')
    $('#img-email').removeClass('blur-in')

  } else {
    $('#header').hide()
    $('#more-info').hide()
    $('#down-arrow-top').hide()

    setTimeout(function() {
      $('#header').show()
      $('#img-middle').removeClass('img-pop-up')
      $('#more-info').show()
      $('#down-arrow-top').show()
    }, 1500)
  }

  $(window).resize()
})
