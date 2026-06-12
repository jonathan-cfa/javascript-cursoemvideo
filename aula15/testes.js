const botao = document.getElementById('btnSub')
botao.addEventListener('click',enviar)

let dados = []

function enviar(){
const nome = document.getElementById('inome').value
const idade = document.getElementById('iidade').value
const status = document.getElementById('istatus').value

    if(nome.length === 0 || idade.length === 0 || status.length === 0){
        alert('Preencha todos os campos')
    }else{
        dados[0] = nome
        dados[1] = idade
        dados[2] = status
    }
    
    
alert(dados)
}