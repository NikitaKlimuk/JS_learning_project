// deffer & async
// defer - загружает скрипт в фоновом режиме и запустить когда загрузится все дом дерево 
// async - загружает скрипт в фоновом режиме и запускает по готовности


"use strict";

const p = document.querySelectorAll('p');
console.log(p);

/* const script = document.createElement('script');
script.src = "js/test.js";
script.async = false; //ведёт себя как обычный скрипт (грузит друг за другом)
document.body.append(script); */

// по умолчанию грузит асинхронно 


function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");