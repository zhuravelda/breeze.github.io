$(".toggle").click(function() {
  $(".menu").slideToggle();
$(this).toggleClass("is-active");
});
$(".dropdown").click(function() {
  $(".sub-nav").slideToggle();
  $(this).toggleClass("active");
});
