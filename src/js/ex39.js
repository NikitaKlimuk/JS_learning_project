"use strict";

// To string
// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) Канкатинация 
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;
console.log("https://vk/com/catalog/" + num);

const fontSize = 26 + 'px';


// To Number 
// 1)
console.log(typeof(Number('4')));

// 2) Унарный плюс
console.log(typeof(+'4'));

// 3) 
console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("Hello", "");


// To boolean
// 1)
// 0, '', null, undefined, Nan -- всегда False, остальное вссегда True

let switcher = null; // Тут условие не сработает
if (switcher) {
    console.log('Working...');
}

switcher = 1; // Тут правда, поэтому сработает
if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'444'));