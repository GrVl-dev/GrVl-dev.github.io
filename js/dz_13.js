var here = document.querySelectorAll('.header__links-item_js');
here[12].style.color = '#3590CC';

// 1 задание -----------------

var card = document.querySelector('.card_js'),
    cardBlock = document.querySelector('.dz-13__card-block_js'),
    child = document.querySelectorAll('.card__child_js'),
    wife = document.querySelectorAll('.card__user-wife_js'),
    preloader = document.createElement('div');
preloader.className = 'dz-13__preloader';
preloader.innerText = 'Loading...';
for (i = 0; i < child.length; i++) {
    child[i].remove();
}
card.remove();
card.classList.remove('vsblFalse_js');


function createUsers(arr) {
    let users = JSON.parse(arr),
        newCard = [];
    for (i = 0; i < users.length; i++) {
        newCard[i] = card.cloneNode(true);
        cardBlock.insertAdjacentElement('beforeend', newCard[i]);
    }
    for (var i = 0; i < users.length; i++) {
        let userImg = document.querySelectorAll('.card__photo_js'),
            userName = document.querySelectorAll('.card__user-name_js'),
            address = document.querySelectorAll('.card__address_js'),
            userAge = document.querySelectorAll('.card__user-age_js'),
            userPhone = document.querySelectorAll('.card__user-phone_js'),
            userChildren = document.querySelectorAll('.card__user-children_js');

        userImg[i].src = users[i].img;
        userName[i].innerHTML = users[i].name.toUpperCase();
        address[i].innerHTML += users[i].adress;
        userAge[i].innerHTML += users[i].age + ' years';
        userPhone[i].innerHTML += users[i].phone;
        if (users[i].children.length == 0) {
            userChildren[i].classList.add('vsblFalse_js');
        } else {
            var newChild = [];
            for (var j = 0; j < users[i].children.length; j++) {
                newChild[j] = child[0].cloneNode(true);
                userChildren[i].insertAdjacentElement('beforeend', newChild[j]);
                let name = userChildren[i].querySelectorAll('.card__child-name_js'),
                    age = userChildren[i].querySelectorAll('.card__child-age_js');

                name[j].innerHTML += users[i].children[j].name;
                age[j].innerHTML += users[i].children[j].age + ' years';             
            }
        }
        if (!users[i].wife) {
            wife[i].classList.add('vsblFalse_js');
        } else {
            var wifePhoto = [],
                wifeImg = document.querySelectorAll('.card__wife-photo_js'),
                wifeName = document.querySelectorAll('.card__wife-name_js'),
                wifePhone = document.querySelectorAll('.card__wife-phone_js'),
                wifeAge = document.querySelectorAll('.card__wife-age_js');
            wifePhoto[i] = document.createElement('img');
            wifePhoto[i].className = 'card__wife-img_js';
            wifePhoto[i].src = users[i].wife.img;
            wifeImg[i].insertAdjacentElement('beforeend', wifePhoto[i]);
            wifeName[i].innerHTML += users[i].wife.name;
            wifePhone[i].innerHTML += users[i].wife.phone;
            wifeAge[i].innerHTML += users[i].wife.age + ' years';
        }
        if (users[i].age > 30) {
            var icon = newCard[i].querySelectorAll('.card__icon_js');
            for (l = 0; l < icon.length; l++) {
                icon[l].classList.add('red_js');
            }
        } 
    }
}

window.onload = function () {
    cardBlock.insertAdjacentElement('beforeend', preloader);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost/users", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if(xhr.readyState !== 4) {
            return;
        }
        if(xhr.status !== 200){
            preloader.innerText = "Cервер не отвечает";
        } else {
            preloader.remove();
            createUsers(xhr.responseText);
        }
    }
    return false;
}



// на уроке---------------------------------------------
// var form = document.forms.form,
//     input = form.elements.name,
//     result = document.querySelector('.result');


// function createUsers(arr, elem) {
//     let users = JSON.parse(arr);
//     console.log(users);
//     let HTMLUsers = users.map(user => {
//         return `<div>name = ${user.name}; </div>`;
//     });
//     elem.innerHTML += HTMLUsers.join("");
// }

// window.onload = function () {
//     result.innerHTML = "Loading..."
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://localhost/users", true);
//     xhr.send();
//     xhr.onreadystatechange = function () {
//         if(xhr.readyState !== 4) {
//             console.log(xhr.readyState);
//             return;
//         }
//         if(xhr.status !== 200){
//             console.log("error");
//         } else {
//             result.innerHTML = "";
//             createUsers(xhr.responseText, result);
//         }
//     }
//     return false;
// }