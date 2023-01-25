function createLabel(text, htmlFor){
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = Text
  return label
}

function createInput(id, value, type = 'text', placeholder = ''){
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.type = type
  input.placeholder = placeholder
  return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developrs = []
let inputRows = 0

  addTechBtn.addEventListener('click', function(ev){
  const stackInputs = document.getElementById('stackInputs')

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++
  newRow.id = 'inputRow' + rowIndex
  newRow.className = 'inputRow'

  const  techNameLabel = createLabel('Nome', 'techName-', + rowIndex)
  const techNameInput = createInput('techName' + rowIndex, null, 'techName')

  const expLanbel = createLabel('Experiencia')
  const id1 = 'expRadio-'+ rowIndex + '.1'
  const expLanbel1 = createLabel('0-2 anos', 'expRadio -' + rowIndex + '1.')
  const exRadio = createInput( id1,'0-2 anos', id1)

  const id2 = 'expRadio-'+ rowIndex + '.2'
  const expLanbel2 = createLabel('3-4 anos', 'expRadio -' + rowIndex + '1.')
  const exRadio2 = createInput( id2,'3-4 anos', id2)

  const id3 = 'expRadio-'+ rowIndex + '.3'
  const expLanbel3 = createLabel('5 + anos  ', 'expRadio -' + rowIndex + '1.')
  const exRadio3 = createInput( id3,'5 + anos', id3)
  

  newRow.append(
    techNameLabel, techNameInput, expLanbel, exRadio, expLanbel1,exRadio2,expLanbel3,expLanbel3
  )
  stackInputs.appendChild(newRow)
})