var scrlPos = 0,
    scrl,
    slide,
    scrlTxtDflt = -100,
    img = document.querySelector('.dz-8-parallax__effect'),
    txt =document.querySelector('.dz-8-parallax__text');
txt.style.transform = `translateY(${scrlTxtDflt}%)`;
document.addEventListener('scroll', function(){
    scrlPos = window.pageYOffset;
    scrl = scrlPos/10;
    scrlTxt = scrlTxtDflt + (scrlPos/5);
    img.style.backgroundPositionY = `${scrl}%`;
    txt.style.transform  = `translateY(${scrlTxt}%)`;
});
img.onmouseover = function() {
    img.style.backgroundSize = '170% auto';
}
img.onmouseout = function() {
    img.style.backgroundSize = '150% auto';
}
