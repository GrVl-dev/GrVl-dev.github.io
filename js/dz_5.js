var here = document.querySelectorAll('.header__links-item_js');
here[4].style.color = '#3590CC';

// первое задание------------------------------------------
var blocks = document.getElementsByClassName('dz-5_js')[0];
blocks.innerHTML += '<div class = "block-3">Третий блок</div>';

// Второе задание-------------------------------------------
var blockInf = {
    init: init,
    checkInput: checkInput,
    outputInf: outputInf
}

function checkInput(className) {
    if (!className || Number(className[0])) {
        return false;
    }
    var elem = document.querySelectorAll('.' + className),
        len = elem.length;
    return len;
}

function init() {
    var className = prompt('Введите имя класса для поиска:');
    while(true) {
            var check = checkInput(className);
        if(check) break;
        className = prompt(
            "Вы не ввели текст или класс c таким именем отсутствует. Попробуйте еще!"
            );
    }
    outputInf(className);
}

function outputInf(className) {
    var elem = document.querySelectorAll('.' + className),
        len = elem.length;
    console.log("Класс \"" + className + "\" встречается " + len + " раз(а):");
    for (i = 0; i < len; i++) {
        console.log((i + 1) + " " + elem[i].innerHTML);
    }
}
init();

// третье задание-----------------------------------
var newClass = document.getElementsByClassName('block-1')[0];

setTimeout(function() {
    newClass.classList.add("newClass-1");
}, 3000);
setTimeout(function() {
    newClass.classList.add("newClass-2");
}, 6000);

// четвертое задание-----------------
var elements = document.querySelector('.dz-5_js').children;
setTimeout(function() {
    elements[0].classList.add('circle-0');
    elements[1].classList.add('circle-1');
    elements[2].classList.add('circle-2');
}, 12000);