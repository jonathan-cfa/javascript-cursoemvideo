function gerar(){
    var local = document.querySelector('#imagem')
    var title = document.createElement('h2')
    var para = document.createElement('p')

    local.innerHTML =''


    title.innerHTML = 'Bem-vindo'
    local.appendChild(title)
    para.innerHTML = 'Você acessou o sistema com sucesso.'
    local.appendChild(para)
}