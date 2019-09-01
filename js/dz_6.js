/* // Первое задание----------------
var ctrlBlock = document.querySelector('.ctrlBlock'),
    nextTask = document.querySelector('.nextTask'),
    newBlock = document.querySelector('.newBlock'),
    numTask = document.querySelector('.numTask'),
    cntxMenu = document.querySelector('.cntxMenu'),
    square = document.querySelector('.square'),
    triangle = document.querySelector('.triangle'),
    cntxMenuItem = document.querySelector('.cntxMenu').children,
    cont = document.querySelector('.content'),
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
    block.classList.add('setVisible');
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
        ctrlBlock.classList.remove('setVisible');
        ctrlBlock.innerHTML = '';
        newBlock.classList.remove('setVisible');
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
    cntxMenu.classList.add('cntxStyle');
    cntxMenu.style.top = event.clientY + 'px';
    cntxMenu.style.left = event.clientX + 'px';
    cntxMenuItem[0].innerHTML = 'Добавить/удалить квадрат';
    cntxMenuItem[1].innerHTML = 'Bounce анимация квадрата(вкл/выкл)';
    cntxMenuItem[2].innerHTML = 'Добавить/удалить треугольник';
    cntxMenuItem[3].innerHTML = 'LeftRightAnimate на треугольник(вкл/выкл)';
    cntxMenuItem[4].innerHTML = 'Вернуть все в исходное состояние';
    for (i = 0; i < 5; i++){
        cntxMenuItem[i].classList.add('cntxItem');
    }
    
    cntxMenuItem[0].addEventListener('click', squareAdd);
    cntxMenuItem[1].addEventListener('click', bounce);
    cntxMenuItem[2].addEventListener('click', triangleAdd);
    cntxMenuItem[3].addEventListener('click', lftRghtMove);
    cntxMenuItem[4].addEventListener('click', clearAll);
}

function delCntxMenu() {
    for (var i = 0; i < 5; i++){
        cntxMenuItem[i].classList.remove('cntxItem');
        cntxMenuItem[i].innerHTML = '';
    }
    cntxMenu.classList.remove('cntxStyle');
}

function squareAdd() {
    if(square.classList.contains("squareVsbl")) {
        square.classList.remove('squareVsbl');
        square.classList.remove('bounce');
    } else {
        square.classList.add('squareVsbl');
    }
    square.style.top = (event.clientY - 50) + 'px';
    square.style.left = (event.clientX - 50) + 'px';
}

function triangleAdd() {
    if(triangle.classList.contains("triangleVsbl")) {
        triangle.classList.remove('triangleVsbl');
        triangle.innerHTML = '';
    } else {
        triangle.classList.add('triangleVsbl');
        triangle.innerHTML = "&#9650;";
    }
    triangle.style.top = (event.clientY - 50) + 'px';
    triangle.style.left = (event.clientX - 50) + 'px';
}

function clearAll() {
    triangle.classList.remove('triangleVsbl');
    triangle.innerHTML = '';
    triangle.style = '';
    square.classList.remove('squareVsbl');
    square.classList.remove('bounce');
    document.body.onmousemove = function (event) {
        triangle.style.left = '';
    }
}

function bounce() {
    if(square.classList.contains("squareVsbl")) {
        if(square.classList.contains("bounce")) {
            square.classList.remove('bounce');
        } else {
            square.classList.add('bounce');
        }
    }
}
function lftRghtMove() {
    if(triangle.classList.contains("triangleVsbl")) {
        if(triangle.classList.contains("lftRght")) {
            triangle.classList.remove('lftRght');
            triangle.style.transition = '';
            document.body.onmousemove = function (event) {
                triangle.style.left = '';
            }
        } else {
            triangle.classList.add('lftRght');
            triangle.style.transition = '2s';
            document.body.onmousemove = function (event) {
                triangle.style.left = event.clientX + 'px';
            }
        }
    }
}

setVisible(ctrlBlock, textTask01);
ctrlBlock.addEventListener('click', changeStyle);
nextTask.addEventListener('click', changeTask); */