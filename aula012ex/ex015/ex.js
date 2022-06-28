function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente.')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/hjovem.jpg')
        } else if (idade >=10 && idade < 21) {
            img.setAttribute('src', 'img/hjovem.jpg')
        } else if (idade > 21 && idade < 50) {
            img.setAttribute('src', 'img/hadulto.jpg')
        } else {
            img.setAttribute('src', 'img/hvelho.jpg')
        }
       } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/mjovem.jpg')
        } else if (idade >=10 && idade < 21) {
            img.setAttribute('src', 'img/mjovem.jpg')
        } else if (idade > 21 && idade < 50) {
            img.setAttribute('src', 'img/madulto.jpg')
        } else {
            img.setAttribute('src', 'img/mvelho.jpg')
        }
       }
       res.style. textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}