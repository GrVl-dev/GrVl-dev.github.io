var here = document.querySelectorAll('.header__links-item_js');
here[1].style.color = '#3590CC';

setTimeout(function() {
	var str = "Hello",
		str_num = "1234567",
		num = 1234568,
		num_0 = 0,
		num_1 = 1,
		nul = null,
		bln_tr = true, 
		bln_fls = false,
		undf,
		result = " , результат сравнения -  ";

	console.log(str + "(" + typeof(str) + ")" + " < " + str_num + "(" + typeof(str_num) + ")"  + result + (str < str_num));
	console.log("строки сравниваются по значению символа Unicode");
	console.log(num + "(" + typeof(num) + ")" + " > " + str_num + "(" + typeof(str_num) + ")"  + result + (num > str_num));
	console.log("Number и String приведены к общему типу Number");
	console.log(num_1 + "(" + typeof(num_1) + ")" + " == " + bln_tr + "(" + typeof(bln_tr) + ")"  + result + (num_1 == bln_tr));
	console.log("число 1 равно булевой true, а 0 равен false");
	console.log(nul + "(" + typeof(nul) + ")" + " == " + undf + "(" + typeof(undf) + ")"  + result + (nul == undf));
	console.log(nul + "(" + typeof(nul) + ")" + " === " + undf + "(" + typeof(undf) + ")"  + result + (nul === undf));
	console.log(nul + "(" + typeof(nul) + ")" + " >= " + undf + "(" + typeof(undf) + ")"  + result + (nul >= undf));
	console.log(nul + "(" + typeof(nul) + ")" + " <= " + undf + "(" + typeof(undf) + ")"  + result + (nul <= undf));
	console.log("При нестрогом сравнении Null равен Undefined, при строгом не равны, но и не больше и не меньше");


	var num_1 = Number(prompt("Введите первое однозначное число")),
		num_2 = Number(prompt("Введите второе однозначное число"));

	if (String(num_1) == "NaN" || String(num_2) == "NaN") {
		alert("Вас же попросили ввести число!!!!");
	} else if (num_1 > num_2) {
		alert("Первое введенное число больше второго");
	} else if (num_1 < num_2) {
		alert("Второе введенное число больше первого");
	} else { 
		alert("Введенные числа равны");
	}


	var letter_1 = prompt("Введите первую букву"),
		letter_2 = prompt("Введите вторую букву");

	if (letter_1 > letter_2) {
		alert(letter_2 + " - эта буква стоит в алфавите раньше, чем буква - " + letter_1);
	} else if (letter_1 < letter_2) {
		alert(letter_1 + " - эта буква стоит в алфавите раньше, чем буква - " + letter_2);
	}
}, 4000)