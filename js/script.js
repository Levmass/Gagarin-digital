$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('.header__logo').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


let menu = document.querySelectorAll('.whatwedo__menu');
let subtitleItem = document.querySelectorAll('.whatwedo__subtitle-item');
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function () {
        menu[i].classList.toggle('active');
        subtitleItem[i].classList.toggle('active');
    });
};

$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
	});
});

$(document).ready(function () {
    $('.signal__chackbox-label').click(function (event) {
        $('.signal__chackbox-label').toggleClass('active');
        $('.signal__btn').removeAttr("disabled");
    });
});

window.onload = function () {
    setTimeout(function () {
        document.getElementById("preloader").style.display = "none";
    }, 1000);
};
