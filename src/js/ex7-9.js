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