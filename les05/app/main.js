
var a = 4;//global const

function loc(){
    // lexical environment
    // local scope
    // const a = 3;//local const
    console.log(this);
    // console.log(b);
}

// var alert = 3;
// alert('hello');
loc();
console.log(a);

function change_color(obj){
    const st = obj.value || 'black';//default value (значение по умолчанию)

    document.body.style.backgroundColor = st;
}


//Логический И можно использовать как аналог if()

//default parameters
function changeColor(color = 'red'){
    console.log(color);
}

const cColor = (color = 'blue') => console.log(color);