const botao = document.querySelector('#botaoContar')
botao.addEventListener('click', contar)

function contar() {
    const campoInicio = document.getElementById('iinicio')
    const campoFim = document.getElementById('ifim')
    const campoPassos = document.getElementById('ipasso')
    const resposta = document.getElementById('resposta')
    //verificação de campos preenchidos
    if (campoInicio.value === '' || campoFim.value === '' || campoPassos.value === '') {
        resposta.style.color = 'red'
        resposta.innerHTML = 'Impossivel contar'
        return //return para encerrar o código em caso de erro
    }//fim da verificação

    //variaveis responsaveis pelos campos, convertidas em numero
    let inicio = Number(campoInicio.value)
    let fim = Number(campoFim.value)
    let passos = Number(campoPassos.value)

    if(inicio > 9999 || fim > 9999 || passos > 9999){
        alert('[CUIDADO]O numero não pode passar de 9999.')
        campoInicio.value =''
        campoFim.value = ''
        campoPassos.value =''
        campoInicio.focus()
        return
    }

    //alteração/verificação para em caso de digitar 0, transforma o passo em 1
    if (passos <= 0) {
        passos = 1
        alert('O valor do passo não pode ser zero!! \n\n Será considerado 1.')
    }//fim da ateração/verificação

    //altera o texto como uma notificação de status
    resposta.style.color = 'green'
    resposta.innerHTML = 'Contando: <br>'


    if (inicio < fim) {//seguindo do menor para o maior
        for (let c = inicio; c <= fim; c += passos) {
            resposta.innerHTML += `${c}👉 `
        }
    } else {// em caso de valor do maior para o menor
        for (let c = inicio; c >= fim; c -= passos) {
            resposta.innerHTML += `${c}👉 `
        }
    }
    resposta.innerHTML += '🎉' //mensagem de conclusao
}