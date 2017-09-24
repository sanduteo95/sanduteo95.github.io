$(function() {
  "use strict";
  loadTimeline()

  if ($(window).width() > 768) {
    $('.block-timeline').each(function() {
			var date = $(this).find('.date-timeline')
      if (!isScrolledIntoView(date)) {
        $(this).addClass('is-hidden');
      }
    });
  }

  $(window).resize(function() {
    hideContent();
    var width = $('#title-timeline').width() + parseInt($('#title-timeline').css('padding-left')) + parseInt($('#title-timeline').css('padding-right'));
  });
  $(window).resize();

  $('.description-timeline').each(function() {
    if (this.length == 0) {
      this.style.display = 'none';
    }
  });

  $(window).on('scroll', function() {
    hideContent();
  });
});

function hideContent() {
  $('.block-timeline').each(function() {
		var date = $(this).find('.date-timeline')
    if (isScrolledIntoView(date) && $(this).hasClass('is-hidden')) {
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

function loadTimeline() {
  "use strict";
  var experiences = [
    {
      title: 'IBM SOFTWARE ENGINEER',
      date: 'Jul 2017',
      description: ''
    },
    {
      title: 'CODE CLUB',
      date: 'Oct 2016',
      description: 'As a volunteer, I organised weekly coding tutorials for primary school children. During the one-hour long sessions I was responsible for guiding the children through the projects on Code Club. This experience required communication skills and patience, as well as a passion for technology and passing on knowledge.'
    },
    {
      title: 'HASKELL DEMONSTRATOR',
      date: 'Sept 2016',
      description: 'My role was to run weekly two-hour lab sessions, during which I aided second year students in their Haskell as- signments. I was responsible for explaining a variety of functional programming paradigms, as well as for helping them debug their programs. In addition, I needed to be able to adapt my communication skills to a variety of students.'
    },
    {
      title: 'AMERICAN EXPRESS INTERN',
      date: 'June 2016',
      description: 'Working in an agile environment, consisting of both UX designers and software developers, I learned how to practise e icient team work and communication. The internship allowed me to learn a variety of new frameworks, how to manage project dependencies through Maven, and program using application servers such as JBOSS.'
    },
    {
      title: 'THE BIRMINGHAM PROJECT',
      date: 'June 2015',
      description: 'Working in a team with students from a variety of background, yhis experience has consolidated both my team building and communication skills. My contribution came in the form of developing an app in Android Studio, built on top of the Google Maps API. Moreover, another team mate and I were in charge of creating the presentation using Prezi, which we then presented in front of a large audience.'
    },
    {
      title: 'UNIVERSITY OF BIRMINGHAM',
      date: 'Sept 2014',
      description: 'Started attending university, where I proceeded to win the award for \'Best First Year Student\' and take part in a variety of team projects, involving both programming, planning and presentations.'
    },
    {
      title: 'SAVE THE CHILDREN',
      date: 'Oct 2011',
      description: 'Throughout the four years I was a volunteer, I got involved in a variety of projects. From offering support and mentoring children at the local centre on a weekly basis, to leading a team to raise money for the hospital’s maternity section, this experience made me aware of the importance of being reliable and dedicated to a cause.'
    },
    {
      title: 'CN ZINCA GOLESCU',
      date: 'Sept 2010',
      description: 'Enrolled in a Mathematics and Computer Science course, my high school experience involved taking part in a variety of Olympiads and competitions. Whether it was Mathematics, Phyisics or Computer Science, these have turned me into a competitive, ambitous and motivated student, who enjoys a challenge.'
    }
  ];
  var timeline = $('#timeline')
  $.each(experiences, function(i) {
    var span1 = $('<span/>')
      .addClass('date')
      .text(experiences[i].date)
    var date = $('<div/>')
      .addClass('date-timeline')
      .html(span1)

    var description
    if(experiences[i].description !== '') {
      description = $('<p/>')
        .addClass('description-timeline')
        .text(experiences[i].description)
    }

    var span2 = $('<span/>')
      .text(experiences[i].title)
    var section = $('<h2/>')
      .attr('id', 'section-timeline')
      .html(span2)
      .add(description)

    var content = $('<div/>')
      .addClass('content-timeline')
      .html(section)
      .add(date)

    var block = $('<div/>')
      .addClass('block-timeline')
      .html(content)
      .appendTo(timeline)
  });
}
