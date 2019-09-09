var slideIndex = 1,
    shift,
    slide,
    next = document.querySelector('.dz-8-slider__next_js'),
    prev = document.querySelector('.dz-8-slider__prev_js'),
    slideBox = document.querySelector('.dz-8-slider__item-box_js'),
    item = document.querySelectorAll('.dz-8-slider__dots-item_js'),
    slide1 = document.createElement('img'),
    slide2 = document.createElement('img'),
    slide3 = document.createElement('img'),
    slidePos = [];
slide1.src = './img/slide1.png';
slide1.className = 'dz-8-slider__item dz-8-slider__item_js';
slide2.src = './img/slide2.png';
slide2.className = 'dz-8-slider__item dz-8-slider__item_js';
slide3.src = './img/slide3.png';
slide3.className = 'dz-8-slider__item dz-8-slider__item_js';
slidePos = [
    [slide3, slide1, slide2],
    [slide1, slide2, slide3],
    [slide2, slide3, slide1],
];

window.onresize = function() {
    var positionInfo = slideBox.getBoundingClientRect(),
        width = positionInfo.width,
        height = Math.floor(width / 531 * 100);
    slide = document.querySelectorAll('.dz-8-slider__item_js');
    slideBox.style.height = `${height}px`;
    for (var i = 0; i < 3; i++) {
        slide[i].style.height = `${height}px`;
    }
};

insertSlides(slideIndex);
showSlides(slideIndex);
slideBox.style.transform = `translateX(-${(100/3)}%)`;
next.addEventListener('click', function(){
    shift = 100/3*2;
    showSlides(slideIndex += 1);
});

prev.addEventListener('click', function(){
    shift = 0;
    showSlides(slideIndex -= 1);
});

function insertSlides(index) {
    for (var i = 0; i<3; i++) {
        slideBox.insertAdjacentElement('beforeend', slidePos[index - 1][i]);
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("dz-8-slider__item_js"),
        slideBox = document.querySelector(".dz-8-slider__item-box_js"),
        dots = document.getElementsByClassName("dz-8-slider__dots-item_js");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
        slideBox.style.transform = `translateX(-${shift}%)`;
        slideBox.style.transition = '0.7s';
        setTimeout(function() {
            slideBox.style.transition = '0s';
            slideBox.style.transform = `translateX(-${(100/3)}%)`;
            insertSlides(slideIndex);
        }, 700);
        
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}