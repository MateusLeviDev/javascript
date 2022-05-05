
/*function seguirMouse(event) {
    const x = event.x;
    const y = event.y;
    const circulo = document.querySelector('.div');
    circulo.style.top = y + "px";
    circulo.style.left = x + "px";
}

window.addEventListener('mousemove', seguirMouse)*/

const circulo = document.querySelector('.div');

function seguirMouse(event) {
    circulo.style.top = event.y + "px";
    circulo.style.left = event.x + "px";
}

window.addEventListener('mousemove', seguirMouse)