"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');
// Тоже не используется, нельзя повторить свойство и нельзя удалить
/* btn.onclick = function() {
    alert('Click');
};
 */

// addEvent listener (можно добавить несколько событий)
/* btn.addEventListener('click', () => {
    alert('Click');
}); */


/* let i = 0; */
const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
/*     i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    } */
};
btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);


/* btn.addEventListener('click', deleteElement); // Можно удалять элемент через функцию

btn.addEventListener('mouseenter', (event) => {
    console.log(event.target);
    /* event.target.remove(); */ // Можно удалять элемент на который показываем

/*     console.log('Hover');
}); */ 


// Всплытие событий - обработчик срабатывает на самом вложенном элементе а затем всплывает вверх по иерархии



// Как отменять стандартную логику браузера event.preventDefault

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});


// Чтобы перебрать все кнопки  
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); //Если нужно вывести только один раз
});