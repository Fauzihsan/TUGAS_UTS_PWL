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
    var wScroll = $(this).scrollTop();
    //UBAH NAVBAR
    if ($(this).scrollTop() > 600) {
        $('#navbar').removeClass('bg-dark').addClass('bg-nonTransparent');
    }
    else if ($(this).scrollTop() <= 600) {
        $('#navbar').removeClass('bg-nonTransparent').addClass('bg-dark');
    }

    //LANDING ELEMENT PARALAX PADA BERANDA
    if (window.matchMedia("(max-width: 570px)").matches && wScroll >= 20) {
        $('#contentBeranda').addClass('show');
    }
    else {
        if (wScroll >= 200) {
            $('#contentBeranda').addClass('show');
        }
    }
});

//PARALAX PADA GAMBAR BERANDA
$(window).scroll(function () {
    var scrollPos = $(this).scrollTop();
    $("#beranda").css({
        'background-size': 100 + scrollPos + '%',
    });
});

