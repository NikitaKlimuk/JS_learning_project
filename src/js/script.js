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

(num === 50) ? console.log('Верно') : console.log('Error');

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

console.log(hamburger === 3 && cola && fries); //Вовзвращает последнее цифровое значение правды, или первое значение не правды

if (hamburger === 3 && cola && fries) {
    console.log('я наелся 3 блюдами')
} else {
    console.log('Не хватило пайки')
}
//&& - логический оператор И
// 5 сущностей которые всегда будут false: 0,,null,Nan,undefened

console.log (1 && 0);
console.log(2 && 3);
console.log(null && 5);
console.log(0 && 'smth');