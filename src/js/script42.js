"use strict";
// Старые методы

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); // возвращает html коллекцию массив с кнопками
console.log(btns[1]);


const circles = document.getElementsByClassName('circle');
console.log(circles);



// современные методы 

const hearts = document.querySelectorAll('.heart'); //можно указывать все что угодно

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // выводит первый подходязий элемент
console.log(oneHeart);
