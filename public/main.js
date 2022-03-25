// Navbar scrolling //
$(document).ready(function () {
  if ($(window).scrollTop() > $("#banner").outerHeight()) {
    $("#navbar").addClass("scrolling");
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    // $(document).bind('mousewheel', 'body', function (e: any) {
    //   $(this).stop();
    // });

    if ($(window).scrollTop() > $("#banner").outerHeight()) {
      $("#navbar").addClass("scrolling");
    }

    if ($(window).scrollTop() < $("#banner").outerHeight()) {
      $("#navbar").removeClass("scrolling");
    }
  });
});
// END //

// SmoothScroll to anchor points //
$(document).ready(function () {
  $("a").on("click", function (e: any) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
// END //

// FadeInEffects
// $(document).ready(function () {
//   $(window).scroll(function () {
//     $('.fadeIn').each(function (i) {
//       var object_top = $(this).offset().top;
//       var window_top = $(window).scrollTop();

//       if ((object_top - window_top) < 500) {
//         $(this).animate({ opacity: '1', top: '0px' }, 500);
//       }
//     });
//   });
// });
// END //

// Hamburger
$(document).on("click touch", "#hamburgerToggle", function () {
  $("#hamburgerMenu").toggleClass("active");
});

$(window).on("resize", function () {
  if ($(window).width() > 576) {
    $("#hamburgerMenu").removeClass("active");
  }
});
