var here = document.querySelectorAll('.header__links-item_js');
here[2].style.color = '#3590CC';

// setTimeout(function() {

//   //первое задание------------------------
//   var user = {},
//       name = "Имя: ",
//       age = "Возраст: ";
//   user.name = prompt("Введите имя: ");
//   user.age = prompt("Введите возраст: ");
//   console.log(user);
//   console.log(name + user.name);
//   console.log(age + user.age);

//   //второе задание-------------------------
//   var fruits = [],
//     task = "Введите название 5-ти фруктов, ",
//     numbers = ["первый:", "второй:", "третий:", "четвертый:", "пятый:"];

//   for (var i = 0; i < 5; i++) {
//     fruits[i] = prompt(task + numbers[i]);
//     if (fruits[i] == "") {
//       alert("Вы не ввели название, попробуйте еще!!!");
//       i--;
//     }
//   }
//   console.log("Обратный порядок введенных фруктов:");
//   for (var i = 4; i > -1; i--) {
//     console.log((i + 1) + " фрукт" + " - " + fruits[i]);
//   }

//   var j = 0;
//   while (j < 5) {
//     fruits[j] = prompt(task + numbers[j]);
//     if (fruits[j] == "") {
//       alert("Вы не ввели название, попробуйте еще!!!");
//       j--;
//     }
//     j++;
//   }
//   console.log("Обратный порядок введенных фруктов:");
//   j = 4;
//   while (j > -1) {
//     console.log((j + 1) + " фрукт" + " - " + fruits[j]);
//     j--;
//   }

//   //третье задание-------------
//   var store = {},
//     amount;
//   store.product = [];
//   store.name = prompt("Введите название магазина:");
//   amount = prompt("Введите количество продуктов в магазине:");

//   for (var i = 0; i < amount; i++) {
//     store.product[i] = {};
//     store.product[i].title = prompt("Введите наименование "  + (i + 1) + " продукта:");
//     if (store.product[i].title == "") {
//       alert("Не тыкайте enter пока не введете наименование!!");
//       i--;
//       continue;
//     }
//     store.product[i].price = prompt("Введите цену продукта " + store.product[i].title);
//     if (String(Number(store.product[i].price)) == "NaN" || store.product[i].price == "" || store.product[i].price <= 0) {
//       alert("Вы указали цену в необычном формате, попробуйте еще раз ввести название и цену!");
//       i--;
//     }
//   }

//   console.log("Название магазина: " + store.name);
//   console.log("Количество продуктов: " + amount);
//   console.log("Продукты в магазине:");

//   for (var i = 0; i < amount; i++) {
//     console.log("Продукт - " + store.product[i].title + ", цена - " + store.product[i].price + "\u20BD");
//   }
// }, 4000);