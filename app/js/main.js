$(function() {
  $('.blog__slider').slick({
    dots: true,
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('.header__inner').addClass('active')
    } else {
      $('.header__inner').removeClass('active')
    }
  })

  $('.header__menu').on('click', function() {
    $(".header__list").toggleClass('list-active')
  })
});

const mixer = mixitup('.gallery__box')