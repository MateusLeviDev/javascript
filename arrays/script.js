const lista = ["Java", "HTML", "CSS"];

const body = document.querySelector("body");

for (let index = 0; index < lista.length; index++) {
    body.innerHTML += "<li>" + lista[index] + "</li";
}
