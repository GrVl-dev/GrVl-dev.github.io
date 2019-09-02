var here = document.querySelectorAll('.header__links-item_js');
here[3].style.color = '#3590CC';

var control = document.querySelectorAll('.dz-4__button_js');

control[0].onclick = task1;
control[1].onclick = task2;
control[2].onclick = task3;
control[3].onclick = task4;

function task1() {
  //второе задание из прошлой домашки-------------------------
  var fruits = [],
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


  //третье задание из прошлой домашки-------------------------

  var shop1 = {
    init1: init1,
    output1: output1
  }

  function init1() {
    init1.store = prompt("Введите название магазина:"); // при имени init.name возвращает имя функции...
    init1.amount = prompt("Введите количество продуктов в магазине:");
    while (+init1.amount !== +init1.amount || +init1.amount <= 0) {
      init1.amount = prompt("Введите количество продуктов в магазине еще раз, прошлый ввод ошибочен:");
    }
    init1.products = [];
    for (var i = 0; i < init1.amount; i++) {
      init1.products[i] = {};
      init1.products[i].title = prompt("Введите наименование "  + (i + 1) + "-го продукта:");
      init1.products[i].price = prompt("Введите цену продукта " + init1.products[i].title);
      while (+init1.products[i].price !== +init1.products[i].price || +init1.products[i].price <= 0) {
        init1.products[i].price = prompt("Вы указали цену в необычном формате, попробуйте еще раз!");
      }
    }
    output1();
  }

  function output1() {
    console.log("Название магазина: " + init1.store);
    console.log("Количество продуктов: " + init1.amount);
    console.log("Продукты в магазине:");
    
    for (var i = 0; i < init1.amount; i++) {
      console.log("Продукт - " + init1.products[i].title + ", цена - " + init1.products[i].price + "\u20BD");
    }
  }

  shop1.init1();
  console.log(shop1);
}

function task2() {
  // Второе задание -----------------------------
  var  orthography = {
    letterUp: letterUp,
    init: init,
  }
  function letterUp() {
    var target = ".",
        textUp = "",
        foundPos,
        pos = 0;
    while (true) {
      foundPos = orthography.text.indexOf(target, pos);
      if (foundPos == -1) break;
      for (var i = pos; i <= foundPos; i++) {
        if ( i == pos || i == (pos + 1) && i != 1) {
          textUp += orthography.text.charAt(i).toUpperCase();
        } else {
          textUp += orthography.text.charAt(i);
        }
      }
      pos = foundPos + 1;
    }
    orthography.text = textUp;
  }
  
  function init() {
    orthography.text = prompt("Введите текст");
    while (!orthography.text) {
      orthography.text = prompt("Что-то пошло не так, попробуйте еще раз ввести текст");
    }
    orthography.letterUp();
  }
  init();
  alert(orthography.text);
}

function task3() {
    // Третье задание -----------------------------

  var slice = {
    getSlice: getSlice,
    init: init
  }

  function getSlice() {
    var foundPos = slice.inputTextLower.indexOf("кукушка", 0);
    slice.outputText = slice.inputText.slice(0, foundPos);
  }

  function init() {
    slice.inputText = prompt("Введите текст, в коротом обязательно присутствует слово Кукушка");
    slice.inputTextLower = slice.inputText.toLowerCase();
    while (!slice.inputText || slice.inputTextLower.indexOf("кукушка", 0) == -1) {
      slice.inputText = prompt("Что-то пошло не так, попробуйте еще раз ввести текст");
      slice.inputTextLower = slice.inputText.toLowerCase();
    }
    slice.getSlice();
  }
  init();
  console.log(slice.inputText);
  console.log(slice.inputTextLower);
  console.log(slice.outputText);
}

