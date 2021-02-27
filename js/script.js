// BACK TO TOP
$(function () {
    var b = $('#bt');
    b.hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            b.fadeIn();
        } else {
            b.fadeOut();
        }
    });
    b.on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//NAVBAR

$(document).scroll(function () {
    if ($(this).scrollTop() > 550) {
        $('#navbar').removeClass('bg-dark').addClass('bg-nonTransparent');
        console.log(this);
    }
    else if ($(this).scrollTop() <= 550) {
        $('#navbar').removeClass('bg-nonTransparent').addClass('bg-dark');
    }
});