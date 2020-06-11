import Model from "./Model.js";
import View from "./View.js";


export default class Controller{
    constructor(){
        this.model = new Model();
        this.view = new View(this.onWeatherSearch.bind(this));
        this.load();
    }    

    onWeatherSearch() {
        const loc = this.view.getLocation();
        this.model.getWeather(loc).then(data => this.view.renderWeather(data));
    }

    load(){
        const loc = this.model.prevLocation();
        this.model.getWeather(loc).then(data => this.view.renderWeather(data));
    }
}