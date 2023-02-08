const sendButton = document.querySelector('.sendButton').addEventListener('click',sendTarefa)
const inputText = document.querySelector('.inputText')
const tarefaContainer = document.querySelector('.tarefaContainer')


function sendTarefa(){
    
    if (inputText.value == ''){
        return
    }
    const div = criaHtml()
    console.log(tarefaContainer)
    tarefaContainer.appendChild(div)
}

function criaHtml(){
    const div = document.createElement("div")
    div.classList.add('t1')
    const h2 = document.createElement("h2")
    h2.innerText = inputText.value
    div.appendChild(h2)
    const icon1 = document.createElement("img")
    icon1.setAttribute('src','img/feito.png')
    div.appendChild(icon1)
    const icon2 = document.createElement("img")
    icon2.setAttribute('src','img/apaga.png')
    div.appendChild(icon2)
    return div
}