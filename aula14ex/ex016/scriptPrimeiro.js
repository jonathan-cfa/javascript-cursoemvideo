const botao = document.querySelector('#botaoContar')
botao.addEventListener('click', contar)

function contar() {
    const campoInicio = document.getElementById('iinicio')
    const campoFim = document.getElementById('ifim')
    const campoPassos = document.getElementById('ipasso')
    const resposta = document.getElementById('resposta')

    if (campoInicio.value === '' || campoFim.value === '' || campoPassos.value === '') {
        resposta.innerHTML = 'Impossivel contar'
        return
    }

    let inicio = Number(campoInicio.value)
    let fim = Number(campoFim.value)
    let passos = Number(campoPassos.value)

    if (passos <= 0) {
        passos = 1
        alert(`Passo invalido!! \n\n Será considerado o Passo 1`)

        resposta.innerHTML = 'Contando:<br>'

        while (inicio <= fim) {
            resposta.innerHTML += `${inicio}👉`
            inicio += passos

        }
        resposta.innerHTML += '🎉'
    } else {
        resposta.innerHTML = 'Contando:<br>'
        do {
            resposta.innerHTML += `${inicio}👉`
            inicio += passos
        } while (inicio <= fim)
        resposta.innerHTML += '🎉'
    }

    /* for(let inicio = 1;inicio <=fim;inicio += passos){
        resposta.innerHTML += `${inicio}👉`
    } */

    /* while(inicio <= fim){
        resposta.innerHTML += `${inicio}👉`
        inicio += passos
        
    } */
}