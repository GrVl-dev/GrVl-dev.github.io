/* var word = {
  name: 'имя',
  age: 'возраст'
}

function maper(text) {
  if(text) {
    return word[text];
  } else {
    return;
  }
}
alert(maper("name")); */

/* var calc = {
  init: init,
  func: sum,
  isNum: isNum
}

function init() {
  calc.a = prompt('Введите a');
  calc.b = prompt('Введите b');
}

function isNum() {
  if(+calc.a == +calc.a && +calc.b == +calc.b) {
    return true;
  } else {
    return false;
  }
}

function sum(a) {
  a();
  return Number(calc.a) + Number(calc.b);
}

function callback() {
  console.log('Функция начала работу!');
}
calc.init();

if(calc.isNum()) {
  alert(calc.func(callback));
} else {
  alert('error');
}
 */
/* 
var str = 'Саша, Маша, Степа, Коля';

for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

var str2 = str.charAt(0);
console.log(str2);

var str3 = str.toUpperCase();
console.log(str3);

var str4 = str.toLowerCase();
console.log(str4);

var str5 = str.indexOf('а', 3);
console.log(str5);

var str6 = str.substring(0, 4);
console.log(str6);

var str7 = str.replace('С', 'кака');
console.log(str7);

var str8 = str.concat('Fly', 'кака');
console.log(str8);

var str9 = str.concat('Fly', 'кака');
console.log(str9); */

/* 
var arr = [],
    col = 5;

function initArr(a, b) {
  a();
  for(var i = 0; i < col; i++) {
    arr[i] = prompt('Введите ' + (i + 1) + ' элемент массива');
  }
  b();

  console.log(arr);
}

function begin() {
  console.log('Начало функции!');
}

function end() {
  console.log('Конец функции!');
}

initArr(begin, end); */