'use strict';

function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;
    
    volume = length ** 3;
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea();

console.log(calculateVolumeAndArea(5));


// 2 задача

function getCoupeNumber(number) {
    if (typeof(number) !== 'number' || number < 0 || !Number.isInteger(number)) {
        return "Ошибка. Проверьте правильность введенного места";
    } else if (number === 0 || number > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(number / 4);
}

getCoupeNumber();
console.log(getCoupeNumber(-7));

// ex 8

function getTimeFromMinutes(num) {
    if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return "Ошибка, проверьте данные";
    }

    let hour,
        minutes;

    hour = Math.floor(num / 60);
    minutes = num % 60;

    if (hour === 0 || hour >= 5 && hour <= 10) {
        return `Это ${hour} часов и ${minutes} минут`;
    } else  if (hour === 2 ||hour === 3 || hour === 4) {
        return `Это ${hour} часа и ${minutes} минут`;
    } else  if (hour === 1) {
        return `Это ${hour} час и ${minutes} минут`;
    }
}
getTimeFromMinutes();

console.log(getTimeFromMinutes(60));

// Альтернативный способ , через свитч, можно задать разные кейсы.
/* let hoursStr = '';

switch (hours) {
    case 0: 
        hoursStr = 'часов';
        break;
    case 1:
        hoursStr = 'час';
        break;
    case 2:
    case 3:
    case 4:
        hoursStr = 'часа';
        break;
    default:
        hoursStr = 'часов';
}

return `Это ${hours} ${hoursStr} и ${minutes} минут`; */



// ex8-2

function findMaxNumber(a, b, c, d) {
    if (typeof(a, b, c, d) !== 'number'|| a === '' || b === '' || c === '' || d === '') {
        return 0;
    }
    if (a > b && a > c && a > d) {
        return a;
    } else if (b > a && b > c && b > d) {
        return b;
    } else if (c > a && c > b && c > d) {
        return c;
    } else if (d > a && d > b && d > c) {
        return d;
    }
}
findMaxNumber();

console.log(findMaxNumber(10, 2.3, 4, -1));

// можно заменить простой функцией Math.max


/// Задачка на числа Фибонначи

function fib(x) {
    if (typeof(x) != 'number' || x === 0) {
        return '';
    }

    let fibbo = '';
    let first = 0,
        second = 1;

    for (let i = 0; i < x; i++) {
        if (i + 1 === x) {
            fibbo +=`${first}`;
        } else {
            fibbo +=`${first} ` ;
        }
        let third = first + second;
        first = second;
        second = third;
    }
    return fibbo;
}
fib();
console.log(fib(8));
