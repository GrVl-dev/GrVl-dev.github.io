var here = document.querySelectorAll('.header__links-item_js');
here[13].style.color = '#3590CC';

// первое задание --------------------------

var form = document.forms.password,
    submit_1 = document.querySelector('.dz-14__password-btn_js'),
    result = document.querySelector('.dz-14__password-result_js'),
    password = form.elements.field,
    check = /^[a-z0-9_]{4,12}$/;
  
submit_1.onclick = function() {
    var str = password.value;
    if(!check.test(str)) {
        result.classList.add('dz-14__password-result');
        password.classList.add('dz-14__animErr');
        result.innerHTML = 'ошибочка вышла';
        setTimeout(() => (
            result.classList.remove('dz-14__password-result'),
            result.innerHTML = '',
            password.classList.remove('dz-14__animErr')
        ), 2000);

    } else {
        result.classList.add('dz-14__password-result');
        result.innerHTML = 'пароль принят';
        setTimeout(() => (
            result.classList.remove('dz-14__password-result'),
            result.innerHTML = ''
        ), 1000);
    }
    password.value ="";
    return false;
}

// второе задание --------------------------------
var addForm = document.forms.addArticle,
    delForm = document.forms.delArticle,
    putForm = document.forms.putArticle,
    submitAdd = document.querySelector('.dz-14__submit-add_js'),
    submitDel = document.querySelector('.dz-14__submit-del_js'),
    submitPut = document.querySelector('.dz-14__submit-put_js'),
    titleAdd = addForm.elements.title,
    titlePut = putForm.elements.title,
    articleAdd = addForm.elements.article,
    articlePut = putForm.elements.article,
    numDel = delForm.elements.number,
    numPut = putForm.elements.number,
    articles = document.querySelector('.dz-14__articles_js'),
    numCheck = /^[0-9]$/;

get("http://localhost/blog");

submitAdd.onclick = function() {
    var titleVal = titleAdd.value,
        articleVal = articleAdd.value;
    if (titleVal || articleVal) {
        post(titleVal, articleVal);
    }

    titleAdd.value = "";
    articleAdd.value = "";
    return false;
}

numPut.onchange = function() {
    var article = document.querySelector(`.id_${numPut.value}_js`);
    if(article) {
        var title = article.firstChild,
            text = article.lastChild,
            newTitle = title.innerText,
            index = newTitle.indexOf(' ');
        titlePut.value = newTitle.slice(index + 1, newTitle.length + 1);
        articlePut.value = text.innerText;
    } else {
        setTimeout(() => {
            numPut.value = '';
            articlePut.value = '';
            titlePut.value = '';
        }, 1000);
        numPut.placeholder = 'неверный id';
        setTimeout(() => {numPut.placeholder = '';}, 2500);
    }
}
submitPut.onclick = function() {
    var id = numPut.value,
        text = articlePut.value,
        title = titlePut.value;
    if(!numCheck.test(id) || !title || !text) return;
    put(title, text, id);
    numPut.value = '';
    articlePut.value = '';
    titlePut.value = '';
    return false;
}

submitDel.onclick = function() {
    var numVal = numDel.value;
    del(numVal);
    numDel.value = "";
    return false;
}

function post(title, text) {
    var oldArticles = document.querySelectorAll('.dz-14__addBlock_js'),
        num = oldArticles.length;
    if (!title || !text) return;
    fetch("http://localhost/blog", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title, 
            text: text
        })
    })
        .then(res => res.text())
        .then(res => {
            console.log(res);
            var id;
            fetch("http://localhost/blog")
                .then(res => res.json())
                .then(res => {
                    id = res[res.length - 1]._id;
                    var newArticle = addArticle(title, text, id);
                    articles.insertAdjacentElement('beforeend', newArticle);
                })
        })
        .catch(err => {
            console.log(err);
        });
};

function get(target) {
    fetch(target)
        .then(res => res.json())
        .then(res => {
            for(var i = 0; i < res.length; i++) {
                var article = addArticle(res[i].title, res[i].text, res[i]._id);
                article.classList.add(`id_${res[i]._id}_js`);
                articles.insertAdjacentElement('beforeend', article);
            }
        })
        .catch(err => {
            console.log(`${err.name} - ${err.message}`);
            var error = document.createElement('div');
            error.innerHTML = 'СЕРВЕР НЕ ДОСТУПЕН';
            error.className = 'dz-14__err';
            articles.insertAdjacentElement('beforeend', error);
        });

};

function del(id) {
    if(!numCheck.test(id)) return;
    var articleDel = document.querySelector(`.id_${id}_js`);
    fetch("http://localhost/blog", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id: id
        })
    })
        .then(res => res.text())
        .then(res => {
            console.log(res);
            articleDel.remove();
        })
        .catch(err => {
            console.log(err);
        });
}

function put(title, text, id){
    fetch("http://localhost/blog", {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: title, 
        text: text,
        _id: id
    })
})
    .then(res => res.text())
    .then(res => {
        console.log(res);
        if(title || text || id) {
            var target = document.querySelector(`.id_${id}_js`);
            target.innerHTML = `<h3>ID_${id}. ${title}</h3><div>${text}</div>`;
            return target;
        }
    })
    .catch(err => console.log(err));
}

function addArticle(title, text, id) {
    var addBlock = document.createElement('div'),
    addTitle = document.createElement('h3'),
    addArticle = document.createElement('div');
    addBlock.className = "dz-14__addBlock dz-14__addBlock_js";
    addTitle.innerHTML = 'id_' + id + '. ' + title;
    addArticle.innerHTML = text;
    addBlock.insertAdjacentElement('beforeend', addTitle);
    addBlock.insertAdjacentElement('beforeend', addArticle);
    return addBlock;
};

// function putArticle(title, text, id) {
//     if(title || text || id) {
//         var target = document.querySelector(`.id_${id}_js`);
//         target.innerHTML = `<h3>${title}<\h3><div>${text}</div>`;
//         return target;
//     }
// }

// на уроке-----------------------------
// var request = fetch("http://localhost/blog", {
//     method: "PUT",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: "title", 
//         text: "text",
//         _id: 65
//     })
// })
//     .then(res => res.text())
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
