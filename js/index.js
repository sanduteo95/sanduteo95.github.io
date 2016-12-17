$(document).ready(function() {
  $('#more-info').hide();

  $(window).resize(function() {
    var width = $('#img-middle').width();
    var parentHeight= $('#img-middle').offsetParent().height();
    var height = width;
    var heightPercentage = 100*height/parentHeight;

    $('#img-middle').css('height', heightPercentage+'%');

    $('#img-bottom').css('height', ($('#img-middle').height()+30)+'px');

    width = width + 8*$(window).width()/100;
    var angle = 180/($('#img-bottom img').length-1);
    var rot = 180;

    $('#img-bottom img').map(function () {
      var icon = $(this).get(0);
      $(icon).css({
        'color': 'red',
        'transform': 'rotate('+rot+'deg) translate('+width/2+'px) rotate(-'+rot+'deg)'
      });
      rot = rot - angle;
    });

    parentHeight= $('#more-info').offsetParent().height();
    heightPercentage = 100*height/parentHeight;

    $('#more-info').css('height', heightPercentage+'%');

    height = height/2;
    heightPercentage = 100*height/parentHeight;

    $('.info-text').css('height', heightPercentage/2+'%');
  });

  $(window).resize();

  $('li').map(function () {
    $(this).hide();
  });

  setTimeout(function() {
    $('#img-middle').removeClass('img-pop-up');
    $('li').map(function () {
      $(this).show();
    });
  }, 1000);

  $('#img-middle').hover(function() {
    console.log('hey');
    $('#more-info').show();
  });

  $('li').map(function () {
    $(this).on('click mouseover', function () {
      $(this).removeClass('img-blur-in');
    });
  });

  $('#img-linkedin').click(function() {
    loadPage("https://uk.linkedin.com/in/teodora-sandu-b66b5b106");
  });

  $('#img-github').click(function() {
    loadPage("https://github.com/sanduteo95/");
  });

  $('#img-facebook').click(function() {
    loadPage("https://www.facebook.com/sanduteo95");
  });

  $('#img-twitter').click(function() {
    loadPage("https://twitter.com/sanduteo95");
  });
});

function loadPage(page) {
  var win = window.open(page, '_blank');
  if (win) {
      win.focus();
  } else {
      alert('Please allow popups for this website');
  }
}
