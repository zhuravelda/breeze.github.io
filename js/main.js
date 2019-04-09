// pop-up login

$('.login-link').click(function() {
  var popup_id = $('#' + $(this).attr("rel"));
  $(popup_id).show();
  $('.overlay_popup').show();
})
$('.overlay_popup').click(function() {
  $('.overlay_popup, .user_login').hide();
})

   // pop-up register

  $('.accaunt-link').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay_popup').show();
  })
  $('.overlay_popup').click(function() {
    $('.overlay_popup, .user_register').hide();
  })

  //  Слайдер

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    // fade: true
  });
