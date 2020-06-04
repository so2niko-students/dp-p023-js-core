export default class Model{
    data = [
        {
            day : 0,
            lessons : [
                'Sveta 16:00',
                'Dima 12:00',
            ]
        },
        {
            day : 1,
            lessons : []
        },
        {
            day : 2,
            lessons : [
                'Sveta 15:00',
                'Dima 16:00',
            ]
        },
        {
            day : 3,
            lessons : []
        },
        {
            day : 4,
            lessons : []
        },
        {
            day : 5,
            lessons : [
                'Sveta 15:00',
                'Dima 16:00',
            ]
        },
        {
            day : 6,
            lessons : [
                'Sveta 15:00',
                'Dima 16:00',
            ]
        },
        {
            day : 7,
            lessons : [
                'Sveta 15:00',
                'Dima 16:00',
            ]
        },
        {
            day : 8,
            lessons : [
                'Sveta 15:00',
                'Dima 16:00',
            ]
        },
        {
            day : 9,
            lessons : [
                'Sveta 15:00',
                'Dima 16:00',
            ]
        },
        {
            day : 10,
            lessons : [
                'Sveta 15:00',
                'Dima 16:00',
            ]
        },
        {
            day : 11,
            lessons : [
                'Sveta 15:00',
                'Dima 16:00',
            ]
        },
        {
            day : 12,
            lessons : [
                'Sveta 15:00',
                'Dima 16:00',
            ]
        },
        {
            day : 13,
            lessons : [
                'Sveta 15:00',
                'Dima 16:00',
            ]
        }
    ]
    constructor(){

    }

    addLesson(les, day){
        const d = this.data.find(item => item.day == day);
        d.lessons.push(les);
    }
}