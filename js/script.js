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
                        responsive tabs
=========================================================== */
$(function() {
    $("#services-tabs").responsiveTabs({
        // source : https://github.com/jellekralt/Responsive-Tabs
        animation: 'slide', // The panels will slide up and down
    });
})


/* ========================================================
                        Portofolio
=========================================================== */

$(window).on('load', function() {
    // initialize isotop
    $("#isotope-container").isotope({
    });
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function(){

        // get filter value
        var thisValue = $(this).attr("data-filter");

        // filter portofolio
        $("#isotope-container").isotope({
            filter: thisValue
        });
        // active button
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");

    });
});

/* ========================================================
                        Magnifier
=========================================================== */

$(function(){
     $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery :{
            enabled : true
        }
        // other options
    });
});


/* ========================================================
                        Testimonial
=========================================================== */
$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
            items: 0,
            autoplay: false,
            smartSpeed: 700,
            loop: true,
            autoPlayHoverPause: true,
            nav: true,
            dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});