$(document).ready(function() {
  $('#more-info').hide();

  $(window).resize(function() {
    var width = $('#img-middle').width();
    var parentHeight= $('#someElt').offsetParent().height();
    var height = width;
    var heightPercentage = 100*height/parentHeight;

    $('#img-middle').css('height', heightPercentage+'%');

    $('#img-bottom').css('height', ($('#img-middle').height()+30)+'px');

    width = width + 8*$(window).width()/100;
    var angle = 240/4;
    var rot = 180;

    console.log(width);

    $('#img-bottom img').map(function () {
      var rotDegree = rot*Math.PI/180;
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

  $("#img-1").hide();
  $("#img-2").hide();
  $("#img-3").hide();
  $("#img-4").hide();

  setTimeout(function() {
    $('#img-middle').removeClass('img-pop-up');
    $("#img-1").show();
    $("#img-2").show();
    $("#img-3").show();
    $("#img-4").show();
  }, 1000);

  $('#img-1').on('click mouseover', function () {
    $('#img-1').removeClass('img-blur-in');
  });

  $('#img-2').on('click mouseover', function () {
    $('#img-2').removeClass('img-blur-in');
  });

  $('#img-3').on('click mouseover', function () {
    $('#img-3').removeClass('img-blur-in');
  });

  $('#img-4').on('click mouseover', function () {
    $('#img-4').removeClass('img-blur-in');
  });

  $('#img-1').click(function() {
    loadPage("https://uk.linkedin.com/in/teodora-sandu-b66b5b106");
  });

  $('#img-2').click(function() {
    loadPage("https://github.com/sanduteo95/");
  });

  $('#img-3').click(function() {
    if($('#more-info').hasClass('info-3')) {
      $('#img-middle').toggle();
      $('#more-info').toggle();
    } else {
      if(!$('#more-info').hasClass('info-4')) {
        $('#img-middle').toggle();
        $('#more-info').toggle();
      } else {
        $('#more-info').removeClass('info-4');
      }
      loadContactDetails();
    }
  });

  $('#img-4').click(function() {
    if($('#more-info').hasClass('info-4')) {
      $('#img-middle').toggle();
      $('#more-info').toggle();
    } else {
      if(!$('#more-info').hasClass('info-3')) {
        $('#img-middle').toggle();
        $('#more-info').toggle();
      } else {
        $('#more-info').removeClass('info-3');
      }
      loadCV();
    }
  });

});

function loadContactDetails() {
  var target = $('#more-info');

  target.addClass('info-3');

  var html = '';
  html += '<p class="info-text"><i class="fa fa-facebook-official" style="color: black;"></i><a href="https://www.facebook.com/sanduteo95" target="_blank"> Facebook </a></i></p>';
  html += '<p class="info-text"><i class="fa fa-twitter" style="color: black;"></i><a href="https://twitter.com/sanduteo95"> Twitter <a/></i></p>';
  html += '<p class="info-text"><i class="fa fa-envelope" style="color: black;"></i><a href="mailto:sanduteo95@gmail.com">sanduteo95@gmail.com</a></i></p>';

  target.html(html);
}

function loadCV() {
  var target = $('#more-info');

  target.addClass('info-4');
  var html = '';
  html += '<p class="info-text"><i class="fa fa-file-text-o"><a href="../CV.pdf" download="CV Teodora Sandu">Download my Resume</a></i></p>';

  target.html(html);
}

function loadPage(page) {
  var win = window.open(page, '_blank');
  if (win) {
      win.focus();
  } else {
      alert('Please allow popups for this website');
  }
}
