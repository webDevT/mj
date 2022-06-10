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

      $('.slider2').slick({
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
    if($(window).width() < 768) {
     //start slider init
     $('.articles__slider').slick({
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
    }
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

    //start path item

      $('.path__item-header').click(function(){
          $(this).parent().find('.path__item-content').slideToggle();
          $(this).parent().toggleClass('active');
      })

      $('.got-it').click(function(){
          $(this).parent().slideUp();
          $(this).parent().parent().removeClass('active');
          $(this).parent().parent().find('.check-icon').fadeIn();
          $(this).parent().parent().find('.open-icon').addClass('no-active');
      })
    
    //end path item 

    //start tab 
    $(function(){
        $(".tab").click(function() {
        $(".tab").removeClass("active").eq($(this).index()).addClass("active");
         $(".tab__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});
    //end tab


});

//start select js
var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);
//end select js