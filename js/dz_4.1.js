//второе задание из прошлой домашки-------------------------
/* var fruits = [],
  task = "Введите название 5-ти фруктов, ",
  numbers = ["первый:", "второй:", "третий:", "четвертый:", "пятый:"];

function inputData() {
  for (var i = 0; i < 5; i++) {
    fruits[i] = prompt(task + numbers[i]);
    if (!fruits[i]) {
      alert("Что-то пошло не так, попробуйте еще!!!");
      i--;
    }
  }
}
function outputData(input) {
  input();
  console.log("Обратный порядок введенных фруктов:");
  for (var i = 4; i > -1; i--) {
    console.log((i + 1) + " фрукт" + " - " + fruits[i]);
  }
}

outputData(inputData);
 */

 //третье задание из прошлой домашки-------------------------

/* var shop = {
  init: init,
  output: output
}

function init() {
  init.store = prompt("Введите название магазина:"); // при имени init.name возвращает имя функции...
  init.amount = prompt("Введите количество продуктов в магазине:");
  while (+init.amount !== +init.amount || +init.amount <= 0) {
    init.amount = prompt("Введите количество продуктов в магазине еще раз, прошлый ввод ошибочен:");
  }
  init.products = [];
  for (var i = 0; i < init.amount; i++) {
    init.products[i] = {};
    init.products[i].title = prompt("Введите наименование "  + (i + 1) + "-го продукта:");
    init.products[i].price = prompt("Введите цену продукта " + init.products[i].title);
    while (+init.products[i].price !== +init.products[i].price || +init.products[i].price <= 0) {
      init.products[i].price = prompt("Вы указали цену в необычном формате, попробуйте еще раз!");
    }
  }
  output();
}

function output() {
  console.log("Название магазина: " + init.store);
  console.log("Количество продуктов: " + init.amount);
  console.log("Продукты в магазине:");
  
  for (var i = 0; i < init.amount; i++) {
    console.log("Продукт - " + init.products[i].title + ", цена - " + init.products[i].price + "\u20BD");
  }
}

shop.init();
console.log(shop); */
