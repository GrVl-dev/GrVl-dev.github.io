// ДОМАШНЕЕ ЗАДАНИЕ
var here = document.querySelectorAll('.header__links-item_js');
here[10].style.color = '#3590CC';

// загружаем скрипт с отсчетом времени---------------------
loadScript("./js/dz_11_time.js", function (err) {
  if(err) {
    console.log("error")
  } else {
    console.log('script "dz_11_time.js" loaded');
  }
});

// загружаем скрипт с лампочкой----------------------------
loadScript("./js/dz_11_lamp.js", function (err) {
  if(err) {
    console.log("error")
  } else {
    console.log('script "dz_11_lamp.js" loaded');
  }
});

//загружаем скрипт с параллакс эффектом---------------------

loadScript("./js/dz_11_parallax.js", function (err) {
  if(err) {
    console.log("error")
  } else {
    console.log('script "dz_11_parallax.js" loaded');
  }
});

//загружаем скрипт со слайдером------------------------
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null);
  script.onerror = () => callback({message: "не нашли файл", code: 404});
  document.head.append(script);
}

loadScript("./js/dz_11_slider.js", function (err) {
  if(err) {
    console.log("error")
  } else {
    console.log('script "dz_11_slider.js" loaded');
  }
});




// функция загрузки с помощью callback----------------
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null);
  script.onerror = () => callback({message: "не нашли файл", code: 404});
  document.head.append(script);
}

// функция загрузки с помощью promise----------------
var loadPromise = function (src) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement("script"),
        div = document.createElement("div");
    div.className = "message_js";
    div.innerText = `файл "${src}" загружен`;
    script.src = src;
    script.onload = () => resolve(div);
    script.onerror = () => reject({message: "не нашли файл", code: 404});
    document.head.append(script);
  });
}
// Загрузка скриптов с помощью промисов------------------------
loadPromise("./js/dz_11_time.js")
  .then(Payload => document.body.insertAdjacentElement('beforeend', Payload))
  .catch(err => console.log(err))
  .finally(()=> console.log("промис отработал"))

loadPromise("./js/dz_11_lamp.js")
  .then(Payload => document.body.insertAdjacentElement('beforeend', Payload))
  .catch(err => console.log(err))
  .finally(()=> console.log("промис отработал"))

loadPromise("./js/dz_11_parallax.js")
  .then(Payload => document.body.insertAdjacentElement('beforeend', Payload))
  .catch(err => console.log(err))
  .finally(()=> console.log("промис отработал"))

loadPromise("./js/dz_11_slider.js")
  .then(Payload => document.body.insertAdjacentElement('beforeend', Payload))
  .catch(err => console.log(err))
  .finally(()=> console.log("промис отработал"))




  
// НА УРОКЕ ----------------------------------
// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = () => callback(null);
//     script.onerror = () => callback({message: "не нашли файл", code: 404});
//     document.head.append(script);
// }

// loadScript("./js/dz_11-2.js", function (err) {
//     if(err) {
//         console.log("error")
//     } else {
//         console.log(user);
//     }
// });
// console.log(user);


// var loadScript = new Promise(function (resolve, reject) {
//     var script = document.createElement("script");
//     script.src = "./js/dz_11-2.js";
//     script.onload = () => resolve(user);
//     script.onerror = () => reject({message: "не нашли файл", code: 404});
//     document.head.append(script);
// });


// loadScript
//     .then(payload => payload = "Новый Стасян")
//     .then(secondPayload => console.log(secondPayload))
//     .catch(err => console.log(err))
//     .finally(()=> console.log("промис отработал"))

// var loadScript = function (src) {
//     return new Promise(function(resolve, reject) {
//         var script = document.createElement("script");
//         script.src = src;
//         script.onload = () => resolve(user);
//         script.onerror = () => reject({message: "не нашли файл", code: 404});
//         document.head.append(script);
//     });
// }


// loadScript("./js/dz_11-2.js")
//     .then(secondPayload => console.log(secondPayload))
//     .catch(err => console.log(err))
//     .finally(()=> console.log("промис отработал"))