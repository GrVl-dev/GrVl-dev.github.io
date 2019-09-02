var here = document.querySelectorAll('.header__links-item_js');
here[5].style.color = '#3590CC';



// Первое задание----------------
var ctrlBlock = document.querySelector('.dz-6__ctrlBlock_js'),
    nextTask = document.querySelector('.dz-6__nextTask_js'),
    newBlock = document.querySelector('.dz-6__newBlock_js'),
    numTask = document.querySelector('.dz-6__numTask_js'),
    cntxMenu = document.querySelector('.dz-6__cntxMenu_js'),
    square = document.querySelector('.dz-6__square_js'),
    triangle = document.querySelector('.dz-6__triangle_js'),
    cntxMenuItem = document.querySelector('.dz-6__cntxMenu_js').children,
    cont = document.querySelector('.dz-6__content_js'),
    textTask01 = 'Кликни левой кнопкой мыши, чтобы изменить стиль',
    textTask02 = 'Кликни левой кнопкой мыши, чтобы добавить новый блок',
    textNewBlock = 'Вы проявили невероятные способности в управлении мышкой',
    cleanStyle = '',
    newStyle =  
    'background: rgb(253, 100, 0);' + 
    'border: 5px solid rgb(255, 206, 206);' +
    'color: rgb(255, 206, 206);' +
    'width: 220px;' +
    'height: 120px;' +
    'margin-bottom: 0;',
    countTask = 2,
    event,
    count = 0;
function setVisible(block, text) {
    block.classList.add('dz-6__setVisible');
    block.innerHTML = text;
    ctrlBlock.style = cleanStyle;
}

function changeStyle() {
    if(count % 2) {
        ctrlBlock.style = cleanStyle;
    } else {
        ctrlBlock.style = newStyle;
    }
    count++;
}

function addBlock() {
    setVisible(newBlock, textNewBlock);
}

function changeTask() {
    if (countTask == 2) {
        setVisible(ctrlBlock, textTask02);
        numTask.innerHTML = '2';
        ctrlBlock.addEventListener('click', addBlock);
    } else if (countTask == 3) {
        ctrlBlock.classList.remove('dz-6__setVisible');
        ctrlBlock.innerHTML = '';
        newBlock.classList.remove('dz-6__setVisible');
        newBlock.innerHTML = '';
        numTask.innerHTML = '3';
        nextTask.innerHTML = 'Перейти в начало этого увлекательного квеста';
        cont.addEventListener('contextmenu', addCntxMenu);
        document.addEventListener('keydown', function (event) {
            if (event.code == 'Escape') {
                delCntxMenu();
            }
        });
        document.addEventListener('click', function (event) {
            if(event) {
                delCntxMenu();
            }    

        }); 
    } else {
        window.location.reload();
    }
    countTask++;
}

function addCntxMenu() {
    event.preventDefault();
    cntxMenu.classList.add('dz-6__cntxStyle');
    cntxMenu.style.top = event.clientY + 'px';
    cntxMenu.style.left = event.clientX + 'px';
    cntxMenuItem[0].innerHTML = 'Добавить/удалить квадрат';
    cntxMenuItem[1].innerHTML = 'Bounce анимация квадрата(вкл/выкл)';
    cntxMenuItem[2].innerHTML = 'Добавить/удалить треугольник';
    cntxMenuItem[3].innerHTML = 'LeftRightAnimate на треугольник(вкл/выкл)';
    cntxMenuItem[4].innerHTML = 'Вернуть все в исходное состояние';
    for (i = 0; i < 5; i++){
        cntxMenuItem[i].classList.add('dz-6__cntxItem');
    }
    
    cntxMenuItem[0].addEventListener('click', squareAdd);
    cntxMenuItem[1].addEventListener('click', bounce);
    cntxMenuItem[2].addEventListener('click', triangleAdd);
    cntxMenuItem[3].addEventListener('click', lftRghtMove);
    cntxMenuItem[4].addEventListener('click', clearAll);
}

function delCntxMenu() {
    for (var i = 0; i < 5; i++){
        cntxMenuItem[i].classList.remove('dz-6__cntxItem');
        cntxMenuItem[i].innerHTML = '';
    }
    cntxMenu.classList.remove('dz-6__cntxStyle');
}

function squareAdd() {
    if(square.classList.contains("dz-6__squareVsbl")) {
        square.classList.remove('dz-6__squareVsbl');
        square.classList.remove('dz-6__bounce');
    } else {
        square.classList.add('dz-6__squareVsbl');
    }
    square.style.top = (event.clientY - 50) + 'px';
    square.style.left = (event.clientX - 50) + 'px';
}

function triangleAdd() {
    if(triangle.classList.contains("dz-6__triangleVsbl")) {
        triangle.classList.remove('dz-6__triangleVsbl');
        triangle.innerHTML = '';
    } else {
        triangle.classList.add('dz-6__triangleVsbl');
        triangle.innerHTML = "&#9650;";
    }
    triangle.style.top = (event.clientY - 50) + 'px';
    triangle.style.left = (event.clientX - 50) + 'px';
}

function clearAll() {
    triangle.classList.remove('dz-6__triangleVsbl');
    triangle.innerHTML = '';
    triangle.style = '';
    square.classList.remove('dz-6__squareVsbl');
    square.classList.remove('dz-6__bounce');
    document.body.onmousemove = function (event) {
        triangle.style.left = '';
    }
}

function bounce() {
    if(square.classList.contains("dz-6__squareVsbl")) {
        if(square.classList.contains("dz-6__bounce")) {
            square.classList.remove('dz-6__bounce');
        } else {
            square.classList.add('dz-6__bounce');
        }
    }
}
function lftRghtMove() {
    if(triangle.classList.contains("dz-6__triangleVsbl")) {
        if(triangle.classList.contains("dz-6__lftRght")) {
            triangle.classList.remove('dz-6__lftRght');
            triangle.style.transition = '';
            document.body.onmousemove = function (event) {
                triangle.style.left = '';
            }
        } else {
            triangle.classList.add('dz-6__lftRght');
            triangle.style.transition = '2s';
            document.body.onmousemove = function (event) {
                triangle.style.left = event.clientX + 'px';
            }
        }
    }
}

setVisible(ctrlBlock, textTask01);
ctrlBlock.addEventListener('click', changeStyle);
nextTask.addEventListener('click', changeTask);
