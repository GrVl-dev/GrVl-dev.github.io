/**
 * Цены для картинок в блоке «наши цены» на главной.
 */
const OKNA_PRICES = {
  'okno_1.0': 3600,
  'okno_1.1': 5000,
  'okno_2.1': 11000,
  'okno_3.1': 13000,
  'okno_4.2': 23000,
  'okno_6.2': 39000,
  'okno_7.2': 33000,
  'okno_H3.1': 17000,
  'okno_P2.1': 15000
};

(function () {
  function applyPrices() {
    document.querySelectorAll('.row-okna-prices .okna-item[data-okna-id]').forEach(function (item) {
      var id = item.getAttribute('data-okna-id');
      var price = OKNA_PRICES[id];
      var caption = item.querySelector('.card-okna-caption');
      if (caption && price != null) {
        caption.textContent = 'от ' + price + ' \u20BD';
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyPrices);
  } else {
    applyPrices();
  }
})();
