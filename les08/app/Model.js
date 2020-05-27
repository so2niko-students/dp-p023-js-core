//Вся работа с данными

export default class Model{
    todos = [];

    generateTodoItem(text){
        return {
            text,
            isDone : false,
            id : Date.now()
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
}