$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
        
    });

    $(".items").isotope({

        filter: '*',
        animationOptions: {
            duration:1500,
            easing: 'linear',
            queue: false
        }

    });

});

$(document).ready(function() {

    $(".arrow-right").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "+=336"
        }, 750);
    });
    $(".arrow-left").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "-=336"
        }, 750);
    });
    
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Guitar", "Piano", "Drums", "Vocals", "Music Technology"],
        typeSpeed: 80,
        loop: true,
        showCursor: false,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 150
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition -50 }, "slow");

    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

    $("[data-fancybox]").fancybox();

    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({

            filter: selector,
            animationOptions: {
                duration:1500,
                easing: 'linear',
                queue: false
            }
    
        });

        return false;

    });

    $('.owl-carousel').owlCarousel({
        loop: false,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    var priceTopOffset = $(".pricingSection").offset().top;
    
    $(window).scroll(function() {

        if(window.pageYOffset > priceTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({

                easing: 'easeInOut',
                barColor: '#ca4a00',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {

                    $(this.el).find('.percent').text(Math.round(percent));

                }
            });

        }

    });

});