let secondes = document.getElementById('secondes');
let minutes = document.getElementById('minutes');
let heures = document.getElementById('heures');

let aujourdhui = new Date();

let time = aujourdhui.getSeconds() + 60 * aujourdhui.getMinutes() + 3600 * aujourdhui.getHours();
setInterval(() => {
    time++
    secondes.style.transform = 'rotate(' + (time * 6) + 'deg)';
    minutes.style.transform = 'rotate(' + Math.round(time /10) + 'deg)';
    heures.style.transform = 'rotate(' + Math.round(time / 120) + 'deg)';
    document.getElementById('animation').style.transform = 'rotate(' + (time * 60) + 'deg)';
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

document.getElementById('defaut').addEventListener("click", () => {
    horloge.style.backgroundImage = 'url(/assets/img/uploads.siteduzero.com_files_163001_164000_163059.png)';
    horloge.style.backgroundSize = 'cover';
    document.getElementById('defaut').style.borderColor = 'red';
    document.getElementById('ios').style.borderColor = 'black';
})

document.getElementById('ios').addEventListener("click", () => {
    horloge.style.backgroundImage = 'url(/assets/img/téléchargement.png)';
    horloge.style.backgroundSize = '500px, 500px';
    horloge.style.backgroundRepeat = 'no-repeat';
    document.getElementById('ios').style.borderColor = 'red';
    document.getElementById('defaut').style.borderColor = 'black';
})

