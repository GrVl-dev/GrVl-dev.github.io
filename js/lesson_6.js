/* var count = -1,
    block = document.getElementsByClassName('butn_js')[0];
    block2 = document.getElementsByClassName('butn_js')[1];
counter();
function counter() {

    block.innerHTML = ++count;
}

function counter2() {
    count *= count;
    block.innerHTML = count;
}

block.onclick = counter;
block2.onclick = counter2;

var block3 = document.getElementsByClassName('butn_js')[2];
document.body.onmousemove = function (event) {
    block3.style.top = event.clientY + "px";
    block3.style.left = event.clientX + "px";
    return false;
}

document.body.addEventListener('keydown', function (event) {
    console.log(event);
});

var input = document.getElementsByClassName('input_js')[0];
var result = document.getElementsByClassName('result_js')[0];

input.addEventListener('input', function (event) {
    console.log(event);
    result.innerHTML = input.value;
});

input.addEventListener('change', function (event) {
    console.log(event);
    result.innerHTML = input.value;
}); */