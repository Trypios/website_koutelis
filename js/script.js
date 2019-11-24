$(document).ready(function() {

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

});