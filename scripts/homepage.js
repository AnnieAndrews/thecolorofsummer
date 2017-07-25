$(document).ready(function(){
    $(".hero-content").hide(0).delay(300).fadeIn(1000)
});

$(document).ready(function(){
    $(".trailer-content").hide(0).delay(300).fadeIn(1000)
});

$(document).ready(function(){
    $(".hero-title").hide(0).delay(900).fadeIn(3000)
});

$(document).ready(function(){
    $(".hero-subtitle").hide(0).delay(1100).fadeIn(3000)
});

$(".down").click(function() {
    $('html, body').animate({
        scrollTop: $("#jumpHere").offset().top
    }, 2000);
});
