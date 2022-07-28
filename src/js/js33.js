"use strict";

const arr = [1, 2, 3, 6, 8];
arr.sort();
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// сортирует цифры в правильном порядке, без этой функции только по символьно

/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
// метод перебора для любых вещей

/* arr.pop(); Убирает последний элемент
arr.push(10); Добавляет последний элемент

arr.shift Убирает первый элемент
arr.unshift 

console.log(arr); */


/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

for (let value of arr) {
    console.log(value);
}

// перебор с возможность остановки brake & continue 






const str = prompt("", "");
const products = str.split(", ");
console.log(products.join('; '));