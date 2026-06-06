function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#foto')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`

    if (hora >= 0 && hora <12){
        img.src = 'images/manha.webp'
        document.body.style.background = '#f2e9d1'
        document.querySelector('footer').style.color = '#464a4d'
        document.querySelector('header').style.color ='#464a4d'
    }else if(hora <18){
        img.src = 'images/tarde.webp'
        document.body.style.background = '#c76d19'
    }else{
        img.src = 'images/noite.webp'
        document.body.style.background = '#464a4d'
    }
}