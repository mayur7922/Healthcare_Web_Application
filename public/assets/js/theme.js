
// const elements = document.querySelectorAll('.sp-btn');
// elements.forEach(element => {
//   element.classList.add('remove_btn');
// });



// console.log(loggedUserName);

$('document').ready(function () {
  $('#doctorSlideshow').owlCarousel({
    nav: true,
    dots: false,
    navText: ["<span class='mai-arrow-back'></span>", "<span class='mai-arrow-forward'></span>"],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});

$('document').ready(function () {
  $("a[data-role='smoothscroll']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top - nav_height;

    $("body, html").animate({
      scrollTop: position
    }, 1000);
    return false;
  });
});

$('document').ready(function () {
  // Back to top
  var backTop = $(".back-to-top");

  $(window).scroll(function () {
    if ($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if ($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }
  });

  backTop.click(function () {
    $('html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});


$('document').ready(function () {
  // Tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Popovers
  $('[data-toggle="popover"]').popover();

  // Page scroll animate
  new WOW().init();
});

function opentab(event) {
  const tab_links = Array.from(document.querySelectorAll('.nav-item'));
  for (const tab_link of tab_links) {
      tab_link.classList.remove('active');
  }
  event.currentTarget.classList.add('active');
};




(function ($) {
  "use strict";
  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    // navText: [
    //   '<i class="bi bi-arrow-left"></i>',
    //   '<i class="bi bi-arrow-right"></i>'
    // ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });

})(jQuery);

