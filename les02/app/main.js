// let year = 0;
// const curYear = 2020;


// while(year < 1900 || curYear - year < 18){
//     year = +prompt('Enter a year of birth, please', 1912);//2010
// }

sayHi();


function sayHi(){
    console.log('HI');
}
sayHi();
function sayHi(){
    console.log('Bye');
}

console.log(sayHi);


// greeting('Nick');

const greeting = function(name){
    console.log(`Hello, ${name}`);
}
//Math.random() -> (0, 1) //0.13434235345345, 0.94536254734574526

function random(a, b){
    return Math.floor(Math.random() * (b - a + 1) + a);
}

const rand = function(a, b){
    return Math.floor(Math.random() * (b - a + 1) + a);
}

const r = (a, b) => Math.floor(Math.random() * (b - a + 1) + a); console.log('ОДин');

// console.log(r(1, 10));



if(false) console.log('true');     
false ? console.log('false'): null;
