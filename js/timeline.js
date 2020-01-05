g$(function() {
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
      date: 'Sep 2019',
      // icon: 'job.jpg',
      icon: 'briefcase',
      description: 'Subsequently to finishing my placement year at IBM in 2018, I was offered the chance to return to my team as a graduate.'
    },
    {
      title: 'UNIVERSITY OF BIRMINGHAM',
      date: 'Sep 2014',
      // icon: 'study.png',
      icon: 'graduation-cap',
      description: 'Graduated with a First Class Honours from my Masters of Science degree and achieved a First in my final year project, titled \'Compiling a functional dataflow language using the Futamura Projections\'. I then proceeded to win the award for \'Best Final Year Student in MSci Computer Science\'.'
    }, 
    {
      title: 'HASKELL DEMONSTRATOR',
      date: 'Sep - Dec 2018',
      // icon: 'job.jpg',
      icon: 'briefcase',
      description: 'Having come back from my placement year at IBM, I continued working as a demonstrator. My new responsibilties included setting up assignments for first-year students, as well as managing the course GitLab repository and updating student\'s marks using a self-written Python script.'
    },
    {
      title: 'IBM SOFTWARE ENGINEER',
      date: 'Jul 2017 - Jul 2018',
      // icon: 'job.jpg',
      icon: 'briefcase',
      description: 'Part of the Hybrid Integration department, I worked as a full-stack developer on a cloud product built on top of a micro-service architecture.  Collaborating with a variety of developers, architects, and designers, I contributed to implementing numerous aspects of the user-interface using AngularJS, React, HTML and Sass, and got involved in developing the persistence and API layers of various micro-services in Node.js. Being part of a department that practiced agile and DevOps, I was required to use a variety of tools to benefit our continuous delivery strategies, such as Jenkins, Travis, Artifactory and GitHub.  As a result of my skills I took on the role as the squad\'s leading front-end developer and was part of a group who started a side-project focused on improving the front-end.'
    }, {
      title: 'SOFTWARE DESIGN STUDY',
      date: 'Jan - Apr 2017',
      // icon: 'study.png',
      icon: 'users',
      description: 'As part of my course I worked in a team of five, leading brainstorming and ideation sessions, as well as conducting in-depth research based on client feedback, personas, and QOC analysis. Our task was to come up with innovative applications in the automobile industry, based on weekly challenges set by our client. My main contribution was designing a high-level mock-up of an app using Sketch and InVision, guided by an iterative design thinking process. I also designed a technical poster using Photoshop and LaTeX, which was used together with a promotional video, also created by the team.'
    },
    {
      title: 'CODE CLUB',
      date: 'Oct - Mar 2017',
      // icon: 'volunteer.png',
      icon: 'hands-helping',
      description: 'As a volunteer, I organised weekly coding tutorials for primary school children. During the one-hour long sessions I was responsible for guiding the children through the projects on Code Club. This experience required communication skills and patience, as well as a passion for technology and passing on knowledge.'
    },
    {
      title: 'HASKELL DEMONSTRATOR',
      date: 'Sep - Dec 2016',
      // icon: 'job.jpg',
      icon: 'briefcase',
      description: 'My role was to run weekly two-hour lab sessions, during which I aided second-year students in their Haskell assignments. I was responsible for explaining a variety of functional programming paradigms and helping the various students debug and understand their programs. This enabled me to adapt my communication skills accordingly and improve my existing knowledge.'
    },
    {
      title: 'AMERICAN EXPRESS INTERN',
      date: 'Jun - Aug 2016',
      // icon: 'job.jpg',
      icon: 'briefcase',
      description: 'Working in an agile environment, consisting of both UX designers and software developers, I learned how to practise e icient team work and communication. The internship allowed me to learn a variety of new frameworks, how to manage project dependencies through Maven, and program using application servers such as JBOSS.'
    },
    {
      title: 'THE BIRMINGHAM PROJECT',
      date: 'Jun 2015',
      // icon: 'study.png',
      icon: 'users',
      description: 'Working in a team with students from a variety of background, this experience has consolidated both my team building and communication skills. My contribution came in the form of developing an app in Android Studio, built on top of the Google Maps API. Moreover, another team mate and I were in charge of creating the presentation using Prezi, which we then presented in front of a large audience.'
    },
    {
      title: 'UNIVERSITY OF BIRMINGHAM',
      date: 'Sep 2014',
      // icon: 'study.png',
      icon: 'university',
      description: 'Started my Bachelors degree in Computer Science, where I proceeded to win the award for \'Best First Year Student in BSc Computer Science\'. In my second year of university I upgraded my degree to an Integrated Master in Science.'
    },
    {
      title: 'SAVE THE CHILDREN',
      date: '2011 - 2014',
      // icon: 'volunteer.png',
      icon: 'hands-helping',
      description: 'Throughout most of my high school year, I was enrolled as a volunteer at \'Save the Children Romania\'. During this time, I got involved in a variety of projects. From offering support and mentoring children at the local centre on a weekly basis, to leading a team to raise money for the hospital’s maternity section, this experience made me aware of the importance of being reliable and dedicated to a cause.'
    },
    {
      title: 'CN ZINCA GOLESCU',
      date: '2010 - 2014',
      // icon: 'study.png',
      icon: 'school',
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
    var icon = $('<i/>')
      .addClass('fa fa-' + experiences[i].icon)
    // var icon = $('<img />')
      // .addClass('section-icon')
    // icon[0].src = './img/' + experiences[i].icon

    var description
    if(experiences[i].description !== '') {
      description = $('<p/>')
        .addClass('description-timeline')
        .text(experiences[i].description)
    }

    var span2 = $('<span/>')
      .text(experiences[i].title)

    if (i % 2 == 0) {
      icon[0].className += ' right-icon'

      var section = $('<h2/>')
        .attr('id', 'section-timeline')
        .html(span2)
        .append(icon)
        .add(description)
    } else {
      icon[0].className += ' left-icon'

      var section = $('<h2/>')
        .attr('id', 'section-timeline')
        .html(icon)
        .append(span2)
        .add(description)
    }

    var content = $('<div/>')
      .addClass('content-timeline')
      .html(section)
      .add(date)

    $('<div/>')
      .addClass('block-timeline')
      .html(content)
      .appendTo(timeline)
  });
}
