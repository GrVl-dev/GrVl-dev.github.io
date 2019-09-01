// var date = document.querySelector('.date_js'),
//     inputYear = document.getElementsByClassName('date__input_js')[0],
//     inputMonth = document.getElementsByClassName('date__input_js')[1],
//     inputDate = document.getElementsByClassName('date__input_js')[2],
//     button = document.querySelector('.date__button_js'),
//     result = document.querySelector('.date__result_js'),
//     resultDay = document.querySelector('.date__resultDay_js')
//     days = ['вск', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// setInterval(function() {
//     date.innerHTML = new Date();
// }, 1000/60);

// button.addEventListener('click', function(event) {
//     var dt = new Date(inputYear.value, 
//         inputMonth.value, inputDate.value);
//     result.innerText = new Date(inputYear.value, 
//         inputMonth.value, inputDate.value);
//     resultDay.innerText = days[dt.getDay()];
// });

// var slider = document.querySelector('.slider_js'),
//     window1 = document.querySelector('.slider__window_js'),
//     content = document.querySelector('.slider__content_js'),
//     number = 0;

// window1.addEventListener('click', function(event) {
//     if (number != 3) {
//         content.style.transform = `translateX(-${++number * 200}px)`;
//     } else {
//         number = 0;
//         content.style.transform = `translateX(${number * 200}px)`;
//     }
// });
// window1.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//     if (number != 0) {
//         content.style.transform = `translateX(-${--number * 200}px)`;
//     } else {
//         number = 3;
//         content.style.transform = `translateX(-${number * 200}px)`;
//     }
// });