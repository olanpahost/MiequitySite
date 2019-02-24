$(document).ready(function () {

    $(".dots").dotdotdot({
        height: 60
    });
    $('.slider').slick({
        dots: true,
        autoplay:true,
        slideToScroll:1,
        // infinite: true,
        speed: 500,
        fade:true,
        cssEase: 'ease'
    });
    $('#contactUs').on('click', function(){
        formContact.show();
    });
    $(formClose[0]).on('click', function(){
        formContact.hide();
    });
});
let formContact = $('#contactUs__form'),
    formClose = $('.button-close');
