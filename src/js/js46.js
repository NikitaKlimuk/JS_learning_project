"use strict";

// Навигация по ДОМ 
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes); Получает все узлы родителя

// Первый и последний элемент
// console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode); Можно получать доступ к родителям
console.log(document.querySelector('#current').parentElement); 


// Data атрибуты

console.log(document.querySelector('[data-current="3"]').nextSibling); // Следующий сосед
console.log(document.querySelector('[data-current="3"]').previousSibling); // Предыдущий сосед

console.log(document.querySelector('[data-current="3"]').nextElementSibling); // Конкретно след элем
console.log(document.querySelector('[data-current="3"]').previousElementSibling);


// for / of  Перебор элементов в псевдомассиве
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}