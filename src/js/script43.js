"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


/* box.style.backgroundColor = 'blue';
box.style.width = '500px';
 */
box.style.cssText = 'background-color: blue; width: 500px;';
// Через бектики можно вводить переменные = `' ${} '`


btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// Как изменять много элементов через цикл
for (let i =0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

// Через специальные методы
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


// Создание элементов через JS
const div = document.createElement('div');

/* const text = document.createTextNode('Тут был я'); */


// Как добавить класс элементу
div.classList.add('black');

document.body.append(div);
/* document.querySelector('.wrapper').append(div); */
wrapper.append(div); // Вставить в конце
wrapper.prepend(div); // вставить до

// Ещё методы
hearts[0].before(div);
hearts[0].after(div);

// Удаление элементов со страницы
circles[0].remove();

// Метод замены отдного элемента на другой
hearts[0].replaceWith(circles[0]);


// Устаревшие методы
/* wrapper.appendChild(div); */
/* wrapper.insertBefore(div, hearts[0]); */ // Какой элемент и перед каким элементов вставить
/* wrapper.removeChild(hearts[1]); */ // Удаляет элемент у родителя
/* wrapper.replaceChild(circles[0], hearts[0]); */ // Первый элемент на что меняет, 2 - что меняем


// Редактирование элементов
/* div.innerHTML = "Hello world"; */
div.innerHTML = "<h1>Hello world</h1>"; 

/* div.textContent = "Hello"; */ // Выводит только текст (безопастно)

// Комбнациия 
div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // 4 значения чтобы вставлять в разные места