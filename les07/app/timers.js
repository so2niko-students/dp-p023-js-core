function hello(name = ''){
    name.c++;
    console.count(`hello ${name.c}`);
}



const a = setInterval(hello, 1000, { c : 0 });

const b = setTimeout(() => hello('timeout'), 5000);

console.log(a, b);

function stop(int = 1){
    clearInterval(int);
}