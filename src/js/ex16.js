"use strict";

function factorial(num) {
    let total = 0;
    if (typeof(num) !== 'number' || !Number.isInteger(num)) {
        return "Ошибка. Введите целое число";
    } else {

        if (num === 1 || num <= 0) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }
}

console.log(factorial(-5));