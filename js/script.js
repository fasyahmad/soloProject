/* ========================================================
                        preloader
=========================================================== */
$(window).on('load', function () {
    $("#status").fadeOut(2000);
    $("#preloader").delay(1000).fadeOut('slow');

})

/* ========================================================
                        team
=========================================================== */

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoPlayHoverPause: true,
        nav: true,
        dots: false,
        // navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* ========================================================
                        progress bar
=========================================================== */
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 3000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });


});


/* ========================================================
                        progress bar
=========================================================== */
$(function() {
    $("#services-tabs").responsiveTabs({
        // source : https://github.com/jellekralt/Responsive-Tabs
        animation: 'slide', // The panels will slide up and down
    });
})