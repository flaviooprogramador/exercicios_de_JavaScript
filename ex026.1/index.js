let pos = document.getElementById('ipos').value
let nom = document.getElementById('nome').value
let num = document.getElementById('numero').value
let res = document.getElementById('resp').value

function adicionar(){
  let pos = document.getElementById('ipos').value
  let nom = document.getElementById('nome').value
  let num = document.getElementById('numero').value
  let res = document.getElementById('resp').value

  let confirmação = confirm(`Confirmar?
Posição: ${pos}
Nome: ${nom}
Número:${num}`)

  if(confirmação){
    let res = document.getElementById('resp')
    let item = document.createElement("li")
    item.innerHTML = (`Posição ${pos} Nome: ${nom} Número:${num}`)
    res.appendChild(item)

    document.getElementById(`ipos`).value=''
    document.getElementById(`nome`).value=''
    document.getElementById(`numero`).value=''
  }

}

function remover(){
  const remove = document.getElementById('numer').value
  const confirma = confirm(`Remover jogador numero ${remove}`)
  if(confirma){
    document.getElementById('numer').removeChild(res)
    document.getElementById('numer').value = ''
    
  }
}