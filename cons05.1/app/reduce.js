const arr = [123, 44, 55, 98, 90];

//получить новый массив, из чисел в половину меньше старого массива

//for
const arrFor = [];
const arrLen = arr.length;
for(let i = 0; i < arrLen; i++){
    arrFor.push(arr[i] / 2);
}

console.log('Solve with For', arrFor);

//for of
const arrForOf = [];
for(let num of arr){
    arrForOf.push(num / 2);
}

console.log(arrForOf);

//? map -- рекомендуемое
const arrMap = arr.map(num => num / 2);

console.log('Map', arrMap);

//! reduce -- не рекомендуемое
const arrRed = arr.reduce((red, num) => {
    red.push(num / 2);
    return red;
}, []);

console.log('Reduce', arrRed);

const sum = arr.reduce((red, num) => {
    // if(num >= 90){
    //     return red + num;
    // }
    // return red;

    return num >= 90 ? red + num : red;
}, 0);

console.log('sum of >90 numbers', sum);