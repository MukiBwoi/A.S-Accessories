//After Scroll navbar bg
$(function() {
    $(document).scroll(function() {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


$(document).ready(function() {
    $('#carouselExampleControls').carousel({
        intervel: 1000
    });
});