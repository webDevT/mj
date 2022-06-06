$(function(){

    $('.menu__btn').click(function(){
        $(this).toggleClass('active');
        $('.left-sidebar').toggleClass('active');
        $('.content-wrapper').toggleClass('active');
        $('.header').toggleClass('active');
    })

});