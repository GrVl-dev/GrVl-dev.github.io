var here = document.querySelectorAll('.header__links-item_js');
here[7].style.color = '#3590CC';

// отсчет времени-----------------------------------------------
var input = document.querySelector('.dz-8-time__input_js'),
    output = document.querySelector('.dz-8-time__result-out_js');
    
input.oninput = function () {
    var inputSplit = input.value.split('.');

    if(!checkDate(inputSplit)) {
        output.innerText = "Введите корректную дату";
    } else {
        var count = setInterval(function() {
            var nowDate = new Date(),
                inputDate = new Date(inputSplit[0], (inputSplit[1] - 1), inputSplit[2]),
                time = inputDate - nowDate,
                seconds = Math.floor((time/1000) % 60),
                minutes = Math.floor((time/1000/60) % 60),
                hours = Math.floor((time/(1000*60*60)) % 24),
                days = Math.floor(time/(1000*60*60*24));
            output.innerText = 
            days + ' д., ' + hours + ' ч., ' + minutes + ' мин., ' + seconds + ' сек.';
            if (+time == 0) {
                clearInterval(count);
            }
            inputSplit = input.value.split('.');
            if(!checkDate(inputSplit)) {
                output.innerText = "Введите корректную дату";
            }
        }, 1000/60);
    }
};

function checkDate(date) {
    var day = date[2],
        month = date[1];
    if (!date[1] || !date[2] || date[0] < 0 || date[1] > 12
        || date[1] < 1 || date[2] < 1 || date[2] > 31 || 
        day.length < 2 || month.length < 2) {
            return false   
    } else { 
        return true
    }
};

// Лампочки-----------------------------------------------
var lamp = document.querySelectorAll('.dz-8-lamp__item_js'),
    shadow = document.querySelectorAll('.dz-8-lamp__item-shadow_js'),
    lampBlock = document.querySelector('.dz-8-lamp__block_js');

lamp[0].onmouseover = function() {
    lamp[0].style = 'opacity: 1;';
    shadow[0].style = 'opacity: .2;';
    lampBlock.style = 'background: rgba(0, 0, 0, 0.5);';
        
}
lamp[0].onmouseout = function() {
    lamp[0].style = 'opacity: .2;';
    shadow[0].style = 'opacity: 0;';
    lampBlock.style = 'background: rgb(255, 255, 255);';
}
lamp[1].onmouseover = function() {
    lamp[1].style = 'opacity: 1;';
    shadow[1].style = 'opacity: 0.15;';
    lampBlock.style = 'background: rgba(239, 206, 74, 0.5);';
        
}
lamp[1].onmouseout = function() {
    lamp[1].style = 'opacity: .2;';
    shadow[1].style = 'opacity: 0;';
    lampBlock.style = 'background: rgb(255, 255, 255);';
}

lamp[2].onmouseover = function() {
    lamp[2].style = 'opacity: 1;';
    shadow[2].style = 'opacity: 0.15;';
    lampBlock.style = 'background: rgba(66, 141, 255, 0.5);';
        
}
lamp[2].onmouseout = function() {
    lamp[2].style = 'opacity: .2;';
    shadow[2].style = 'opacity: 0;';
    lampBlock.style = 'background: rgb(255, 255, 255);';
}

// Параллакс --------------------------------------------------------
var scrlPos = 0,
    scrl,
    slide,
    scrlTxtDflt = -100,
    img = document.querySelector('.dz-8-parallax__effect'),
    txt =document.querySelector('.dz-8-parallax__text');
txt.style = `transform: translateY(${scrlTxtDflt}%)`;
document.addEventListener('scroll', function(){
    scrlPos = window.pageYOffset;
    scrl = scrlPos/10;
    scrlTxt = scrlTxtDflt + (scrlPos/5);
    img.style = `background-position-y: ${scrl}%`;
    txt.style = `transform: translateY(${scrlTxt}%)`;
});



// Слайдер ---------------------------------------------------
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