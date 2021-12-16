let secondes = document.getElementById('secondes');
let minutes = document.getElementById('minutes');
let heures = document.getElementById('heures');

let aujourdhui = new Date();

let second = aujourdhui.getSeconds();
let minut = aujourdhui.getMinutes();
let heure = aujourdhui.getHours();

console.log(heure)

setInterval(() => {
    second++
    secondes.style.transform = 'rotate(' + (second * 6) + 'deg)';
    minutes.style.transform = 'rotate(' + (minut * 6) + 'deg)';
    heures.style.transform = 'rotate(' + (heure * 120) + 'deg)';
}, 1000);


let horloge = document.getElementById('horloge');
let color = document.getElementById('color');
let buttonChangeColor = document.getElementById('appliquer');

function changeColor() {
    horloge.style.borderColor = color.value;
}

buttonChangeColor.addEventListener("click", () => {
    changeColor()
})

/**
 * function change hours in working

function changeHours() {
    heure = aujourdhui.getHours() + 5;
}

document.getElementById('change').addEventListener("click", () => {
    changeHours()
})
*/
