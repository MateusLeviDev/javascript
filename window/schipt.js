const larguraTela = window.innerWidth;

function coordenadaMouse(event) {
    const coordenadas = {
        x: event.x,
        y: event.y,
    }
    console.log(coordenadas);
}

//window.addEventListener("mousemove", coordenadaMouse);

function scroll() {
    console.log("Usou o scroll");
}

window.addEventListener("scroll", scroll);