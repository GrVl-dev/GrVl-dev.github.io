var here = document.querySelectorAll('.header__links-item_js');
here[14].style.color = '#3590CC';


class Shop {
  constructor(name) {
    this.name = name;
    this.store = [];
  };
  addProduct(name, price) {
    this.store[this.store.length] = {
        name: name,
        price: price
    }
  }
}

class VideoGames extends Shop {

}

class Foods extends Shop {

}

let videoGames = new VideoGames('video games');
let foods = new Foods('foods');

foods.addProduct('молоко', 50);
foods.addProduct('кефир', 60);
videoGames.addProduct('starcraft II', 2200);
videoGames.addProduct('COD', 2800);
console.log(videoGames);
console.log(foods);
