import { name } from './second.js';

console.log('It is worked', name);

console.log(f);
var f = 15;
console.log(f);

let a = 10;
console.log('a', a);

const b = 11;
console.log('b', b);

// b += 1;

a = f; //КОпирование по значению
f += 3;

console.clear();
console.log(f);
console.log(a);

2;
'Hello'; "Hello your's";
console.log(`Hello, ${f}`);
true; false;
undefined;
null;

let c = { val: 12};
let d = { val: 13};

d = c; //КОпирование по ссылке

c.val = 66;

console.log(c);
console.log(d);

//Symbol
//BigInt

//Операторы
/*
+ - суммирование, конкатенация

2 + 3 == 5 суммирование
2 + '3' == '23' конкатенация
'2' + 3 == '23' конкатенация



-
/
*
13 % 5 == 3 - остаток от деления
2 ** 3 == 8 - возведение в степень

*/

let aa = '3';
console.log(typeof []);//неявное приведение типов(к числу)

let bb;

//Conditions
if(a == 3){
    //то делаем это
    console.log(a);
}else{
    //Иначе делаем это
    console.log(b);
}

//Тернарный оператор
a == 3? console.log(a): console.log(b);
//Условие ? действие, если да : действие, если нет

a < 3? console.log('a > 3'): 323;

let j = 0;
//Цикл с предусловием
while(j < 10){//условие цикла
    //тело цикла
    console.log('while: ', j);
    j++;
    //прохождение цикла 1 раз - итерация
}

console.log('j = ', j);

//цикл со счетчиком
//(инициализация переменных, действие до начала цикла; условие выполнения цикла; действие после итерации цикла)
let i = 0;
for(; i < 10;){
    console.log('for loop: ', i);
    i++;
}

console.log('i = ', i);

//Цикл с послеусловием
do{
    console.log('do-while');
}while(1 > 11);

// alert('fdfsdf');
// let aaa = prompt('enter a number');//type: string
// let bbb = confirm('Do you wna to continue?');//true/false

let con = false;
do{
    con = confirm('Continue?');
    if(con == false){
        con = !confirm('Are you shure? Really?');
    }
}while(con);