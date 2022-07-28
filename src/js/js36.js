"use strict";

let str = "some";
/* let strObj = new String(str); */

console.log(typeof(str));
console.log(typeof(strObj));





const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = {
    health: 100
};

// Заимствование данных из прототипа, устаревший способ
/* jonh.__proto__ = soldier; */
console.log(jonh.armor);
jonh.sayHello();



// Новые способы (присвоить значения прототипа)
Object.setPrototypeOf(jonh, soldier);

//Прототипирование во время создания нового объекта
const john = Object.create(soldier);