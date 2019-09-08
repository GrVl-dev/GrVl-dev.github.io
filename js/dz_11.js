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

var loadScript = function (src) {
    return new Promise(function(resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(user);
        script.onerror = () => reject({message: "не нашли файл", code: 404});
        document.head.append(script);
    });
}


loadScript("./js/dz_11-2.js")
    .then(secondPayload => console.log(secondPayload))
    .catch(err => console.log(err))
    .finally(()=> console.log("промис отработал"))