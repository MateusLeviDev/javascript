/*const lista = ["Java", "HTML", "CSS"];

const body = document.querySelector("body");*/



/*for (let index = 0; index < lista.length; index++) {
    body.innerHTML += "<li>" + lista[index] + "</li";
}*/


//método mais simples abaixo (ForEach)

/*function adcionarBody(item) {
    body.innerHTML += "<li>" + item +  "</li>"
}

lista.forEach(adcionarBody);*/

const links = document.querySelectorAll("nav a");

function logHref(item) {
    const href = item.href;
    console.log(href);
}

links.forEach(logHref);

const lista = ["JavaScript", "HTML5", "CSS3"];

//remove o último
lista.pop();

console.log(lista);

//remove o primeiro 
lista.shift();

console.log(lista);

//acrescenta 
lista.push("PHP");

console.log(lista);



