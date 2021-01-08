var elem, clicked = false;

$(document).ready(function(){

    x = 10;

    $("#clk_exp").click(function(){
        clicked = true;
        elem = '#exp'
        var target = $('#exp');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top-x
            }, 1000);
            return false;
        }
    });

    $("#clk_about").click(function(){
        clicked = true;
        elem = '#about'
        var target = $('#about');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top-x
            }, 1000);
            return false;
        }
    });

    $("#clk_do").click(function(){
        clicked = true;
        elem = '#do'
        var target = $('#do');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top-x
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
        clicked = true;
        elem = '#skills'
        var target = $('#skills');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top-x
            }, 1000);
            return false;
        }
    });

    $("#clk_contact").click(function(){
        clicked = true;
        elem = '#contact'
        var target = $('#contact');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top-x
            }, 1000);
            return false;
        }
    });

    $(".hamburger img").click(function(){
        $(".menu_container").css({"display":"block","position":"fixed","bottom":"0","z-index":"1"});
        $(".menu").css({"background-color":"white"});
    });

    if($(window).width() <= 500){

        $("html, .menuitem").click(function(){
            $(".menu_container").hide();
        });

    }

    $('.hamburger').click(function(event){
        event.stopPropagation();
    });

});


$(window).resize(function(){
    if($(window).width() > 500){

        $(".menu_container").css({"position":"static"});
        $(".menu_container").show();

        if ($(this).scrollTop() > $(".main_container").offset().top) {

            $(".menu_container").css({"position":"fixed","top":"0"});
            $(".right_container").css({"position":"fixed","top":"0","right":"0"});
            $('.main_container').css({"margin-left":"20%"})
        } 
        else {

            $(".menu_container").css({"position":"static"});
            $(".right_container").css({"position":"static"});
            $('.main_container').css({"margin-left":"0"})
        }

        $("html, .menuitem").click(function(){
            $(".menu_container").show();
        });

    }
    else{

        // $('.menu_container').css
        $(".menu_container").css({"display":"none","position":"fixed",'top':'auto',"bottom":"0","z-index":"1"});
        // $('.menu_container').removeProp('top');

        
        $(".hamburger img").click(function(){
            // $('.menu_container').removeProp('top');
            $(".menu_container").css({"display":"block","position":"fixed",'top':'auto',"bottom":"0","z-index":"1"});
            $(".menu").css({"background-color":"white"});
        });
    
        $("html, .menuitem").click(function(){
            $(".menu_container").hide();
        });
    
        $('.hamburger').click(function(event){
            event.stopPropagation();
        });

        $(".right_container").css({"position":"static"});
        $('.main_container').css({"margin-left":"0"});



    }
});

var lastScrollTop = 0;

$(window).scroll(function(){
    if ($(window).width() > 800) {
        if ($(this).scrollTop() > $(".main_container").offset().top) {

            $(".menu_container").css({"position":"fixed","top":"0"});
            $('.right_container').css({"position":"fixed", "top":"0", "right":"0"});
            $('.main_container').css({"margin-left":"20%"});
        } 
        else {

            $(".menu_container").css({"position":"static"});
            $(".right_container").css({"position":"static"});
            $('.main_container').css({"margin-left":"0"});
        }
    }

    else{

    //     // code for hiding and showing navigation bar on scroll
    //     st = $(this).scrollTop();
        
    //     if(st > lastScrollTop+10){

    //         $(".hamburger").hide();
    //         lastScrollTop = st;
    //     }

    //     else if (clicked == true){
    //         $(".hamburger").hide();
    //         lastScrollTop = st;

    //         $.fn.scrollStopped = function(callback) {
    //             var that = this, $this = $(that);
    //             $this.scroll(function(ev) {
    //               clearTimeout($this.data('scrollTimeout'));
    //               $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
    //             });
    //         };
                
    //         $(this).scrollStopped(function(ev){
    //             clicked = false;
    //         });

    //     }

    //     else if (st < lastScrollTop-10){

    //         $(".hamburger").show();
    //         lastScrollTop = st;

    //     }
        st = $(this).scrollTop();

        if(st > lastScrollTop+10){

            $(".hamburger").hide();
            lastScrollTop = st;
        }

        else if (st < lastScrollTop-10){

            $(".hamburger").show();
            lastScrollTop = st;
        }

        // st = $(this).scrollTop();
        // if(st > lastScrollTop){
        //     $(".hamburger").hide();
        // }
        // else{
        //     $(".hamburger").show();
        // }
        // lastScrollTop = st;
    }
});
