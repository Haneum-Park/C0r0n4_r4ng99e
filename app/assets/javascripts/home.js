$(".dropdown-btn").dropdown();

document.addEventListener("DOMContentLoaded", function () {
    // Bootstrap jQuery functions

    // Mask Pharmacy Date detect
    var date = new Date();
    var week = new Array("weekend", "mon", "tue", "wed", "thu", "fri", "weekend");

    var today = document.getElementsByClassName(week[date.getDay()]);
    for (var i = 0; i < today.length; i++) {
        today[i].classList.add("week");
    }

    // Navbar, Dropdown, page top link click Event for scroll location
    var link_location = document.querySelector(".navbar-nav");
    var nav_links = link_location.querySelectorAll(".nav-link");
    var dropdown_links = link_location.querySelectorAll(".dropdown-link");
    var scroll_top = document.querySelector("#scroll-top");

    function scrollMove(links) {
        links.addEventListener("click", function (e) {
            e.preventDefault();
            var hrefTarget = this.getAttribute("href");
            var this_offset_height = document.querySelector(hrefTarget).offsetTop;
            window.scrollTo({
                top: this_offset_height,
                behavior: "smooth"
            });
        }, false);
    }

    function scrollLocation(selector) {
        if (selector == document.querySelector("#scroll-top")) {
            scrollMove(selector.children[0]);
        } else {
            for (var j = 0; j < selector.length; j++) {
                if (j == 5) {
                    return false;
                } else {
                    scrollMove(selector[j]);
                }
            }
        }
    }

    scrollLocation(scroll_top);
    scrollLocation(nav_links);
    scrollLocation(dropdown_links);

    // Window size detect function
    var scroll_height = 700;

    function windowSize(window_size) {
        if ((window_size) > 1200) { scroll_height = 650; }
        else if ((window_size) > 960 && (window_size) <= 1200) { scroll_height = 700; }
        else if ((window_size) > 768 && (window_size) <= 960) { scroll_height = 800; }
        else if ((window_size) > 575 && (window_size) <= 768) { scroll_height = 850; }
        else if ((window_size) <= 575) { scroll_height = 1300; }
    }

    windowSize(window.innerWidth || document.body.clientWidth);

    window.onresize = function () { windowSize(window.innerWidth || document.body.clientWidth); };

    // Navbar Scroll animation Event
    function navbarTop() {
        var navbar = document.querySelector("#navbar-top");

        if (document.body.scrollTop > scroll_height || document.documentElement.scrollTop > scroll_height) {
            var timer = null;
            window.addEventListener('scroll', function () {
                if (timer !== null) { clearTimeout(timer); }
                timer = setTimeout(function () {
                    navbar.classList.remove("nav-top-fade-in");
                    navbar.classList.add("nav-top-fade-out");
                }, 150);
            }, false);
            navbar.classList.remove("nav-top-fade-out");
            navbar.classList.add("nav-top-fade-in");
            navbar.classList.add("fixed-top");
            scroll_top.classList.add("top-btn-display");
            document.getElementsByClassName("navbar-top-display")[0].style.display = "block";
        } else {
            navbar.classList.remove("nav-top-fade-in");
            navbar.classList.remove("fixed-top");
            navbar.classList.add("nav-top-fade-out");
            scroll_top.classList.remove("top-btn-display");
            document.getElementsByClassName("navbar-top-display")[0].style.display = "none";
        }
    }

    window.onscroll = function () { navbarTop(); }
});
