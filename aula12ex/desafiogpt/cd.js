function validar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector('#iano')
    var resForm = Number(formAno.value)
    var msg = document.querySelector('#msg')
    if (formAno.value.length == 0 || resForm > ano) { //Erro anterior - (resForm == 0 || resForm > ano) 
        alert('[ERRO] Confira os dados inseridos e tente novamente!')
    } else {
        var formSexo = document.getElementsByName('sexo')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var categoria = ''
        var img = document.createElement('img') // Esqueci de colocar  o var img = ...
        img.setAttribute('id', 'foto')
        if (formSexo[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 12) {
                categoria = 'Kid'
                img.setAttribute('src', 'imgs/kid-b.webp')
            } else if (idade < 18) { //errei na idade, coloquei 17 anteriormente
                categoria = 'Juvenil'
                img.setAttribute('src', 'imgs/juvenil-b.webp')
            } else if (idade < 35) {
                categoria = 'Adulto'
                img.setAttribute('src', 'imgs/adulto-b.webp')
            } else {
                categoria = 'Master'
                img.setAttribute('src', 'imgs/master-b.webp')
            }

        }else if (formSexo[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 12) {
                categoria = 'Kid'
                img.setAttribute('src', 'imgs/kid-g.webp')
            } else if (idade < 18) { //errei na idade, coloquei 17 anteriormente
                categoria = 'Juvenil'
                img.setAttribute('src', 'imgs/juvenil-g.webp')
            } else if (idade < 35) {
                categoria = 'Adulto'
                img.setAttribute('src', 'imgs/adulto-g.webp')
            } else {
                categoria = 'Master'
                img.setAttribute('src', 'imgs/master-g.webp')
            }

        }

        msg.style.textAlign = 'center'
        msg.innerHTML = `Atleta ${genero} categoria ${categoria} com ${idade} anos. <br>`
        msg.appendChild(img)


    }
}