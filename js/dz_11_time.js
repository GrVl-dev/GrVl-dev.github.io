var input = document.querySelector('.dz-8-time__input_js'),
    output = document.querySelector('.dz-8-time__result-out_js');
    
input.oninput = function () {
    var inputSplit = input.value.split('.');

    if(!checkDate(inputSplit)) {
        output.innerText = "Введите корректную дату";
    } else {
        var count = setInterval(function() {
            var nowDate = new Date(),
                inputDate = new Date(inputSplit[0], (inputSplit[1] - 1), inputSplit[2]),
                time = inputDate - nowDate,
                seconds = Math.floor((time/1000) % 60),
                minutes = Math.floor((time/1000/60) % 60),
                hours = Math.floor((time/(1000*60*60)) % 24),
                days = Math.floor(time/(1000*60*60*24));
            output.innerText = 
            days + ' д., ' + hours + ' ч., ' + minutes + ' мин., ' + seconds + ' сек.';
            if (+time == 0) {
                clearInterval(count);
            }
            inputSplit = input.value.split('.');
            if(!checkDate(inputSplit)) {
                output.innerText = "Введите корректную дату";
            }
        }, 1000/60);
    }
};

function checkDate(date) {
    var day = date[2],
        month = date[1];
    if (!date[1] || !date[2] || date[0] < 0 || date[1] > 12
        || date[1] < 1 || date[2] < 1 || date[2] > 31 || 
        day.length < 2 || month.length < 2) {
            return false   
    } else { 
        return true
    }
};