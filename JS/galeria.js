$(document).ready(function(){
    // lightbox
    $('ul#gallery a').on('click', function(event){
        event.preventDefault();
        var link = $(this).find('img').attr('src');
        $('.gallery img').attr('src', '');
        $('.gallery img').attr('src', link);
        $('.gallery').fadeIn('slow');
    });
    // close lightbox
    $('.gallery').on('click', function(event){
        event.preventDefault();
        $('.gallery').fadeOut('slow');
    });
});