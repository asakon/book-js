// html要素のlang属性を取得
var lang = document.querySelector('html').lang;

// その言語のページではプルダウンメニューの項目を変えておく
var opt;

switch(lang) {
  case 'ja' :
    opt = document.querySelector('option[value="index.html"]');
    break;
  case 'en' :
    opt = document.querySelector('option[value="index-en.html"]');
    break;
  case 'zh' :
    opt = document.querySelector('option[value="index-zh.html"]');
    break;
}
opt.selected = true;

document.getElementById('form').select.onchange = function () {
  location.href = document.getElementById('form').select.value;
}