//Посредник между Моделью и Вью
import Model from './Model.js';
import View from './View.js';

export default class Controller{
    constructor(){
        this.model = new Model();
        this.view = new View();

        this.view.render(this.model.todos);
        this.model.loadDefaultData(this.onLoadData);
        this.view.addListeners(
            this.onTodoClick,
            this.onItemAdd,
            this.onCheckAllChange
        )
    }

    renderList(){
        const data = this.model.todos;
        this.view.render(data);
    }

    onTodoClick = (ev) => {
        const id = ev.target.dataset.id;
        this.model.setDoneById(id);
        this.renderList();
    }

    onItemAdd = () => {
        const txt = this.view.getInpText();
        this.model.addItem(txt);
        this.renderList();
    }

    onLoadData = () => {
        this.renderList();
    }

    onCheckAllChange = () => {
        this.model.setIsDone(this.view.getCheckValue());
        this.renderList();
    }
}