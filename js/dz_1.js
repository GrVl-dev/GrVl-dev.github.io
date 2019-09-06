var here = document.querySelectorAll('.header__links-item_js');
here[0].style.color = '#3590CC';

setTimeout(function() {
    var string = '"Hello world"',
    number = 123,
    boolean = true,
    nul = null,
    datatype = ", data type is - ",
    undfnd;

console.log(string + datatype + typeof string);
console.log('"' + number  + '"' + datatype + typeof number);
console.log('"' + boolean  + '"' + datatype + typeof boolean);
console.log('"' + nul  + '"' + datatype + typeof nul);
console.log('"' + undfnd  + '"' + datatype + typeof undfnd);



var num = prompt("Введите число");
//     result = num * num;
// alert(num + "^2 = " + result);
alert(num + "^2 = " + Math.pow(num, 2));


var action = prompt("Введите одно из действий * , / , + , -"),
    num_1 = prompt("Введите первое число"),
    num_2 = prompt("Введите второе число"),
    result,
    num_1 = Number(num_1),
    num_2 = Number(num_2);
if (action === "*" ) {
    result = num_1 * num_2;
} else if (action === "/" ) {
    result = num_1 / num_2;
} else if (action === "-" ) {
    result = num_1 - num_2;
} else if (action === "+" ) {
    result = + num_1 + + num_2;
 } else {
    result = ("Введите только указаные знаки!!!!");
 }

 if (String(num_1) == "NaN" || String(num_2) == "NaN") {
    result = "Введите число, а не что-то там еще";
 } else if (action === "/" && num_2 === 0) {
    result = "На ноль не делим, впадлу";
 }

 if (Boolean(num_1) == false || Boolean(num_2) == false) {
     result = "Вы ввели пустую строку";
 }
 alert(result); 
}, 4000)

