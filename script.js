const sendButton = document.querySelector('.sendButton').addEventListener('click',sendTarefa)
const inputText = document.querySelector('.inputText')
const tarefaContainer = document.querySelector('.tarefaContainer')
const inputSearch = document.querySelector('.inputsearch')
const editContainer = document.querySelector('.editContainer')
const btCancelar = document.querySelector('.btCancelar').addEventListener('click',cancelEdit)
const btEditar = document.querySelector('.btEditar').addEventListener('click',sendEdit)
const inputEditar = document.querySelector('.inputEditar')
const textoEditar = document.querySelector('.textoEditar')
let targetDiv 
let target
tarefaContainer.addEventListener('click', postActions)
inputSearch.addEventListener('input',searchPost)
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
    const icon3 = document.createElement("img")
    icon3.setAttribute('src','img/editar.png')
    icon3.setAttribute('id','edita')
    div.appendChild(icon3)
    const icon2 = document.createElement("img")
    icon2.setAttribute('src','img/apaga.png')
    icon2.setAttribute('id','apaga')
    div.appendChild(icon2)
    return div
}


function postActions(e){
    target = e.target
    targetDiv = target.closest('div')

    if (target.id == 'feito'){
        targetDiv.classList.toggle('active')
    }
    if (target.id == 'apaga'){
        targetDiv.remove()
    }
    if (target.id == 'edita'){
        tarefaContainer.style.display='none'
        editContainer.style.display='flex'
        textoEditar.innerText = targetDiv.querySelector('h2').innerText
    }
}

function searchPost(e){
    const searchValue = inputSearch.value
    let tarefasPostadas = tarefaContainer.querySelectorAll('.t1')  
    if ( searchValue != ''){

        for ( let tarefa of tarefasPostadas){
            let title = tarefa.querySelector('h2').innerText.toLowerCase()
            if (!title.includes(searchValue.toLowerCase())){
                tarefa.style.display= 'none'
            }else{
                tarefa.style.display = 'flex'
            }
        }
    }else{
        for ( let tarefa of tarefasPostadas){
            tarefa.style.display = 'flex'
        }
    }
}
function cancelEdit(){
    inputEditar.value = ''
    tarefaContainer.style.display='block'
    editContainer.style.display='none'
}
function sendEdit(e){
    if(inputEditar.value != ""){
        const newTarefa = inputEditar.value
        targetDiv.querySelector('h2').innerText = newTarefa
        inputEditar.value = ''
        tarefaContainer.style.display='block'
        editContainer.style.display='none'
    }

}