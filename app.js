$(function () {
  const $menu = $('#mobile-menu');
  const $menuLinks = $('.navbar__menu');

  $menu.on('click', function(){
    $menu.toggleClass('is-active');
    $menuLinks.toggleClass('active');
  })
})