var here = document.querySelectorAll('.header__links-item_js');
here[11].style.color = '#3590CC';

// 1 задание --------------------------
var loadScript = function (src) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(src);
        script.onerror = () => reject({message: "не нашли файл", code: 404});
        document.head.append(script);
    });
}

Promise.all([
    loadScript("./js/dz_11_lamp.js"), loadScript("./js/dz_11_parallax.js"),
    loadScript("./js/dz_11_slider.js"), loadScript("./js/dz_11_time.js")
])
    .then(payload => {
        console.log('Все файлы успешно загружены!');
        console.log(payload);
    })
    .catch(err => {console.error(err)})

//2 задание ----------------------------------

var user = '{ name: "Vladimir" }';

function parseData(data) {
    var user = JSON.parse(data);
    return user;
}

function errCheck(data) {
    try {
        parseData(data);
    } catch (e) {
        console.log(`${e.name} - ${e.message}`);
    }
}

errCheck(user);

// 3 и 4 задание -------------------------
/**
 * Pauses the code for a set time
 * @param {nubmer} time pause duration(sec)
 */
async function delay(time) {
    await new Promise((resolve, reject) => setTimeout(resolve, time * 1000));
}


/**
 * Function loads a script
 * @param {URL} src script location
 * @param {Number} time how long to load(sec)
 */
async function loadScript2(src, time = 0) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = () => Promise.resolve(src);
    script.onerror = () => Promise.reject({message: "не нашли файл", code: 404});
    await delay(time);
    document.head.append(script);
    console.log(`скрипт ${src} загружен`);
}

Promise.all([loadScript2("./js/dz_11_slider.js", 1), loadScript2("./js/dz_11_parallax.js", 3)])
    .then(payload => {
        console.log('Все файлы успешно загружены!');
    })
    .catch(err => {console.error(err)})

// На уроке----------------------------------
// var loadScript = function (src) {
//     return new Promise(function (resolve, reject) {
//         var script = document.createElement("script");
//         script.src = src;
//         script.onload = () => resolve(user);
//         script.onerror = () => reject({message: "не нашли файл", code: 404});
//         document.head.append(script);
//     });
// }

// var loadScript2 = async function(src) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = () => Promise.resolve(user);
//     script.onerror = () => Promise.reject({message: "не нашли файл", code: 404});
//     document.head.append(script);
// }


// Promise.all([loadScript2("./js/dz_11-2.js"), loadScript2("./js/dz_12-2.js")])
//     .then(payload => {console.log(user)})
//     .catch(err => {console.error(err)})

// Promise.allSettled([loadScript("./js/dz_11-2.js"), loadScript("./js/dz_12-21.js")])
//     .then(payload => {console.log(payload)})


// async function load() {
//     return 1;
// }

// load()
//     .then(payload => {console.log(payload)})

// function load2() {
//     return 1;
// }
    
// console.log(load2());


// function isNum(num) {
//     if (Number(num) === Number(num))
//         return true;
//     else
//         throw {
//             message: "Передали не число"
//         };
// }

// async function waitSec() {
//     var promise = new Promise(function (resolve, reject) {
//         setTimeout(() => reject(1), 5000);
//         setTimeout(() => resolve(2), 10000);
//     });
//     var value;
//     try {
//         console.log("try начал работу!");
//         isNum('lkk');
//         console.log("try закончил работу!");
//         value = await promise;
//     } catch (error){
//         console.log("Ошибка");
//         console.log(error);
//     }
// }

// waitSec();



