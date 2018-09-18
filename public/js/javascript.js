$(document).ready(function () {

    // Navbar Disappear and Reappear
    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         document.getElementById("navbar").style.top = "0";
    //     } else {
    //         document.getElementById("navbar").style.top = "-70px";
    //     }
    //     prevScrollpos = currentScrollPos;
    // }

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () {
        myFunction()
    };

    // Get the navbar
    var navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    };

    // Navbar Scrolling
    $(".banner-title").on('click', function () {
        window.location = "https://www.antlersandacorns.com/";
    });

    $("#home-nav").on('click', function () {
        window.location = "https://www.antlersandacorns.com/";
    });

    $("#gallery-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#gallery-connect").offset().top - 60
        }, 'slow');
    });

    $("#about-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#about-connect").offset().top - 60
        }, 'slow');
    });

    $("#contact-nav").on("click", function (event) {
        $('html,body').animate({
            scrollTop: $("#contact-connect").offset().top - 60
        }, 'slow');
    });


});