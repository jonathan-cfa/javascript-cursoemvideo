const botao = document.querySelector('#btn')
botao.addEventListener('click',verificar)

function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const campoAno = document.querySelector('#iano')
    const campoSexo = document.getElementsByName('sexo')
    const divResposta = document.querySelector('#res')

    if(campoAno.value.length === 0 ||campoAno.value > ano ){
        alert('[ERRO] Verifique o campo ano de nascimento')
    }else {
        const idade =ano - Number(campoAno.value)
        const img = document.createElement('img')

        let genero = ''

        if(campoSexo[0].checked){//homem
            genero = 'Homem'
            img.setAttribute('src','masc.webp')
        }else if(campoSexo[1].checked){//mulher
            genero = 'Mulher'
            img.setAttribute('src','fem.webp')
        }
        
        divResposta.style.textAlign
        divResposta.innerHTML = `Identificado ${genero}, ${idade} anos! <br>`
        divResposta.appendChild(img)


        /* alert(`Idade é igual a ${idade} anos`) */
    }

}

const ver = document.querySelector('#iano')
ver.addEventListener('input',checar)

function checar(){
    const data = new Date()
    const ano = data.getFullYear()
    const button = document.querySelector('#btn')

    if(ver.value.length === 0 ||ver.value > ano  || ver.value.length < 4){
       button.style.display = 'none'
    }else{
        button.style.display = 'block'
    }
}

ver.addEventListener('keydown', function(e) {
    // Verificamos se a tecla apertada foi o Enter
    if (e.key === 'Enter') {
        e.preventDefault(); // Impede o navegador de atualizar a página!
        
        // Como o usuário apertou Enter, que tal já chamar a sua função?
        checar(); 
    }
});

