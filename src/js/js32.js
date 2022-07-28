"use strict";
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'   
    },
    makeTest: function() { // Метод внутри объекта (как записать функцию внутрь объекта)
        console.log("Test");
    }
};

console.log(Object.keys(options)); //Возвращает массив со всеми ключами
console.log(Object.keys(options).length); //Возвращает кол-во ключей

console.log(options.name);

delete options.name;
console.log(options["colors"]["border"]); /* Получение свойств через скобки  */
console.log(options);
let counter = 0;

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter); // Счётчик для колва объектов
//Перебирает объекты и взаимодействует с ними

const {border, bg} = options.colors; //Деструкторизация чтобы достать какой-то компонент 


