//Вся работа с DOM

export default class View{
    list = document.querySelector('.todos-list');
    inpCheck = document.querySelector('#inpCheck');
    
    addListeners(onTodoClick, onItemAdd, onCheckAllChange){
        document.querySelector('.todos-list').addEventListener('click', onTodoClick);
        document.querySelector('.btn-add-item').addEventListener('click', onItemAdd);
        this.inpCheck.addEventListener('input', onCheckAllChange);
    }

    render(data){    
        this.list.innerHTML = data.map(todo => {
            const className = todo.isDone ? 'class="done"' : '';
            return `<li ${className} data-id=${todo.id}>${todo.text}</li>`;
        }).join('');
    }

    getCheckValue(){
        return this.inpCheck.checked;
    }
}