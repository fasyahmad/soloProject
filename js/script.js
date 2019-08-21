/* ========================================================
                        preloader
=========================================================== */
$(window).on('load', function(){
    $("#status").fadeOut(3000);
    $("#preloader").delay(1000).fadeOut('slow');

})

/* ========================================================
                        team
=========================================================== */

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items:2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoPlayHoverPause: true,
        nav: true,
        dots: false,
        // navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});