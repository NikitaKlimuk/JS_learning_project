"use strict";

let x = 5; alert( x++ ); // сначала вернет x а потом его увеличит

[ ] + false - null + true; // NaN
console.log(typeof([]+false));

let y = 1; let x = y = 2; alert(x); // 2

[ ] + 1 + 2; 
console.log([] + 1 + 2); // 12 изза строки

alert( "1" [0] ); // 1

console.log(2 && 1 && null && 0 && undefined); // null

!!( a && b )  (a && b); //true and false
let i,
    p;
console.log(!!(p && i));


alert( null || 2 && 3 || 4 ); // 3 (при обоих равных возвращает последнее значение)

const a = [1, 2, 3], 
      b = [1, 2, 3];  
      
console.log(a == b); //false разные хранилища могут быть с одинаковым содержанием


alert( +"Infinity"); // infinity числовые данные

console.log("Ёжик" > "яблоко"); // false
 console.log(0 || "" || 2 || undefined || true || falsе); //2