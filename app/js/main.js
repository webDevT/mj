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

});