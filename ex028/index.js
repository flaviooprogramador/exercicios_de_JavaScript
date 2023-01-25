function createLabel(text,htmlFor){//funcao que cria uma labe

  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerHTML = text
  return label
}

function createInput(id,value,name,type = 'text',placeholder = ''){//funcao que cria um input

  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0 

addTechBtn.addEventListener('click', function(ev){

  const stackInputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome:', 'techName-' + rowIndex)//adiciona uma label
  const techNameInput = createInput('techName-' + rowIndex, null, 'techName')//adiciona um input

  //radio1
  const exLabel = createLabel ('Experiência:')
  const id1 = 'expRadio-' + rowIndex + '.1'
  const exRadio1 = createInput(id1,'0-2 anos','techExp-'+ rowIndex, 'radio')
  const esLabel1 = createLabel('0-2 anos',id1)
  
  //radio2
  const id2 = 'expRadio-' + rowIndex + '.2'
  const exRadio2 = createInput(id1,'3-4 anos','techExp-'+ rowIndex, 'radio')
  const esLabel2 = createLabel('3-4 anos',id2)

  //radio3
  const id3 = 'expRadio-' + rowIndex + '.3'
  const exRadio3 = createInput(id1,'5+ anos','techExp-'+ rowIndex, 'radio')
  const esLabel3 = createLabel('5+ anos',id3)

  //Button de remover 
  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remover'
  removeRowBtn.addEventListener('click', function(){
    stackInputs.removeChild(newRow)
  })

  newRow.append(

    techNameLabel,techNameInput,exLabel, exRadio1,esLabel1, exRadio2,esLabel2,exRadio3,esLabel3,removeRowBtn
  )//adiciona 

  stackInputs.appendChild(newRow)

})

form.addEventListener('submit',function(ev){
  ev.preventDefault()

    const fullnameinput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')

    let techonologies = []
    inputRows.forEach(function(row){
    const techName = document.querySelector('#' + row.id + 'input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + 'input[type="radio"]:checked').value
    techonologies.push({name: techName, exp: techExp})
  })

  const newDev = {fullname: fullnameinput.value, techonologies: techonologies}
  developers.push(newDev)
  window.alert('DEV cadastrado com sucesso')
  
  fullnameinput.value = ''
  inputRows.forEach(function(row){
    row.remove()
  })
  console.log(developers)
})