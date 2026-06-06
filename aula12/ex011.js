var idade = 67
if (idade <16){
    console.log(`Sua idade de ${idade} anos não permite votar`)
}else if (idade < 18 || idade > 65){
    console.log(`Sua idade de ${idade} anos permite votar, mas opcional`)
} else{
    console.log(`Sua idade de ${idade} anos obriga a votar`)
}