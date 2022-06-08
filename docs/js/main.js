$(function(){

    //start mobile menu
    $('.menu__btn').click(function(){
        $(this).toggleClass('active');
        $('.left-sidebar').toggleClass('active');
        $('.content-wrapper').toggleClass('active');
        $('.header').toggleClass('active');
    })
    //end mobile menu

    //start slider init
    $('.slider').slick({
        slidesToShow: 4,
        prevArrow: false,
        nextArrow: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    
                }
            }
        ]
      });
    //end slider init

    //start tutorials slider
    $('.tutorials__slider').slick({
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        slidesToScroll: 1,

      });

    //end tutorials slider

     //start slider init
     $('.news__slider').slick({
        slidesToShow: 3,
        prevArrow: false,
        nextArrow: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    
                }
            }
        ]
      });
    //end slider init

    //start star style
    $('.item-star').click(function(){
        $(this).toggleClass('active');
    })

    //end start style

    //start full height 
    $(function() {
        $('.news__slider-item').matchHeight(
            {
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            }
        );
    });
    //end full height

    //start hide-show password
    $('body').on('click', '.password-control', function(){
        if ($('.password-input').attr('type') == 'password'){
            $(this).addClass('view');
            $('.password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('.password-input').attr('type', 'password');
        }
        return false;
    });
    //end hide show password

    //start modal functions 
    $('.close-button, .login-btn').click(function(){
        $('.modal-window').fadeOut();
    })
    $('.login-btn').click(function(){
        $('.modal-window--sign-up').fadeOut();
        $('.modal-window--login').fadeIn();
    })
    $('.login').click(function(){
        $('.modal-window--login').fadeIn();
    })

    $('.sign-up').click(function(){
        $('.modal-window--sign-up').fadeIn();
    })

    $('.signup-btn').click(function(){
        $('.modal-window--login').fadeOut();
        $('.modal-window--sign-up').show();
    })

    $('.forgot-password').click(function(){
        $('.modal-window--login').fadeOut();
        $('.modal-window--forgot-password').show();
    })

    $('.button-forgot-password').click(function(){
        $('.modal-window--forgot-password').fadeOut();
        $('.modal-window--reset-password').show();
    })

    

    $(document).mouseup(function (e){ 
        var div = $(".modal-window .modal-contnet"); 
        var div2 = $(".modal-window");
        if (!div.is(e.target) 
            && div.has(e.target).length === 0) {
          div2.fadeOut();
        }
      });
    //end modul functions


});