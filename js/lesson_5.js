/* document.getElementsByClassName('test_js')[0].innerHTML = "<h1>Привет мир!</h1>";


var test = document.getElementsByTagName('h1')[0];
test.innerHTML = "ПРощай мир!";
test.classList.add("qwe");

for(var i=0; i < document.getElementsByTagName('body')[0].childNodes.length; i++) {
    console.log(document.getElementsByTagName('body')[0].childNodes)
}
console.log(getComputedStyle(test).color);
console.log(getComputedStyle(test).width);

setTimeout(function() {
    test.style.color = 'blue'
}, 1000); */

/* var test_1 = document.getElementsByClassName('test_js')[0],
    test_2 = document.getElementsByClassName('test_js')[1],
    test_3 = document.getElementsByClassName('test_js')[2],
    test_4 = document.getElementsByClassName('test_js')[3];

setTimeout(function() {
    test_1.classList.add("scale");
    test_1.style.transform = 'scale(2)';
    test_1.style.left = 'auto';
    test_2.classList.add("rotate");
    test_2.style.transform = 'rotate(120deg)';
    test_3.classList.add("move");
    test_3.style.cssText ='transform: rotate(-120deg);\
        right: 500px;\
         '; 
}, 2000); */