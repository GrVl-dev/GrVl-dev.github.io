var here = document.querySelectorAll('.header__links-item_js');
here[9].style.color = '#3590CC';

var form = document.querySelector('.dz-10__input-data-form_js')
    selectShop = document.querySelector('.dz-10__shop-selection_js'),
    selectAction = document.querySelector('.dz-10__action-selection_js'),
    itemSelectShop = selectShop.options,
    itemAction = selectAction.options,
    formProduct = document.querySelector('.dz-10__input-product_js'),
    formPrice = document.querySelector('.dz-10__input-price_js'),
    inputPrice = document.querySelector('.dz-10__input-price_js').children,
    formNumProduct = document.querySelector('.dz-10__input-num_js'),
    formRangePrice = document.querySelector('.dz-10__search-price_js'),
    formSubmit = document.querySelector('.dz-10__input-submit_js'),
    message = document.querySelector('.dz-10__output-data_js'),
    foodList = document.querySelector('.dz-10__shop-food-list_js'),
    gamesList = document.querySelector('.dz-10__shop-games-list_js'),
    shop = 0;

var shopFood = {
    name: 'Продуктовый магазин',
    store: [],
    addProduct: addProduct,
    productVisible: productVisible,
    searchByName: searchByName
    // searchByNumber: searchByNumber,
}

var shopGames = {
    name: 'Магазин видеоигр',
    store: [],
    addProduct: addProduct,
    productVisible: productVisible,
    searchByName: searchByName
}

selectShop.onchange = function() {
    var item = itemSelectShop.selectedIndex; 
    selectAction.style.display = "inline-block";
    itemAction[0].selected = true; 
    formProduct.style.display = "none";
    formPrice.style.display = "none";
    formSubmit.style.display = "none";
    formNumProduct.style.display = "none";
    formRangePrice.style.display = "none";
    if (item == 1) {
        shop = 1;
    } else {
        shop = 2;
    }
}

selectAction.onchange = function() {
    var item = itemAction.selectedIndex; 

    if(item == 1) {
        formProduct.style.display = "inline-block";
        formPrice.style.display = "inline-block";
        formSubmit.style.display = "inline-block";
        formRangePrice.style.display = "none";
        formNumProduct.style.display = "none";
        formSubmit.onclick = function() {
            if (checkInput(formProduct, inputPrice[3])) {
                var name = formProduct.value,
                    price,
                    point;
                if(inputPrice[3].value.length < 2) {
                    point = ".0"
                } else {
                    point = "."
                }
                price = Number(inputPrice[1].value + point + inputPrice[3].value);
                price = Math.abs(price).toFixed(2);
                if (shop == 1) {
                    shopFood.addProduct(name, price);
                    foodList.insertAdjacentElement('beforeend', shopFood.productVisible());
 
                } else {
                    shopGames.addProduct(name, price);
                    gamesList.insertAdjacentElement('beforeend', shopGames.productVisible());
                }
            } else {
                message.innerHTML ="вы ввели не все данные";
                setTimeout (function() {
                    message.innerHTML ="";
                }, 3000)
            }
            formReset();
        }

    } else if (item == 2) {
        formProduct.style.display = "inline-block";
        formPrice.style.display = "none";
        formSubmit.style.display = "inline-block";
        formNumProduct.style.display = "none";
        formRangePrice.style.display = "none";
        formSubmit.onclick = function() {
            if (checkInput(formProduct)) {
                if (shop == 1) {
                    var product = shopFood.searchByName(formProduct.value);
                    message.innerHTML = product;
                    setTimeout (function() {
                        message.innerHTML ="";
                    }, 6000)
                } else {
                    var product = shopGames.searchByName(formProduct.value);
                    message.innerHTML = product;
                    setTimeout (function() {
                        message.innerHTML ="";
                    }, 6000)
                }

            } else {
                message.innerHTML ="вы ввели не все данные";
                setTimeout (function() {
                    message.innerHTML ="";
                }, 3000)
            }
            formReset();
        }
    } else if (item == 3) {
        formProduct.style.display = "none";
        formPrice.style.display = "none";
        formNumProduct.style.display = "inline-block";
        formSubmit.style.display = "inline-block";
        formRangePrice.style.display = "none";
        formSubmit.onclick = function() {
            formReset();
        }
    } else if (item == 4) {
        formProduct.style.display = "inline-block";
        formPrice.style.display = "none";
        formSubmit.style.display = "inline-block";
        formNumProduct.style.display = "none";
        formRangePrice.style.display = "none";
        formSubmit.onclick = function() {
            formReset();
        }
    } else if (item == 5) {
        formProduct.style.display = "none";
        formPrice.style.display = "none";
        formSubmit.style.display = "inline-block";
        formNumProduct.style.display = "none";
        formRangePrice.style.display = "inline-block";
        formSubmit.onclick = function() {
            formReset();
        }
    } else if (item == 6) {
        formProduct.style.display = "none";
        formPrice.style.display = "none";
        formNumProduct.style.display = "inline-block";
        formSubmit.style.display = "inline-block";
        formRangePrice.style.display = "none";
        formSubmit.onclick = function() {
            formReset();
        }
    }
}

