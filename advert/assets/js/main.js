$(document).ready(function(){
    "use strict";

    // Nav Menu Toggle
    $('.site-nav-toggle').on('click', function(){
        $('.site-nav-menu').toggleClass('show');
    });

    // Banner Background
    console.log($('[data-bg-img]').attr('data-bg-img'));
    $('[data-bg-img]').each(function(){
        $(this).css({
            'background-image': 'url(' + $(this).attr('data-bg-img') + ')'
        });
    });

    // Blog Slider Active
    var slider = tns({
        container: '.tiny-slider',
        items: 1,
        gutter: 30,
        mouseDrag: true,
        speed: 400,
        nav: false,
        controlsText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
        controlsPosition: "bottom",
        responsive: {
            1200: {
                items: 1.75
            },
            992: {
                items: 1.5
            }
        }
    });

    // Magnific Popup Active
    $('.mfp-iframe').magnificPopup({
        type: 'image'
    });
});