$(function() {
  "use strict";
  loadNavigation()

  $('#down-arrow').click(function() {
    $('html, body').animate({
      scrollTop: $('#second-page').offset().top
    }, 2000)
  });

  $(window).resize(function() {
    var width = $('#img-bottom').width()
    var angle = 180 / ($('#img-bottom i').length - 1)
    var rot = 180

    var border_width = 20
    if ($(window).width() <= 425) {
      border_width = 10
    } else {
      if ($(window).height() <= 425) {
        border_width = 4
      }
    }

    width = width + 10
    $('#img-bottom i').map(function() {
      var icon = $(this).get(0)
      $(icon).css({
        '-webkit-transform': 'rotate(' + rot + 'deg) translate(' + (width + border_width) / 2 + 'px) rotate(-' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg) translate(' + (width + border_width) / 2 + 'px) rotate(-' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg) translate(' + (width + border_width) / 2 + 'px) rotate(-' + rot + 'deg)',
        '-o-transform': 'rotate(' + rot + 'deg) translate(' + (width + border_width) / 2 + 'px) rotate(-' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg) translate(' + (width + border_width) / 2 + 'px) rotate(-' + rot + 'deg)'
      })
      rot = rot - angle;
    })
  })
})

function loadNavigation() {
  "use strict";
  var links = [
    {
      title: 'linkedin',
      icon: 'linkedin',
      link: 'https://uk.linkedin.com/in/teodora-sandu'
    },
    {
      title: 'github',
      icon: 'github',
      link: 'https://github.com/sanduteo95/'
    },
    {
      title: 'facebook',
      icon: 'facebook',
      link: 'https://www.facebook.com/sanduteo95'
    },
    {
      title: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com/sanduteo95'
    },
    {
      title: 'email',
      icon: 'envelope-o',
      link: 'mailto:sanduteo95@gmail.com'
    },
    {
      title: 'cv',
      icon: 'file-text-o',
      link: './CV.pdf'
    }
  ];

  var nav = $('#img-bottom')
  $.each(links, function(j) {
    var i = $('<i/>')
      .addClass('fa fa-' + links[j].icon)
    var li = $('<div/>')
      .addClass('blur-in')
    if(links[j].title !== 'email' && links[j].title !== 'cv') {
      li
        .attr('id', 'img-' + links[j].title)
        .html(i)
      li.click(function() {
        loadPage(links[j].link);
      });
    } else {
        if(links[j].title === 'email') {
          var a = $('<a target="_blank"/>')
            .attr('href', links[j].link)
            .html(i)
        } else {
          var a = $('<a target="_blank"/>')
            .attr('href', links[j].link)
            .attr('download', 'CV Teodora Sandu')
            .html(i)
        }
        li
          .attr('id', 'img-' + links[j].title)
          .html(a)
    }
  li.on('click mouseover', function() {
    $(this).removeClass('blur-in')
  })
  li.
    appendTo(nav)
  li.hide()
  setTimeout(function() {
    li.show()
  }, 1500)
  })
}
