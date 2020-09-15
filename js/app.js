$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 80) {
    $("nav").addClass("scrolled");
  } else {
    $("nav").removeClass("scrolled");
  }
});

/* $(".nav-link").on("click", function () {
  $(".fa-angle-right", this).css("transform", "rotate(90deg)");
});

$(".dropdown-menu").on("hidden.bs.dropdown", function () {
  $(".fa-angle-right", this).css("transform", "rotate(0deg)");
}); */