function formReset() {
    form.reset();
    selectAction.style.display = "none";
    formProduct.style.display = "none";
    formPrice.style.display = "none";
    formSubmit.style.display = "none";
    formRangePrice.style.display = "none";
    formNumProduct.style.display = "none";
}


function checkInput() {
    for (var num = 0; num < arguments.length; num++) {
        if (!arguments[num].value) {
            return false;
        } else {
            return true;
        }
    }
}

function addProduct(name, price) {
    this.store[this.store.length] = {
        name: name,
        price: price
    }
}

function productVisible() {
    for (i = 0; i < this.store.length; i++) {
        var itemProduct = document.createElement('div');
        itemProduct.className = ('.dz-10__item-product');
        itemProduct.style = "border-bottom: 2px solid rgb(0, 110, 138);" + 
                            "padding: 3px 0";
        itemProduct.innerText = 
        (i + 1)+ ". " + this.store[i].name + " - "  + this.store[i].price + " руб";
    }
    return itemProduct;
}

function searchByName(name) {
    var len = this.store.length,
        check, 
        result = "";

    if(!len) {
        result = "Магазин пуст"
        return result;
    }

    for (var i = 0; i < len; i++) {
        check = this.store[i].name.indexOf(name);
        if(check != -1) {
            result += ("<div>" + (i+1) + ". " + this.store[i].name + " - " + this.store[i].price + " \u20BD </div>")
        }
    }

    if (!result) {
        result = "товар не найден"
        return result;
    } else {
        return result;
    }
}


// На уроке ---------------------
/* function exp(num, pow = 2) {
    return Math.pow(num, pow);
};

function exp2(num, pow) {
    pow = pow || 2;
    return Math.pow(num, pow);
};

function exp3(num, pow) {
    pow = pow || 2;
    var res = 1;
    for(var i = 0; i < pow; i++) {
        res *= num; 
    }
    return res;
};

console.log(exp(2,0));
console.log(exp2(2,0));
console.log(exp3(2,3));

(function() {
    var user = {
        name: 'Вася',
        sName: 'Васин'
    };
    console.log(user);
})();

(function() {
    var user = {
        name: 'Стас',
        sName: 'Стасов'
    };
    console.log(user);
})();

// console.log(user);  Выдаст ошибку

var user = {
    name: 'Вася',
    sName: 'Васин'
};

var name4 = () => user;

console.log(name4());

var exp4 = (num, pow = 2) => {
    return Math.pow(num, pow);
}

var exp5 = (num, pow = 2) => Math.pow(num, pow);

console.log(exp4(2,3));
console.log(exp5(2,5));

var user = {
    name1: 'Name',
    getNameF: function() {
        return this.name1
    },
    getUserF: function() {
        return this;
    },
    getNameS: ()=> this,
    getUserS: ()=> this.name1
}

console.log(user.getNameF());
console.log(user.getNameS());

function getName() {
    return this.name;
}
var shop1 = {
    name: '123',
    getName: getName
}

var shop2 = {
    name: '321',
    getName: getName
}

console.log(shop1.getName());
console.log(shop2.getName()); */