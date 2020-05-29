//Вся работа с данными

export default class Model{
    todos = [];
    maxId = 0;

    generateTodoItem(text){
        return {
            text,
            isDone : false,
            id : ++this.maxId
        }
    }

    loadDefaultData(loadDoneCallback){
        //AJAX - Ассинхронный JS и XML
    
        //Создаем AJAX Объект
        const aja = new XMLHttpRequest();
        //Вешаем слушателя для окончания загрузки данных
        aja.onload = () => {
            const data = JSON.parse(aja.responseText);
            this.todos.push(...data);
            this.findMaxId();
            loadDoneCallback();
        };

        //Указываем как и куда мы делаем запрос
        aja.open('GET', './data/data.json');
        //Отправляю запрос
        aja.send();
    
    }

    setIsDone(value){
        this.todos.forEach(todo => todo.isDone = value);
    }

    setDoneById(id){
        this.todos.every(task =>{
         if(task.id == id){
            task.isDone = !task.isDone;
            return false;
         } 

         return true;
        });
    }

    addItem(txt){
        const newItem = this.generateTodoItem(txt);
        this.todos.unshift(newItem);
    }

    findMaxId(){
        this.todos.forEach(task => task.id > this.maxId ? this.maxId = task.id: null);
    }
}