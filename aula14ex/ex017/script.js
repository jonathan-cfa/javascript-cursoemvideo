const botao = document.querySelector('#btn')
botao.addEventListener('click', gerar)

function gerar() {
    const campoNumero = document.querySelector('#inumero')
    const campoLista = document.querySelector('#itabuada')

    //verifica se o campo Numero está vazio
    if (campoNumero.value.length === 0) {
        alert('Preencha o campo número!!')
        return
    }// fim da verificação
    else {
        let numero = Number(campoNumero.value)
        let x = 1
        campoLista.innerHTML = ''
        while (x <= 10) {
            let item = document.createElement('option')
            item.text = `${numero} x ${x} = ${numero * x}`
            item.value = `tab${x}`
            x++
            campoLista.appendChild(item)
        }
    }
    /* for(let x = 1; x <= 10; x ++){
        let item = document.createElement('option')
        
        item.text = `${numero} x ${x} = ${numero * x}`
        item.value = `tab${x}`

        campoLista.appendChild(item)
    } */

}
