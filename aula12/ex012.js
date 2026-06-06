var agora = new Date()
var hora = agora.getHours()
var minut = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${minut} horas.`)

if(hora < 5){
    console.log('Boa madrugada')
}else if (hora <12){
    console.log('Bom dia')
}else if (hora <18){
    console.log('Boa tarde')
}else{
    console.log('Boa Noite')
}