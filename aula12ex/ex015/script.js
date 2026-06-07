function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/kid-b.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/teen-b.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adult-m.webp')
            } else {
                //idooso
                img.setAttribute('src', 'img/old-m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/kid-g.webp')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/teen-g.webp')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adult-w.webp')
            } else {
                //idooso
                img.setAttribute('src', 'img/old-w.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
        res.appendChild(img)
    }
}