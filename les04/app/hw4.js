function getSummOfMin(arr) {
    const sort1 = function(a, b){
		return a - b;
    }

    const arr = array.length;
    let sum = 0;

    for(let i = 0; i < arrLen; i++){
        arr[i].sort(sort1);
        sum += arr[i][0];
    }

    return sum;
}

let array = [[56, 54, 23], [3, 2, 1], [7, 95, 97]];
let sumMin = getSummOfMin(array); 
console.log(sumMin);
// ! DOM - Document Object Model

function shortestWord(strinArray) {
    return Math.min(...strinArray.split(' ').map(item => item.length));
}

function shortestWord2(strinArray) {
    const arrOfWords = strinArray.split(' ');
    const arrOfWordsLen = arrOfWords.length;
    let minLen = arrOfWords[0].length;
    for(let i = 1; i < arrOfWordsLen; i++){
        if(minLen > arrOfWords[i].length){
            minLen = arrOfWords[i].length;
        }
    }

    // const minLen = Math.min(...arrOfLens);

    return Math.min(...((strinArray.split(' ')).map(item => item.length)));
}         // 4       3            1                  2

//"bitcoin take over the world maybe who knows perhaps" --> 3
