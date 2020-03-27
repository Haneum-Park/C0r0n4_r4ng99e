$(document).ready(function () {
    $('.dropdown-btn').dropdown();

    var date = new Date();
    var week = new Array('weekend', 'mon', 'tue', 'wed', 'thu', 'fri', 'weekend');

    $("." + week[date.getDay()]).addClass("week");

    $(".navbar-nav .nav-link, .dropdown-link").on('click', function (event) {
        event.preventDefault();
        var hrefTarget = $(this).attr("href");
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({ scrollTop: $(hrefTarget).offset().top }, 500);
    });

    window.onscroll = function () { navbarTop(); };

    function navbarTop() {
        var navbar = $("#navbar-top");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.addClass("nav-top-fade-in");
            navbar.removeClass("nav-top-fade-out");
        } else {
            navbar.removeClass("nav-top-fade-in");
            navbar.addClass("nav-top-fade-out");
        }
    }
});

// document.addEventListener("DOMContentLoaded", function () {

// });

$.fn.scrollStopped = function (callback) {
    var that = this, $this = $(that);
    $this.scroll(function (ev) {
        clearTimeout($this.data('scrollTimeout'));
        $this.data('scrollTimeout', setTimeout(callback.bind(that), 200, ev));
    });
};

$(window).scrollStopped(function (ev) {
    $("#navbar-top").removeClass("nav-top-fade-in");
    $("#navbar-top").addClass("nav-top-fade-out");
});