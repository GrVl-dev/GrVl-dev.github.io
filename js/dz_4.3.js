/* var slice = {
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
console.log(slice.outputText); */