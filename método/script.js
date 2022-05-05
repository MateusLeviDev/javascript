/*const curso = {
    nome: 'JavaScript',
    completar() {
        console.log("Curso Completo")
    }
}

console.log(curso.nome);
curso.completar();*/

const ativar = document.querySelector('.ativar');

function ativarAoClick() {
    console.log('Clicou em:', ativar);
}

ativar.addEventListener('click', ativarAoClick)

console.log(ativar);  