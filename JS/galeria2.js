$(function() {
  let bgModal = $("#bg-modal");
  $(".gallery-item").on('click', function() {
    $('body').addClass('body-overflow');
    bgModal.addClass('modal-open');
    bgModal.find(".bg-img").find('img').attr('src', $(this).css('background-image').replace('-sm', "").slice(5, -2));
    bgModal.find('img').on('load', function() {
      bgModal.find('.bg-img').removeClass('hide');
      bgModal.find('.bg-img-alt').addClass('hide');
     //bgModal.find("#bg-modal-content .bg-img").css('height', bgModal.find(".bg-img").find('img').css('height'));
    });

  });

  $('.bg-modal-overlay,.close').click(function() {
    bgModal.removeClass('modal-open');
    $('body').removeClass('body-overflow');

    bgModal.find('.bg-img').addClass('hide');
    bgModal.find('.bg-img-alt').removeClass('hide');
  });

});