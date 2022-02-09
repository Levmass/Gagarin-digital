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

            $('.button').removeClass('_active');
        } else {
            $('#toTop').removeClass('_active');
            $('.button').addClass('_active');
        }

        var topBurger  = $(el).offset().top;
        var bottomBurger = topBurger +$(el).height();
        if( scroll > topBurger && scroll < bottomBurger){
            $('.header__burger').removeClass('_active');
        } else {
            $('.header__burger').addClass('_active');
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

        var topBurger  = $(el).offset().top-150;
        var bottomBurger = topBurger +$(el).height()+300;
        if( scroll > topBurger && scroll < bottomBurger){
            $('.header__burger').removeClass('_active');
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
        var bottom = top +$(el).height()+300;
        var scroll = $(window).scrollTop();

        if( scroll > top && scroll < bottom){
            $('.cosmos-btn').addClass('active');
        } else {
            $('.cosmos-btn').removeClass('active');
        }
    })
    whatWeDoSection.each(function (i, el) {
        var top  = $(el).offset().top -600;
        var bottom = top +$(el).height()+300;
        var scroll = $(window).scrollTop();

        if( scroll > top && scroll < bottom){
            $('.whatwedo-btn').addClass('active');
        } else {
            $('.whatwedo-btn').removeClass('active');
        }
    })
    helloSection.each(function (i, el) {
        var top = $(el).offset().top - 700;
        var bottom = top + $(el).height() + 500;
        var scroll = $(window).scrollTop();

        if (scroll > top && scroll < bottom) {
            $('.hello-btn').addClass('active');
        } else {
            $('.hello-btn').removeClass('active');
        }
    })
    ourProjectsSection.each(function (i, el) {
        var top  = $(el).offset().top -700;
        var bottom = top +$(el).height()+450;
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
    document.querySelector('.cosmos').scrollIntoView({block: "center", behavior: "smooth"});
})
$('.whatwedo-btn').on('click', function() {
    document.querySelector('.whatwedo').scrollIntoView({block: "center", behavior: "smooth"});
})
$('.hello-btn').on('click', function() {
    document.querySelector('.hello').scrollIntoView({block: "center", behavior: "smooth"});
})
$('.ourprojects-btn').on('click', function() {
    document.querySelector('.ourprojects').scrollIntoView({block: "center", behavior: "smooth"});
})
$('.signal-btn').on('click', function() {
    document.querySelector('.signal').scrollIntoView({block: "center", behavior: "smooth"});
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
                        slidesToShow: 1,
                        centerMode: true
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false
                    }
                },
            ]
        });
    });
};

if (document.documentElement.clientWidth <= 650) {
    $(document).ready(function () {
        $('.projects-row').slick({
            arrows: true,
            slidesToShow: 1,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 505,
                    settings: {
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
//----------------------------PRELOAD SСREEN--------------------------------
window.onload = function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    }, 1000);
};

//----------------------------SIGNAL SUBMIT SCREEN--------------------------------
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

//----------------------------SEE ALL FILTER--------------------------------

// let ddxColumn = document.querySelector(".seeall__column_ddx");
// let allstarColumn = document.querySelector(".seeall__column_allstar");
// let lithuntersColumn = document.querySelector(".seeall__column_lithunters");
let ddxColumn = $('.seeall__column_ddx');
let allstarColumn = $('.seeall__column_allstar');
let lithuntersColumn = $('.seeall__column_lithunters');

$(document).ready(function () {
    $('.all-btn').click(function (event) {
        ddxColumn.toggleClass('active');
        allstarColumn.toggleClass('active');
        lithuntersColumn.toggleClass('active');
        $('.all-btn').toggleClass('active');
        $('.seeall__mark').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.ppc-btn').click(function (event) {
        ddxColumn.toggleClass('ppc-active');
        allstarColumn.toggleClass('ppc-active');
        lithuntersColumn.toggleClass('ppc-active');
        $('.ppc-btn').toggleClass('active');
        if ($('.ppc').hasClass('active')) {
            $('.ppc').addClass('active');
        } else {
            $('.ppc').toggleClass('active');
        }
        
    });
});
$(document).ready(function () {
    $('.seo-btn').click(function (event) {
        $('.seo-btn').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.site-btn').click(function (event) {
        $('.site-btn').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.design-btn').click(function (event) {
        ddxColumn.toggleClass('design-active');
        lithuntersColumn.toggleClass('design-active');
        $('.design-btn').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.filming-btn').click(function (event) {
        ddxColumn.toggleClass('filming-active');
        lithuntersColumn.toggleClass('filming-active');
        $('.filming-btn').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.smm-btn').click(function (event) {
        allstarColumn.toggleClass('smm-active');
        $('.smm-btn').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.texts-bts').click(function (event) {
        lithuntersColumn.toggleClass('texts-active');
        $('.texts-bts').toggleClass('active');
    });
});