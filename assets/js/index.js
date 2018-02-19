// Toggle services description onHover
$(document).ready(function() {

(function() {
    // Slide Down
    $('.serviceInfo').mouseenter(function() {
        var description = $(this).children('.serviceInfoText');
        
        $(this).data('timeout', setTimeout(function () {
            description.slideDown("slow"); 
           }, 500))
        .mouseleave(function() {
            clearTimeout($(this).data('timeout'));
        });
    });

    // Slide Up
    $('.serviceInfo').mouseleave(function() {
        var description = $(this).children('.serviceInfoText');
        
        if(description.not(":hidden"))
            description.slideUp("slow");
    });

})();
});

// Navigation functions
function scrollToHome() {
    $('html, body').animate({
        scrollTop: $(".navbar").offset().top
    }, 1000);
}

function scrollToAbout() {
    $('html, body').animate({
        scrollTop: $(".aboutUsSection").offset().top
    }, 1000);
}

function scrollToServices() {
    $('html, body').animate({
        scrollTop: $(".serviceSection").offset().top
    }, 1000);
}

function scrollToContactUs() {
    $('html, body').animate({
        scrollTop: $("#contactUsSection").offset().top
    }, 1000);
}
