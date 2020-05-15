const year = ~~(Math.random() * 200 + 1850);
// const year = 1800;

if(!(year % 400) || ((year % 100) && !(year % 4))){
    console.log(year, "Высокосный");
}else{
    console.log(year, "Не Высокосный");
}

const a = 77;

//Switch - строгое равенство(с учетом типов данных)


//Гибко используя break, можно сократить код с учетом одинакового тела при переборе.
// switch(a){
//     case 11:
//     case 3:
//     case 77:{
//         console.log('Скидка 3%');
//         break;
//     }
//     case 123:
//     case 76:
//     case 9: {
//         console.log('Скидка 6%');
//         break;
//     }
//     default:{
//         console.log('Вы ввели что-то вне допустимых значений');
//     }
// }

switch(true){
    case a <= 10: {
        console.log('Discount: 4%');
        break;
    }
    case a > 10 && a <= 100: {
        console.log('Discount: 8%');
        break;
    }
    case a > 100: {
        console.log('Discount: 22%');
        break;
    }
    default:{
        console.log('No discount');
    }
}
