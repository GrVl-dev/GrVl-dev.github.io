var here = document.querySelectorAll('.header__links-item_js');
here[6].style.color = '#3590CC';


var inputBox = document.createElement('div'),
    inputTypeBox = document.createElement('div'),
    inputNumBox = document.createElement('div'),
    button = document.querySelector('.list__button_js'),
    itemBox = document.querySelector('.list__item-box_js'),
    inputSelectBox = document.querySelector('.list__input-select-box_js'),
    listControl = document.querySelector('.list__control_js'),
    insert = 'beforeend';

inputBox.className = 'list__input';
inputTypeBox.className = 'list__input';
inputNumBox.className = 'list__input';
inputBox.innerHTML = '<h3 class="list__input-title list__input-title_js">Введите текст записи</h3>' + 
  '<input type="text" placeholder="Текст" class="list__input list__input_js">';
inputNumBox.innerHTML = '<h3 class="list__input-title list__input-title_js">Введите номер из списка</h3>' + 
  '<input type="number" placeholder="Номер" class="list__input-num list__input-num_js">';
inputTypeBox.innerHTML = '<h3 class="list__input-title list__input-title_js">Выберите куда добавить запись</h3>' + 
  '<form class="list__input-type-form list__input-type-form_js">' +
  '<input type="radio" name = "insert" class="list__input-type list__input-type_js" value="afterbegin"> В начало списка' +
  '<input type="radio" name = "insert" class="list__input-type list__input-type_js" value="beforeend"> В конец списка' + 
  '</form>';

inputSelectBox.addEventListener('click', function(){
  var check = inputSelectBox.control.value;

  if (check == 'add') {
    listControl.insertAdjacentElement('beforeend', inputBox);
    listControl.insertAdjacentElement('beforeend', inputTypeBox);
    inputNumBox.remove();
    var inputTypeForm = document.querySelector('.list__input-type-form_js');
    inputTypeForm.addEventListener('click', function(){
      insert = inputTypeForm.insert.value;
    });
    button.onclick = function () {
      var newRecord = document.createElement('li'),
          input = document.querySelector('.list__input_js'),
          check = input.value;
      newRecord.innerText = input.value;
      input.value = '';
      newRecord.classList.add('list__item');
      if(check) {
        itemBox.insertAdjacentElement(insert, newRecord);
      }
    }
  } else if (check == 'del') {
    listControl.insertAdjacentElement('beforeend', inputNumBox);
    inputTypeBox.remove();
    inputBox.remove();
    button.onclick = function () {
      var inputNum = document.querySelector('.list__input-num_js'),
          numItem = inputNum.value - 1,
          items = itemBox.children,
          item = items[numItem];
      inputNum.value = '';
      if (item) {
        item.remove();
      }
    }
  } else if (check == 'edit') {
    listControl.insertAdjacentElement('beforeend', inputNumBox);
    listControl.insertAdjacentElement('beforeend', inputBox);
    inputTypeBox.remove();
    var inputNum = document.querySelector('.list__input-num_js'),
        input = document.querySelector('.list__input_js');
    button.onclick = function () {
      input.value = '';
    }
    inputNum.oninput = function () {
      var numItem = inputNum.value - 1,
          items = itemBox.children,
          item = items[numItem];
      if (item) {
        input.value = item.innerHTML;
        button.onclick = function () {
          item.innerHTML = input.value;
          input.value = '';
          inputNum.value = '';
          item = '';
        }
      } else {
        input.value = '';
        inputNum.value = '';
        item = '';
        button.onclick = function () {
          item.innerHTML = '';
        }
      }
    }
  }
});


// Второе задание----------------------------
var tempC = document.querySelector('.temp__cels_js'),
    tempF = document.querySelector('.temp__far_js');
tempC.oninput = function () {
  console.log(tempC.value);
  if (tempC.value > (-274) && tempC.value < 0) {
    
    tempF.innerHTML = (32 + 1.8 * (+tempC.value)).toFixed(2);
  } else if (tempC.value == 0){
    tempF.innerHTML = 32;
  } else if (tempC.value > 0){
    tempF.innerHTML = (32 + 1.8 * Math.abs(+tempC.value)).toFixed(2);
  }
}

