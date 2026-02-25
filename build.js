/**
 * Сборщик минимальной версии для публикации.
 * - PurgeCSS: оставляет только используемые стили из styles.css и custom.css
 * - Минификация CSS и своего JS
 * - Копирование HTML, assets, fonts, FontAwesome, Bootstrap
 *
 * Запуск: npm run build
 */

const fs = require('fs');
const path = require('path');
const { PurgeCSS } = require('purgecss');
const CleanCSS = require('clean-css');
const { minify } = require('terser');
const { globSync } = require('glob');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const cssOnly = process.argv.includes('--css-only');

// Все HTML-файлы для анализа используемых классов (glob на Windows требует прямые слэши)
const pagesGlob = path.join(ROOT, 'pages', '*.html').split(path.sep).join('/');
const contentFiles = [
  path.join(ROOT, 'index.html'),
  ...globSync(pagesGlob),
];

// Каталоги для копирования (рекурсивно)
const copyDirs = ['assets', 'fonts', 'FontAwesome'];

// Bootstrap добавляет классы через JS — их не удалять
const purgeSafelist = {
  standard: [
    /^navbar/, /^nav-/, /^collapse/, /^dropdown/, /^modal/, /^btn/, /^badge/,
    /^show$/, /^fade$/, /^active$/, /^disabled$/, /^collapsed$/,
    /^navbar-shrink$/, /^d-/, /^flex-/, /^align-/, /^justify-/, /^gap-/, /^g-/, /^row-cols/,
    /^col$/, /^col-/, /^row$/, /^container/, /^mx-/, /^my-/, /^mt-/, /^mb-/, /^ms-/, /^me-/, /^p-/, /^px-/, /^py-/,
    /^text-/, /^bg-/, /^border/, /^rounded/, /^rounded-/, /^shadow/, /^opacity/,
    /^fs-/, /^fw-/, /^lh-/, /^overflow/, /^position-/, /^fixed-/, /^sticky-/, /^top-/, /^bottom-/, /^start-/, /^end-/,
    /^w-/, /^h-/, /^mw-/, /^mh-/, /^min-vw/, /^min-vh/, /^vw-/, /^vh-/,
    /^visible$/, /^invisible$/, /^pe-/, /^ps-/, /^py-lg-/, /^text-lg-/, /^d-lg-/, /^d-none/,
    /^needs-validation$/, /^was-validated$/, /^form-/, /^input-/, /^invalid-/, /^valid-/,
    /^carousel/, /^slide$/, /^list-group/, /^card-group/, /^offcanvas/,
    /^tooltip/, /^popover/, /^toast/, /^alert/, /^progress/, /^spinner/,
    /^ratio$/, /^ratio-/, /^figure/, /^img-/, /^object-fit/,
  ],
  deep: [/^bs-tooltip/, /^bs-popover/, /^modal-backdrop/, /^offcanvas-backdrop/],
  greedy: [
    /^navbar/, /^collapse/, /^dropdown/, /^modal/, /^btn/, /^nav-link/, /^card/, /^row/, /^col/,
    /^container/, /^form-control/, /^form-label/, /^form-select/, /^form-check/,
  ],
};

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function purgeAndMinifyCSS() {
  console.log('PurgeCSS: анализ используемых стилей...');
  const purged = await new PurgeCSS().purge({
    content: contentFiles.map((file) => ({ raw: fs.readFileSync(file, 'utf8'), extension: 'html' })),
    css: [
      { raw: fs.readFileSync(path.join(ROOT, 'css', 'styles.css'), 'utf8') },
      { raw: fs.readFileSync(path.join(ROOT, 'css', 'custom.css'), 'utf8') },
    ],
    safelist: purgeSafelist,
    fontFace: true,
    keyframes: true,
  });

  const combined = purged.map((p) => p.css).join('\n');
  const minifier = new CleanCSS({ level: 2 });
  const minified = minifier.minify(combined);

  if (minified.errors.length) {
    console.warn('CleanCSS предупреждения:', minified.errors);
  }

  await ensureDir(path.join(DIST, 'css'));
  const outCss = path.join(DIST, 'css', 'bundle.min.css');
  fs.writeFileSync(outCss, minified.styles, 'utf8');
  console.log('CSS записан:', outCss);
  return outCss;
}

