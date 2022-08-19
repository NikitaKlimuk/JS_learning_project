// Мобильные собития 

// touchstart - Начало касания
// touchmove - движение касания
// touchend 
// touchenter - срабатывает когда ведём пальцем по экрану и зашли на предел элемента
// touchleave - когда ушёл с элемента
// touchcancel 

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX); // Отслеживает координаты пальца на объекте
    });
});


// touches - список всех пальцев на экране
// targetTouches - список пальцев на элементе конкретно
// changedTouches - список пальцев которые участвуют в текущем событии 
