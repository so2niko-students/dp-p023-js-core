import Controller from './Controller.js';

const controller = new Controller();
console.log(controller);
/*
//!model
const todos = [];

//!view
function render(data){
    const list = document.querySelector('.todos-list');

    list.innerHTML = data.map(todo => {
        const className = todo.isDone ? 'class="done"' : '';
        return `<li ${className} data-id=${todo.id}>${todo.text}</li>`;
    }).join('');
}

//controller + model
function onTodoClick(ev){
    const id = +ev.target.dataset.id;

    todos.forEach(todo => todo.id === id ? todo.isDone = !todo.isDone : null);
    render(todos);
}

//m v c
function onItemAdd(){
    const inp = document.querySelector('.input-to-do');
    const txt = inp.value;
    inp.value = '';

    todos.unshift(generateTodoItem(txt));

    render(todos);
}

//!model
function generateTodoItem(text){
    return {
        text,
        isDone : false,
        id : Date.now()
    }
}

//!model + controller
function onCheckAllChange(){
    todos.forEach(todo => todo.isDone = this.checked);
    render(todos);
}

//!model
function loadDefaultData(){
    //AJAX - Ассинхронный JS и XML

    //Создаем AJAX Объект
    const aja = new XMLHttpRequest();
    //Вешаем слушателя для окончания загрузки данных
    aja.onload = () => {
        const data = JSON.parse(aja.responseText);
        console.log(data);
        todos.push(...data);
        render(todos);
    
    };

    // aja.onload = function(){
    //     const data = JSON.parse(this.responseText);
    //     console.log(data);
    //     todos.push(...data);
    //     render(todos);    
    // };

    //Указываем как и куда мы делаем запрос
    aja.open('GET', './data/data.json');
    //Отправляю запрос
    aja.send();

}

//!view
document.querySelector('.todos-list').addEventListener('click', onTodoClick);
document.querySelector('.btn-add-item').addEventListener('click', onItemAdd);
document.querySelector('#inpCheck').addEventListener('input', onCheckAllChange);

//controller
render(todos);

//!controller
//Загрузка данных из файла
loadDefaultData();

*/