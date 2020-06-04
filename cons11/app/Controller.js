import Model from './Model.js';
import View from './View.js';

export default class Controller{
    constructor(){
        this.model = new Model();
        this.view = new View(this.onDayClick, this.onDayAdd);

        this.tableRender();
    }

    tableRender(){
        const lessons = this.model.data;
        this.view.renderTable(lessons);
    }

    onDayClick = ev => {
        this.dayAddNum = ev.target.dataset.day || 0;
        console.log(ev.target.dataset.day);
        this.view.renderDayNum(this.dayAddNum);
    }

    onDayAdd = () => {
        const les = this.view.getInpDayText();
        this.model.addLesson(les, this.dayAddNum);
        this.tableRender();
    }

}