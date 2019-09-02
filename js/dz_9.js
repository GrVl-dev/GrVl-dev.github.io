var here = document.querySelectorAll('.header__links-item_js');
here[8].style.color = '#3590CC';

// 1 задание ------------------------
var block = {
  div: 'div',
  h1: 'h1',
  className: [
    'dz-9__task1 dz_9__task1_js',
    'dz-9__task1-title dz_9__task1-title_js',
    'dz-9__task1-text dz_9__task1-text_js'
  ],
  text: [
    'Создано из JSON строки',
    'Это первая строка', 
    'Это вторая строка', 
    'Это третья строка'
  ],

  style: [
    'font-size: 40px',
    'font-size: 25px'
  ]
};
var strBlock = JSON.stringify(block),
    targetBlock = document.querySelector('.dz-9__content_js');

createBlock(strBlock, targetBlock);


/**
 * @description generates a block from json string and inserts at the specified location
 * @param {String} input accepts json string
 * @param {Element} target inserts into the specified element
 */
function createBlock(input, target) {
  var prsBlock = JSON.parse(input),
      newBlock = document.createElement(prsBlock.div),
      title = document.createElement(prsBlock.h1);

  newBlock.className = prsBlock.className[0];
  title.className = prsBlock.className[1];
  title.innerHTML = prsBlock.text[0];
  title.style = prsBlock.style[0];
  target.insertAdjacentElement('beforeend', newBlock);
  newBlock.insertAdjacentElement('beforeend', title);

  for (var i = 0; i < 3; i++) {
    var txt = [];
    txt[i] = document.createElement(prsBlock.div);
    txt[i].className = prsBlock.className[2];
    newBlock.insertAdjacentElement('beforeend', txt[i]);
    txt[i].innerHTML = prsBlock.text[i + 1];
    txt[i].style = prsBlock.style[1];
  }       
};

// 3 задание -------------------------------------

/**
 * @description calculates the sum of the entered elements
 * @param {Number} i  two or more numbers
 * @returns {Number} returns the result of addition
 */
function addition() {
  var result = 0;
  for (var num = 0; num < arguments.length; num++) {
    result += arguments[num];
  }
  return result;
}

var result = addition(1, 2, 3, 4, 5);
console.log(result);