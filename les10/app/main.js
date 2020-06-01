const str = 'Hello, JAVAScript! I love JavaScript. Now is 01.06.2020. Lll Ooo';
const str2 = 'Привет, JavaScript. Я люблю Javascript. Сейчас 01.06.2020';
console.log(str.replace('Java', 'ECMA'));

//! Флаги
const reJs = /Java/g; //g - global
//      /выражение/флаги
console.log(str.replace(reJs, 'ECMA'));

const reJsI = /Java/ig;// case Insensitive
console.log(str.replace(reJsI, 'ECMA'));

//! последовательности

const reAO = /[ao]/gi;

console.log(str.replace(reAO, '-'));

const reNums = /[0123456789]/gi;
const reNums2 = /[0-9]/gi;
const reNums3 = /\d/gi; //d = digit

const reLet = /[abcdefghijklmnopqrstuvwxyz]/gi;
const reLet2 = /[a-z]/g;
const reLet3 = /[a-zA-Z]/g;

const reLetNum = /\w/g; // w - word, цифробуквенный символ
// \w = [a-zA-Z0-9]
console.log(str.replace(reLet3, '_'));

const reLetRu = /[а-яА-Я]/g;
console.log(str2.replace(reLetRu, '_'));

const reS = /\s/g; // пробельный символ 
console.log(str2.replace(reS, '_'));

//Всё -->  .
const reAll = /./g;
console.log(str.reAll, '_');

//! Последовательности противоположности
// \D - не цифра
// \W - не цифробуквенный символ
// \S - не пробельный символ

//! Квантификаторы
//Конкретное количество {n}
const reLDouble = /l{2}/g;
const reLDouble2 = /ll/g;
console.log(str.replace(reLDouble2, '_'));

//Диапазон {n,m}
const reLTripple = /l{2,3}/gi; // ==> (/ll/ + /lll/)
console.log(str.replace(reLTripple, '_'));

//Минимум {n,} - от n до бесконечности
const reLMin = /l{2,}/gi; // ==> (/ll/ + /lll/ + /llll/ + /lllll/ + ...)

// от 0 до 1  => {0,1}  => ?
const re01 = /a?/g;

// от 1 до бесконечности  => {1,}  => +
const re1 = /a+/g;

// от 0 до бесконечности  => {0,}  => *
const re0 = /a*/g;

//! Экранирование - \
const reDot = /\./g;
console.log(str.replace(reDot, '_'));

//! Объектный вариант создания regExp
const rO = new RegExp('[0-9]{2}.', 'g');

//test --> true/false
//match --> string / [string, string]