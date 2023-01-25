let numero = prompt(`digite um numero, para ver sua tabuada`)
let respo = document.getElementById('res')
const resposta =  document.getElementById('res')
let resultado = ''

for(let ate = 1; ate <= 10; ate++){
  resultado += alert(`${numero} * ${ate} = ${numero * ate}`)
  
}
