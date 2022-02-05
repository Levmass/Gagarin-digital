//----------------------------HEADER BURGER------------------------------------
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('.header__logo').toggleClass('active');
        $('.header__logo-w').toggleClass('active');
        $('.header__social-phone-b').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header__burger").style.top = "0";
    } else {
        document.querySelector(".header__burger").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
} 
//----------------------------TO TOP AND BOTTOM BUTTONS------------------------
$('#toBottom').on('click', function() {
    $("html, body").animate({ scrollTop: ($(document).height() - $('.signal').height()-400) }, 600);
})

$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() > 800 ) {
            $('#toTop').fadeIn("slow", function () {
            });
        } else {
            $('#toTop').fadeOut("slow", function () {
            });
        }
    });

    $('#toTop').click(function(event) {
        $('html,body').animate({scrollTop:0},600);
    });
    
});


//----------------------------CHANGE COLOR----------------------
$(window).scroll(function () {
    var signalSection = $('.signal');

    signalSection.each(function (i, el) {
        var top  = $(el).offset().top-500;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();

        if( scroll > top && scroll < bottom){
            $('#toTop').addClass('_active');
            $('.header__burger').removeClass('_active');
            $('.button').removeClass('_active');
        } else {
            $('#toTop').removeClass('_active');
            $('.header__burger').addClass('_active');
            $('.button').addClass('_active');
        }
    })
    var MainScreenSection = $('.main-screen');

    MainScreenSection.each(function (i, el) {
        var top  = $(el).offset().top-150;
        var bottom = top +$(el).height()-100;
        var scroll = $(window).scrollTop();

        if( scroll > top && scroll < bottom){
            $('.header__burger').removeClass('_active');
            $('.button').removeClass('_active');
        }
    })
});

$(window).scroll(function () {
    var mainScreenSection = $('.main-screen');
    var cosmosSection = $('.cosmos');
    var whatWeDoSection = $('.whatwedo');
    var helloSection = $('.hello');
    var ourProjectsSection = $('.ourprojects');
    var signalSection = $('.signal');
    var footerSection = $('.footer');

    mainScreenSection.each(function (i, el) {
        var top  = $(el).offset().top -300;
        var bottom = top +$(el).height()+100;
        var scroll = $(window).scrollTop();

        if( scroll > top && scroll < bottom){
            $('.main-screen-btn').addClass('active');
        } else {
            $('.main-screen-btn').removeClass('active');
        }
    })
    cosmosSection.each(function (i, el) {
        var top  = $(el).offset().top -600;
        var bottom = top +$(el).height()-50;
        var scroll = $(window).scrollTop();

        if( scroll > top && scroll < bottom){
            $('.cosmos-btn').addClass('active');
        } else {
            $('.cosmos-btn').removeClass('active');
        }
    })
    whatWeDoSection.each(function (i, el) {
        var top  = $(el).offset().top -600;
        var bottom = top +$(el).height()+150;
        var scroll = $(window).scrollTop();

        if( scroll > top && scroll < bottom){
            $('.whatwedo-btn').addClass('active');
        } else {
            $('.whatwedo-btn').removeClass('active');
        }
    })
    helloSection.each(function (i, el) {
        var top = $(el).offset().top - 600;
        var bottom = top + $(el).height() + 150;
        var scroll = $(window).scrollTop();

        if (scroll > top && scroll < bottom) {
            $('.hello-btn').addClass('active');
        } else {
            $('.hello-btn').removeClass('active');
        }
    })
    ourProjectsSection.each(function (i, el) {
        var top  = $(el).offset().top -700;
        var bottom = top +$(el).height()+200;
        var scroll = $(window).scrollTop();

        if( scroll > top && scroll < bottom){
            $('.ourprojects-btn').addClass('active');
        } else {
            $('.ourprojects-btn').removeClass('active');
        }
    })
    signalSection.each(function (i, el) {
        var top  = $(el).offset().top -700;
        var bottom = top +$(el).height()+200;
        var scroll = $(window).scrollTop();

        if( scroll > top && scroll < bottom){
            $('.signal-btn').addClass('active');
        } else {
            $('.signal-btn').removeClass('active');
        }
    })
    footerSection.each(function (i, el) {
        var top  = $(el).offset().top -850;
        var bottom = top +$(el).height()+800;
        var scroll = $(window).scrollTop();

        if( scroll > top && scroll < bottom){
            $('.buttons-slider').addClass('active');
        } else {
            $('.buttons-slider').removeClass('active');
        }
    })
});    

$('.main-screen-btn').on('click', function() {
    $("html, body").animate({ scrollTop:0}, 600);
})
$('.cosmos-btn').on('click', function() {
    $("html, body").animate({ scrollTop: ($('.main-screen').height()+510) }, 600);
})
$('.whatwedo-btn').on('click', function() {
    $("html, body").animate({ scrollTop: ($('.main-screen').height() + $('.cosmos').height()+510 ) }, 600);
})
$('.hello-btn').on('click', function() {
    $("html, body").animate({ scrollTop: ($('.main-screen').height() + $('.cosmos').height() + $('.whatwedo').height()+710 ) }, 600);
})
$('.ourprojects-btn').on('click', function() {
    $("html, body").animate({ scrollTop: ($('.main-screen').height() + $('.cosmos').height() + $('.whatwedo').height() + $('.hello').height()+1100 ) }, 600);
})
$('.signal-btn').on('click', function() {
    $("html, body").animate({ scrollTop: ($(document).height() - $('.signal').height()-400) }, 600);
})


//----------------------------WHAT WE DO OPEN MENU------------------------
let menu = document.querySelectorAll('.whatwedo__menu');
let subtitleItem = document.querySelectorAll('.whatwedo__subtitle-item');
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function () {
        menu[i].classList.toggle('active');
        subtitleItem[i].classList.toggle('active');
    });
};
//----------------------------SLICK SIDER----------------------------------
$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                // arrows: false,
                slidesToShow: 2
                }
            },
        ]
	});
});

if (document.documentElement.clientWidth <= 930) {
    $(document).ready(function () {
        $('.ourprojects__row').slick({
            arrows: true,
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 775,
                    settings: {
                    // arrows: false,
                        slidesToShow: 1,
                        centerMode: true
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                    // arrows: false,
                        slidesToShow: 1,
                        centerMode: false
                    }
                },
            ]
        });
    });
};


//----------------------------CHECKBOX ACTIVE-------------------------------
$(document).ready(function () {
    $('.signal__chackbox-label').click(function (event) {
        $('.signal__chackbox-label').toggleClass('active');
        // $('.signal__btn').toggleAttr('disabled');
        let btn = $('.signal__btn');
        if (btn.attr('disabled')) {
            btn.removeAttr('disabled');
        } else {
            btn.attr('disabled');
        }
    });
});
//----------------------------PRELOAD ScREEN--------------------------------
window.onload = function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    }, 1000);
};

$(document).ready(function () {
    $('.signal__btn').click(function (event) {
        let form = document.querySelector(".signal__form");
        form.innerHTML = '';

        let pic = document.querySelector(".load__image");
        let title = document.querySelector(".load__title");
        let subtitle = document.querySelector(".load__subtitle");

        pic.innerHTML = '<img src="img/signal/cosmoheart.jpg">';
        title.innerHTML = 'Заявка принята!';
        subtitle.innerHTML ='Координаты получены.</br> Выйдем на связь в течение 60 минут.';
    });
});
