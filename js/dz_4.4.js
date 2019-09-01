/* var shop = {
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
shop.init(); */