// МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ
"use strict";

const str = "test";

console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));



const logg = "Hello world";

console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));



const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); //возвращает числовой тип данных и округляет
console.log(parseFloat(test)); //возвращает число без округления