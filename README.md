# GrVl.github.io
Сайт по продаже окон

## Сборка минимальной версии для публикации

Сборщик оставляет только используемые стили (PurgeCSS), минифицирует CSS и ваш JS, копирует нужные файлы в папку `dist/`.

**Требования:** Node.js 18+

```bash
npm install
npm run build
```

Результат в папке **dist/**:
- `css/bundle.min.css` — стили из styles.css + custom.css (только используемые правила)
- `js/*.min.js` — минифицированные scripts, okna-prices, form; Bootstrap копируется как есть
- HTML с обновлёнными путями к CSS/JS
- копии папок assets, fonts, FontAwesome

Публикуйте содержимое `dist/` на хостинг.

Только пересобрать CSS (без копирования и JS): `npm run build:css`