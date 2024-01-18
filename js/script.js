"use strict";
const btn = document.querySelector("#btn");

function animation() {
    const car = document.querySelector(".car");
    let pos = 0;

    const timeId = setInterval(frame, 10);

    function frame() {
        if (pos === 700) {
            clearInterval(timeId);
        } else {
            pos++;
            car.style.left = pos + "px";
        }
    }
}

btn.addEventListener("click", animation);

//  now date

const now = new Date();
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getHours());
