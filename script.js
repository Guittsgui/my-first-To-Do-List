const sendButton = document.querySelector('.sendButton').addEventListener('click',sendTarefa)
const inputText = document.querySelector('.inputText')
const tarefaContainer = document.querySelector('.tarefaContainer')

tarefaContainer.addEventListener('click', postActions)

function sendTarefa(){
    
    if (inputText.value == ''){
        return
    }
    const div = criaHtml()
    tarefaContainer.appendChild(div)
    inputText.value = ''
}

function criaHtml(){
    const div = document.createElement("div")
    div.classList.add('t1')
    const h2 = document.createElement("h2")
    h2.innerText = inputText.value
    div.appendChild(h2)
    const icon1 = document.createElement("img")
    icon1.setAttribute('src','img/feito.png')
    icon1.setAttribute('id','feito')
    div.appendChild(icon1)
    const icon2 = document.createElement("img")
    icon2.setAttribute('src','img/apaga.png')
    icon2.setAttribute('id','apaga')
    div.appendChild(icon2)
    return div
}

function postActions(e){
    const target = e.target
    const targetDiv = target.closest('div')
    if (target.id == 'feito'){
        targetDiv.classList.toggle('active')
    }else{
       targetDiv.remove()
    }
}