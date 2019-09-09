var lamp = document.querySelectorAll('.dz-8-lamp__item_js'),
    shadow = document.querySelectorAll('.dz-8-lamp__item-shadow_js'),
    lampBlock = document.querySelector('.dz-8-lamp');

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