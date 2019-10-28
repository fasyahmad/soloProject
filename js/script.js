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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // break point from 0 up
            0: {
                items: 1;
            },
            // break point from 480 up
            480: {
                items: 2; 
            }
        }
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
$(function () {
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

/* ========================================================
                        Stats
=========================================================== */
$(function(){
    $(".counter").counterUp({
        delay : 10,
        time : 5000
    })
})

/* ========================================================
                        client
=========================================================== */
$(function () {
    $("#clients-list").owlCarousel({ 
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoPlayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ========================================================
                        google map
=========================================================== */

$(window).on('load',function(){
    // mar variable
    var addressting = 'Gedung Sate, Jalan Diponegoro, Citarum, Bandung Wetan, Bandung City, West Java';
    var mylatlng = { lat: -6.901220, lng: 107.619400 };

    // 1. map render
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 11,
        center: mylatlng
    });
});

// function initMap() {
//     // The location of Uluru
//     var uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), { zoom: 4, center: uluru });
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({ position: uluru, map: map });
// }

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});


/* ========================================================
                        Navigation
=========================================================== */

//  show and hide white navigation bar
$(function(){

    // show hide nav when page load
    showHideNav();

    $(window).scroll(function(){
        // show hide nav when page load
        showHideNav();

        
    })


    function showHideNav(){
        // alert("you just scroll");
        if ($(window).scrollTop() > 50) {
            // show white nav
            $("nav").addClass("white-nav-top");
            // show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
        }
    }
})

// smooth scrolling
// $(function (){
//     $("a.smooth-scroll").click(function(event){
//         event.preventDefault();

//         // get slection id like #about dll
//         var select_id = $(this).attr("href");
        
//         $("html.body").animate({
//             scrollTop : $(select_id).offset().top -64
//         },1250);
//     });
// });