async function minifyJS() {
  const jsFiles = [
    { src: 'scripts.js', out: 'scripts.min.js' },
    { src: 'okna-prices.js', out: 'okna-prices.min.js' },
    { src: 'form.js', out: 'form.min.js' },
  ];
  await ensureDir(path.join(DIST, 'js'));

  for (const { src, out } of jsFiles) {
    const filePath = path.join(ROOT, 'js', src);
    if (!fs.existsSync(filePath)) continue;
    const code = fs.readFileSync(filePath, 'utf8');
    const result = await minify(code, { compress: true, mangle: false, format: { comments: false } });
    if (result.code) {
      fs.writeFileSync(path.join(DIST, 'js', out), result.code, 'utf8');
      console.log('JS минифицирован:', out);
    }
  }

  const bootstrapSrc = path.join(ROOT, 'js', 'bootstrap.bundle.min.js');
  if (fs.existsSync(bootstrapSrc)) {
    fs.copyFileSync(bootstrapSrc, path.join(DIST, 'js', 'bootstrap.bundle.min.js'));
    console.log('Bootstrap скопирован');
  }
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    ensureDir(dest);
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyAssets() {
  for (const dir of copyDirs) {
    const src = path.join(ROOT, dir);
    const dest = path.join(DIST, dir);
    if (fs.existsSync(src)) {
      copyRecursive(src, dest);
      console.log('Скопировано:', dir);
    }
  }
  const favicon = path.join(ROOT, 'assets', 'favicon.ico');
  if (fs.existsSync(favicon)) {
    ensureDir(path.join(DIST, 'assets'));
    fs.copyFileSync(favicon, path.join(DIST, 'assets', 'favicon.ico'));
  }
}

function rewriteHtml(htmlPath, isIndex) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  const prefix = isIndex ? '' : '../';

  // Один бандл CSS вместо styles.css и custom.css
  html = html.replace(/<link\s+href="[^"]*\/?css\/styles\.css"[^>]*>\s*/i, `<link href="${prefix}css/bundle.min.css" rel="stylesheet" />\n        `);
  html = html.replace(/<link\s+href="[^"]*\/?css\/custom\.css"[^>]*>\s*/i, '');

  // Скрипты на .min.js
  html = html.replace(/(src="[^"]*\/?)scripts\.js"/g, `$1scripts.min.js"`);
  html = html.replace(/(src="[^"]*\/?)okna-prices\.js"/g, `$1okna-prices.min.js"`);
  html = html.replace(/(src="[^"]*\/?)form\.js"/g, `$1form.min.js"`);

  return html;
}

function buildHtml() {
  ensureDir(DIST);
  ensureDir(path.join(DIST, 'pages'));

  const indexSrc = path.join(ROOT, 'index.html');
  fs.writeFileSync(path.join(DIST, 'index.html'), rewriteHtml(indexSrc, true), 'utf8');
  console.log('index.html → dist/index.html');

  for (const file of globSync(pagesGlob)) {
    const name = path.basename(file);
    fs.writeFileSync(path.join(DIST, 'pages', name), rewriteHtml(file, false), 'utf8');
    console.log('pages/' + name + ' → dist/pages/' + name);
  }
}

async function main() {
  console.log('Сборка минимальной версии...\n');
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true });
  }
  ensureDir(DIST);

  await purgeAndMinifyCSS();
  if (!cssOnly) {
    await minifyJS();
    copyAssets();
    buildHtml();
  }
  console.log('\nГотово. Публикуйте содержимое папки dist/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
