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

        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
            $.fn.scrollStopped = function (callback) {
                var that = this, $this = $(that);
                $this.scroll(function (ev) {
                    clearTimeout($this.data('scrollTimeout'));
                    $this.data('scrollTimeout', setTimeout(callback.bind(that), 200, ev));
                });
            };

            $(window).scrollStopped(function (ev) {
                navbar.removeClass("nav-top-fade-in");
                navbar.addClass("nav-top-fade-out");
            });
            navbar.removeClass("nav-top-fade-out");
            navbar.addClass("nav-top-fade-in");
            navbar.addClass("fixed-top");
            document.getElementsByClassName("navbar-top-display")[0].style.display = "block";
        } else {
            navbar.removeClass("nav-top-fade-in");
            navbar.removeClass("fixed-top");
            navbar.addClass("nav-top-fade-out");
            document.getElementsByClassName("navbar-top-display")[0].style.display = "none";
        }
    }
});