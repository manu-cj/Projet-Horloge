let secondes = document.getElementById('secondes');
let minutes = document.getElementById('minutes');
let heures = document.getElementById('heures');

let aujourdhui = new Date();

let second = aujourdhui.getSeconds();
let minut = aujourdhui.getMinutes();
let heure = aujourdhui.getHours();

setInterval(() => {
    second++
    secondes.style.transform = 'rotate(' + (second * 6) + 'deg)';
    minutes.style.transform = 'rotate(' + (minut * 6) + 'deg)';
    heures.style.transform = 'rotate(' + (heure * 120) + 'deg)';
}, 1000);

