


$(window).scroll(function () {
    var menuPosition = $("#menu").position();
    var windowScrollPosition = $(window).scrollTop();
    if (windowScrollPosition >= menuPosition.top) {
        $("#mainUl").css({
            'position': 'fixed',
            'top': '0px',
            'width' : '89%'
        });

    } else {
        $("#mainUl").css({
            'position': 'relative',
            'top': '0px'
        });

    }


});