function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
}

