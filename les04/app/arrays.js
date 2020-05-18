const arr = [4, 33, 545, 3, 21, 'hello']; //литеральная запись
const arr2 = new Array(4);

//? push - добавляем в конец массива, возвращает длину обновленного массива
//! pop - вырезает из конца массива элемент и возвращает его
//? unshift - добавление в начало массива данных, возврает длину обновленного массива
//! shift - вырезает из начала массива и возвращает его

// ? sort - сортирует массив как строки(можно передать функцию сортировки и сортировать иначе)(работают с исходным массивом)
// ? reverse - перворачивает массив (работают с исходным массивом)

// ! slice(индекс начала, индекс конца[не учитывая этот элемент]) - возвращает новый массив, не изменя старый, Используется для копирования массивов. Не мутирующий метод

// ! splice(индекс начала, количество элементов для вырезания/удаления, элементы для вставки...) - возвращает новый массив, изменяет старый