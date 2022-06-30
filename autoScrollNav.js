function automaticSlidingStickyNav() {
    var nav = $('.navigation-2'),
        navHeight = $(nav).outerHeight();
    $(nav).css({
        "position": "fixed"
    });
    $('body').css({
        "padding-top": (navHeight) + "px"
    });
    var lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            $(nav).slideUp({
                duration: 250,
                easing: "easeInOutQuart"
            });
        } else {
            $(nav).slideDown({
                duration: 250,
                easing: "easeInOutQuart"
            });
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
}
$.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js")
    .done(function(script, textStatus) {
        automaticSlidingStickyNav();
    })
