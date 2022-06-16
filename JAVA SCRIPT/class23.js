/*$(function(){

$('.one').on('dblclick', function(){
    $('.one').css({"color": "red"})
});


});

*/


/*
$(function(){

    $("p").on('click', function(){
        $(this).hide(1000);
    });

}); 

*/


/*

$(function(){

    var Main = $('.main');

$('.hide').on('click', function(){
    Main.hide(1000);
});

$('.show').on('click', function(){
    Main.show(1000);
});


$('.toggle').on('click', function(){
    Main.stop().toggle(1000);
});



});  


*/


/*
$(function(){

    var Main = $('.main');

$('.hide').on('click', function(){
    Main.fadeOut(1000);
});

$('.show').on('click', function(){
    Main.fadeIn(1000);
});


$('.toggle').on('click', function(){
    Main.stop().fadeToggle(1000);
});



});  

*/


$(function(){

    var Main = $('.main'),
    search_overlay = $('.search_overlay');

    //search js
    $('.search_btn').on('click', function(){
    search_overlay.addClass('search_overlay_add');
    });

    $('.search_close').on('click', function(){
        search_overlay.removeClass('search_overlay_add');
    });







    $('.green_btn').on('click', function(){
Main.removeClass('blue_color yellow_color');
Main.addClass('green_color');
    });

$('.blue_btn').on('click', function(){
    Main.removeClass('green_color yellow_color');
    Main.addClass('blue_color');
});

    $('.yellow_btn').on('click', function(){
        Main.removeClass('green_color blue_color');
    Main.addClass('yellow_color');
 });












$('.hide').on('click', function(){
    Main.slideUp(1000);
});

$('.show').on('click', function(){
    Main.slideDown(1000);
});


$('.toggle').on('click', function(){
    Main.stop().slideToggle(1000);
});



});  