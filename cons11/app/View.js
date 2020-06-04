export default class View{
    days = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
        'N: Mon',
        'N: Tue',
        'N: Wed',
        'N: Thu',
        'N: Fri',
        'N: Sat',
        'N: Sun'
    ];
    constructor(onDayClick, onDayAdd){
        this.lessonsTable = document.querySelector('.lessons-table');
        this.btnAddLesson = document.querySelector('.btn-add');
        this.btnAddLessonNum = document.querySelector('.btn-add-day');
        this.inpDayAddText = document.querySelector('.inp-text');

        this.lessonsTable.addEventListener('click', onDayClick);
        this.btnAddLesson.addEventListener('click', onDayAdd);
    }

    renderTable(lessons){
        let html = lessons.map(l => {
            let lessonsList = l.lessons.map(st => {
                return `<li data-day="${l.day}">${st}</li>`;
            }).join('');
            return `
                <div data-day="${l.day}" class="lessons-day">
                    <h4 data-day="${l.day}">${this.days[l.day]}</h4>
                    <ul>
                        ${lessonsList}
                    </ul>        
                </div>
            `;
        }).join('');

        this.lessonsTable.innerHTML = html;
    }

    renderDayNum(dayN){
        this.btnAddLessonNum.innerText = this.days[dayN];
    }

    getInpDayText(){
        const less = this.inpDayAddText.value;
        this.inpDayAddText.value = '';
        return less;
    }
}