/* 'use strict'; */

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */


// Условия в JS (if, switch, ?) 

"use strict";

/* const num = 50;

if (num == 50) {
    console.log('Верно');
} else {
    console.log('Error');
} */

/* switch (num) {
    case 49: 
        console.log('Неверно');
        break;
    case 100: 
        console.log('Неверно');
        break;
    case 50: 
        console.log('Верно');
        break;
    default: 
        console.log('Результат по умолчанию');
        break;
} */


// Логические операторы


/* const hamburger = 3,
      fries = 1,
      cola = 1;

console.log(hamburger === 3 && cola && fries); */ //Вовзвращает последнее цифровое значение правды

/* if (hamburger === 3 && cola && fries) {
    console.log('я наелся 3 блюдами');
} else {
    console.log('Не хватило пайки');
} */
//&& - логический оператор И
// 5 сущностей которые всегда будут false: 0,,null,Nan,undefened

/* console.log (1 && 0);
console.log(2 && 3);
console.log(null && 5);
console.log(0 && 'smth'); */

// Логические оператор ИЛИ || выводит значение на самой первой правде(дальше не работает) запинается на правде
// если все неправда то возвращает последнее ложное значение

// Логический оператор не ! - возвращает противоположное от полученного булинового значения

// Задачки на логику (что получим)
/* console.log( NaN || 2 || undefined ); //2
console.log( NaN && 2 && undefined ); //NaN
console.log( 1 && 2 && 3 ); //3
console.log( !1 && 2 || !3 ); //false
console.log( 25 || null && !3 ); //25
console.log( NaN || null || !3 || undefined || 5); //5
console.log( NaN || null && !3 && undefined || 5); //5
console.log( 5 === 5 && 3 > 1 || 5); //true



let number = 50;

// Первый цикл, проверка, потом действие до результата

while (number <= 55) {
        console.log(number);
        number++;
} */

// 2 цикл, сначала действие потом проверка

/* do {
    console.log(number);
    number++;
}
while (number < 55); 

// 3 цикл for

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        break;  */// остановить цикл
       /*  continue; */ // пропустить определённое значение, перейти к след итерации
 /*    }
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log (i);
    for (let j = 0; i < 3; j++) {
        console.log (j);
    }
} */


/* let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result); */


/* first: for (let i = 0; i < 3; i++) {
    console.log ('First level: ${i}');
    for (let j = 0; i < 3; j++) {
        console.log ('Second level: ${j}');
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log ('Third level: ${k}');
        }
    }
} */

/* for (let i = 5; i < 11; i++) {
    console.log (i);
}

for (let i = 20; i > 9; i--) {
    if (i === 13) {
        break;
    }
    console.log (i);
}

for (let i =2; i<11; i++) {
    if (i % 2 == 0) {
        console.log (i);
    }
}

for (let i =2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
} */


/* let i = 3;
while (i <= 15) {
        console.log(i);
        i += 2;
}

let k = 2;
do {
    console.log(k);
    number++;
}
while (k % 2 === 0 && k <= 16); 




const arrayOfNumbers = [];

for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers); */





/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result); */



/* const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else {
        data[i] = data[i] +=' - done';
    }
}
console.log(data); */

/* const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 0; i < data.length; i++) {
    result[i] = data[4 - i];
}
console.log(result);
 */





/* const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result); */



/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}; */

/* const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */

/* for (let i = 0; i < 2; i++) {

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.langht < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10 ) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB); */



// Функции 

// Function declaration - создается в самом начале, до объявления
/* let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
} 

showFirstMessage("Hello world");
console.log(num); */

/* function calc(a, b) {
    return (a + b);
}

console.log(calc(4+3));
console.log(calc(9+3));
console.log(calc(4+10)); */


/* function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum); */

// Function expresion - создается когда код доходит до неё

/* const logger = function() {
    console.log("Hello");
};

logger(); */

// Стрелочная функция

/* const calc = (a, b) => a + b; */

/* const calc = (a, b) => {
    console.log('1');
    return a + b;
}; */



//26 лессон, ещё про функции
/* const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);



function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log('Done');
} */



// 1 ex
/* function sayHello(name) {
    return `Привет, ${name}!`;
}
sayHello('Nik');
 */


// 2 ex
/* function returnNeighboringNumbers(num) {
    return [num -1, num, num +1];
}
returnNeighboringNumbers(5); */

//3 ex
function getMathResult(num, times) {
    if (times !== 'number' && times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
            }
        }
    return(str);
}
getMathResult(3, 5);


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }

    return str;
}
getMathResult(10, 5);
