// Navbar scrolling //
$(document).ready(function () {
  if ($(window).scrollTop() > $("#banner").outerHeight()) {
    $("#navbar").addClass("scrolling");
  }
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#banner").outerHeight()) {
      $("#navbar").addClass("scrolling");
    }

    if ($(window).scrollTop() < $("#banner").outerHeight()) {
      $("#navbar").removeClass("scrolling");
    }
  });
});

// SmoothScroll to anchor points //
$(document).ready(function () {
  $("a").on("click", function (e) {
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

// Hamburger
$(document).on("click touch", "#hamburgerToggle", function () {
  $("#hamburgerMenu").toggleClass("active");
});

$(window).on("resize", function () {
  if ($(window).width() > 576) {
    $("#hamburgerMenu").removeClass("active");
  }
});
