$(document).ready(function(){
    $("#clk_exp").click(function(){

        var target = $('#exp');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });

    $("#clk_about").click(function(){

        var target = $('#about');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });

    $("#clk_do").click(function(){

        var target = $('#do');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });

    $("#clk_home").click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $("#clk_skills").click(function(){

        var target = $('#skills');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });

    $("#clk_contact").click(function(){

        var target = $('#contact');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 250) {
        $('.menu_container').addClass('fixed');
        $('.right_container').addClass('fixed_right');
        $('.main_container').css({"margin-left":"20%"})
    } 
    else {
        $('.menu_container').removeClass('fixed');
        $('.right_container').removeClass('fixed_right');
        $('.main_container').css({"margin-left":"0"})
    }
});