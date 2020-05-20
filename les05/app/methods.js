const humans = [
    {
        name : 'Nick',
        sex : 'male',
        age : 28,
        location : 'Dnipro',
        experience : 10
    },
    {
        name : 'Valerii',
        sex : 'male',
        age : 31,
        location : 'Kharkiv',
        experience : 1
    },
    {
        name : 'Anna',
        sex : 'female',
        age : 23,
        location : 'I-Frankivsk',
        experience : .5
    },
    {
        name : 'Anatolii',
        sex : 'male',
        age : 40,
        location : 'Kharkiv',
        experience : 1
    },
    {
        name : 'Maksym',
        sex : 'male',
        age : 25,
        location : 'Kharkiv',
        experience : .5
    },
    {
        name : 'Anastasiia',
        sex : 'female',
        age : 43,
        location : 'Dnipro',
        experience : .25
    }
];


//? просто выполнить действия с элементами массива
// forEach
humans.forEach((el, i) => {
    console.log(i, el);
});

//? получение нового измененного массива из существующего
// map
const newHumans = humans.map(el => {
    const human = Object.assign({}, el);
    human.company = 'SoftServe';
    return human;
});
console.log(newHumans);

//? отфильтровать массив по соответсвию определенному условию
// filter
const kharkivCitizens = humans.filter(el => el.location == 'Kharkiv');
console.log(kharkivCitizens);

//? получить 1 результат по операциям с элементами массива
// reduce
const exp = humans.reduce((count, el) => {
    count += el.experience;
    return count;
}, 0);

console.log(exp);