function task4() {
  //  четвертое задание ----------------------------------------

  var shop = {
    name,
    products,
    init: init,
    inputProducts: inputProducts,
    controlPanel: controlPanel,
    checkPoint: checkPoint,
    delProduct: delProduct,
    outputProducts: outputProducts,
    changePrice: changePrice,
    searchPrice: searchPrice,
    searchName: searchName
  }

  function init() {
  shop.name = prompt("Введите название магазина:");
  shop.products = [];
  shop.inputProducts();
  shop.controlPanel();
  }

  function inputProducts() {
  while (true) {
    var i = shop.products.length,
    firstEntry = "";
    if (!i) {
      firstEntry = "Ваш магазин пуст, необходимо добавить минимум один товар. ";
    }
    shop.products[i] = {};
    shop.products[i].title = prompt(firstEntry + "Введите наименование "  + (i + 1) + "-го товара:");
    while (!shop.products[i].title) {
      shop.products[i].title = prompt("Что-то пошло не так! Введите наименование "  + (i + 1) + "-го товара еще раз:");
    }
    shop.products[i].price = prompt("Введите цену товара \"" + shop.products[i].title + "\":");
    while (+shop.products[i].price !== +shop.products[i].price || +shop.products[i].price <= 0) {
      shop.products[i].price = prompt("Вы указали цену в необычном формате, попробуйте еще раз!");
      }
    if (!confirm("Добавить еще товар?")) break;
  }
  }

  function controlPanel() {
  var title = "Панель управления магазином \"" + shop.name + "\". " + "Введите номер пункта желаемого действия: \n",
      point_1 = "1. Добавить новый товар в конец списка \n",
      point_2 = "2. Удалить товар по номеру в списке \n",
      point_3 = "3. Изменить цену товара по номеру в списке \n",
      point_4 = "4. Поиск товаров по цене \n",
      point_5 = "5. Поиск по наименованию товара \n",
      point_6 = "6. Вывод всех товаров \n",
      point_7 = "7. Вывод всего магазина в консоль \n",
      point_8 = "8. Выход из панели управления \n",
      error = "Что-то пошло не так, попробуйте еще раз. \n"
  while (true) {    
    shop.controlPanel.point = prompt(
      title + point_1 + point_2 + point_3 + point_4 + point_5 + point_6 + point_7 +point_8
    )
    while(!(+controlPanel.point) || controlPanel.point < 1 || controlPanel.point > 8) {
      controlPanel.point = prompt(
        error + title + point_1 + point_2 + point_3 + point_4 + point_5 + point_6 + point_7 +point_8
      )
    }
    if (shop.controlPanel.point == 8) break;
    if (shop.controlPanel.point == 7) {
      console.log(
        "Название магазина: \"" + shop.name + "\"\n" + "Список товаров:\n" + shop.outputProducts()
      );
      console.log(shop);
      break;
    }
    checkPoint();
  }
  }

  function checkPoint() {
  var i = shop.controlPanel.point;
  if (i == 1) {
    shop.inputProducts();
  } else if (i == 2) {
    shop.delProduct();
  } else if (i == 3) {
    shop.changePrice();
  } else if (i == 4) {
    shop.searchPrice();
  } else if (i == 5) {
    shop.searchName();
  } else if (i == 6) {
    alert(shop.outputProducts());
  }
  }

  function delProduct() {
  var len = shop.products.length;
  if(!len) {
    alert("Ваш магазин пуст, удалять больше нечего!");
    return;
  }
  var i = prompt(
    shop.outputProducts() + "Введите номер товара, который хотите удалить:"
    );
  while(!(+i) || +i < 0 || +i > len) {
    i = prompt(
      "Ошибочный ввод! \n" + shop.outputProducts() + "Введите номер товара, который хотите удалить:"
    )
  }
  shop.products.splice((+i - 1), 1);
  if (confirm("Хотите удалить еще товар?")) delProduct();
  }

  function outputProducts() {
  var list = "",
    len = shop.products.length;
  for (var i = 0; i < len; i++) {
    list += ((i + 1) + ". " + shop.products[i].title + " - " + shop.products[i].price + "\u20BD \n");
  }
  return list;
  }

  function changePrice() {
  var len = shop.products.length;
  if(!len) {
    alert("Ваш магазин пуст, поменять цену не получится!");
    return;
  }
  var i = prompt(
    shop.outputProducts() + "Введите номер товара, у которого хотите изменить цену:"
    );
  while (!(+i) || +i < 0 || +i > len) {
    i = prompt(
      "Ошибочный ввод! \n" + shop.outputProducts() + "Введите номер товара, у которого хотите изменить цену:"
    )
  }
  i = +i - 1;
  shop.products[i].price = prompt("Введите новую цену товара " + shop.products[i].title);
  while (+shop.products[i].price !== +shop.products[i].price || +shop.products[i].price <= 0) {
    shop.products[i].price = prompt("Вы указали цену в необычном формате, попробуйте еще раз!");
    }
  if (confirm("Хотите еще внести измения в ценах?")) shop.changePrice();
  }

  function searchPrice() {
  var price = prompt("Введите цену для поиска товара по цене:"),
    len = shop.products.length,
    list = "",
    msg = "";
  if(!len) {
    alert("Ваш магазин пуст, поиск не удастся!");
    return;
  }
  for (i = 0; i < len; i++ ) {
    if (price == shop.products[i].price) {
      list += (shop.products[i].title + " - " + shop.products[i].price + "\u20BD \n");
    }
  }
  if (!list) {
    msg = "Товар по цене отстуствует! ";
  } else {
    alert(list);
  }
  if (confirm(msg + "Выполнить поиск заново?")) shop.searchPrice();
  }

  function searchName() {
  var len = shop.products.length;
  if(!len) {
    alert("Ваш магазин пуст, поиск не удастся!");
    return;
  }
  var name = prompt("Введите наименование товара для поиска:"),
    list = "",
    msg = "";
  for (i = 0; i < len; i++ ) {
    if (name == shop.products[i].title) {
      list += (shop.products[i].title + " - " + shop.products[i].price + "\u20BD \n");
    }
  }
  if (!list) {
    msg = "Такой товар отстуствует! ";
  } else {
    alert(list);
  }
  if (confirm(msg + "Выполнить поиск заново?")) shop.searchName();
  }
  shop.init();
}