$(function () {
    'use strict';

    // preloader
    $(".preloader").fadeOut();

    // sidebar
    $('.sidebar').sideNav({
        edge: 'left'
    });

    // sidebar search
    $('.sidebar-search').sideNav({
        edge: 'right'
    });

    // sidebar search
    $('.sidebar-cart').sideNav({
        edge: 'right'
    });

    // navbar on scroll
    $(window).on('scroll', function () {

        if ($(document).scrollTop() > 50) {

            $(".navbar").css({
                "box-shadow": "rgba(0, 0, 0, 0.18) 0px 0px 16px"
            });

        } else {

            $(".navbar").css({
                "box-shadow": "none"
            });

        }

    });

    // slider
    $(".slide-show").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 1000,
        dots: true,
        paginationSpeed: 400,
        singleItem: true,
        loop: true,
        margin: 10,
        autoplay: false
    });

    // product-slide
    $(".product-slide").owlCarousel({
        stagePadding: 20,
        loop: false,
        margin: 10,
        items: 2,
        dots: false
    });

    // product-slide
    $(".product-slide-two").owlCarousel({
        stagePadding: 20,
        loop: false,
        margin: 10,
        items: 2,
        dots: false
    });

    // product-d-slide
    $(".product-d-slide").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 1000,
        dots: true,
        paginationSpeed: 400,
        loop: false,
        margin: 10,
    });

    // tabs
    $('ul.tabs').tabs();

    // collapse
    $('.collapsible').collapsible();

    // testimonial
    $(".testimonial").owlCarousel({
        items: 1,
        loop: false
    })

});

var timer;
var percent = 0;
var audio = document.getElementById("audio");
audio.addEventListener("playing", function (_event) {
    var duration = _event.target.duration;
    advance(duration, audio);
});
audio.addEventListener("pause", function (_event) {
    clearTimeout(timer);
});

function togglePlay(e) {
    e = e || window.event;
    var btn = e.target;
    if (!audio.paused) {
        btn.classList.remove('active');
        audio.pause();
        isPlaying = false;
    } else {
        btn.classList.add('active');
        audio.play();
        isPlaying = true;
    }
}
