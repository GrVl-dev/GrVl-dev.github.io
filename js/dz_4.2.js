/* var  orthography = {
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
 */