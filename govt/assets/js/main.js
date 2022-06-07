"use strict";
// Background Images
document.querySelectorAll('[data-bg-img]').forEach(function(el){
    console.log(el.getAttribute('data-bg-img'));

    el.setAttribute('style', 'background-image: url(' + el.getAttribute('data-bg-img') + ')');
});

// Hero Slider
var slider = tns({
    "container": '.hero-slider',
    "items": 1,
    "mouseDrag": true,
    "slideBy": "page",
    "swipeAngle": false,
    "speed": 400,
    "controls": false,
    "navPosition": "bottom"
});

// Nav Toggle 
document.querySelectorAll('.nav-toggle').forEach(function(el){
    el.addEventListener('click', function () {
        document.querySelector('.site-navmenu').classList.toggle('show');
    });
})