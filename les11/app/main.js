//Функции-генераторы
function animal(name, weight, height, type){
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.type = type;
    this.hello = function(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
//Class style
class Animal {
    static owner = 'Nick Sotula';
    static count = 0;
    static statistic(){
        //Нельзя писать this
        console.log(new Date(), Animal.count);
    }
    #speed = 30;//Приватные свойства
    isFur = true;//Возможность записывать свойства прямо в классе, а не только в конструкторе
    constructor(name, weight = 1, height = 2, type = 'dog'){
        this.name = name || this.generateName();
        this.weight = weight;
        this.height = height;
        this.type = type; 
        Animal.count++;
    }

    hello(){
        console.log(`%c Hello, my name is ${this.name}`, 'color: red;');
        console.log(`%c This class is made by ${Animal.owner}`, 'color: blue;');
    }

    generateName(){
        return (~~(Math.random() * 100000)).toString(16);
    }

    changeSpeed(newSpeed){
        this.#speed = newSpeed;
    }

    showSpeed(){
        return this.#speed;
    }

}

class Hamster extends Animal{
    constructor(name, weight = .1, height = 5, type = 'грызуны'){
        super(name, weight, height, type);//Вызов конструктора родительского класса(от которого наследуемся)
        
    }
}

//! Прототипно-ориентированное программирование
const genAn = new animal('Рысь', 77, 155, "Кошачие");
const classAn = new Animal('Рысь', 77, 155, "Кошачие");
const clHam = new Hamster('Хомяк');
console.log(genAn);
console.log(classAn);
console.log(clHam);


function showObj(obj){
    for(const name in obj){
        console.log(name, obj[name]);
    }
}

function generateAnimals(count = 101){
    const animals = [];
    for(let i = 0; i < count; i++){
        animals.push(new Animal());
    }

    return animals;
}

