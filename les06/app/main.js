console.log(el1);//доступ через id

//Специфические методы
//id -- 1 Элемент
const elOne = document.getElementById('el1');

//class -- html collection, node-list (array)
const reds = [...document.getElementsByClassName('red')];
console.log(reds);

//tag -- html collection
const lis = document.getElementsByTagName('li');
console.log(lis);

//name -- html collection
const alls = document.getElementsByName('all');
console.log(alls);

//? new methods
// Возвращает 1 Элемент
const elOne2 = document.querySelector('[name="all"]:first-child');
console.log(elOne2);

//Возвращает NodeList элементов
const liElements = document.querySelectorAll('li');
console.log(liElements);

//! ИЗменение содержимого
const scr = '<script>alert("Ahahha");</script>';
// Через innerText
elOne.innerText = scr;

// Через innerHTML
// elOne.innerHTML = scr;

//! Стили
elOne.style.fontWeight = 'bold';

//! Классы
console.log(elOne.className);
// elOne.className = 'red';
// console.log(elOne.className);

console.log(elOne.classList);

//! ДОбавление-удаление
//append
//appendChild

liElements.forEach((li, i) => {
    li.addEventListener('click', clearElement);
    li.innerHTML = `<strong>${li.innerText}</strong>`;
});

function clearElement(ev){
    ev.target.innerHTML = '';
}
