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

const num = 50;

if (num == 50) {
    console.log('Верно');
} else {
    console.log('Error');
}

switch (num) {
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
}


// Логические операторы


const hamburger = 3,
      fries = 1,
      cola = 1;

console.log(hamburger === 3 && cola && fries); //Вовзвращает последнее цифровое значение правды

if (hamburger === 3 && cola && fries) {
    console.log('я наелся 3 блюдами');
} else {
    console.log('Не хватило пайки');
}
//&& - логический оператор И
// 5 сущностей которые всегда будут false: 0,,null,Nan,undefened

console.log (1 && 0);
console.log(2 && 3);
console.log(null && 5);
console.log(0 && 'smth');

// Логические оператор ИЛИ || выводит значение на самой первой правде(дальше не работает) запинается на правде
// если все неправда то возвращает последнее ложное значение

// Логический оператор не ! - возвращает противоположное от полученного булинового значения

// Задачки на логику (что получим)
console.log( NaN || 2 || undefined ); //2
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
}

// 2 цикл, сначала действие потом проверка

do {
    console.log(number);
    number++;
}
while (number < 55); 

// 3 цикл for

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        break; // остановить цикл
       /*  continue; */ // пропустить определённое значение, перейти к след итерации
    }
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log (i);
    for (let j = 0; i < 3; j++) {
        console.log (j);
    }
}


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

for (let i = 5; i < 11; i++) {
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
}


let i = 3;
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
console.log(arrayOfNumbers);





/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result); */



const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else {
        data[i] = data[i] +=' - done';
    }
}
console.log(data);

/* const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 0; i < data.length; i++) {
    result[i] = data[4 - i];
}
console.log(result);
 */





const lines = 5;
let result = '';

for (let i = 1; i < lines; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}

console.log(result);