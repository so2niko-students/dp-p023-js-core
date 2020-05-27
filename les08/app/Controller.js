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

    onTodoClick = () => {
        //TODO
    }

    onItemAdd = () => {
        //TODO
    }

    onLoadData = () => {
        this.view.render(this.model.todos);
    }

    onCheckAllChange = () => {
        this.model.setIsDone(this.view.getCheckValue());
        this.view.render(this.model.todos);
    }
}