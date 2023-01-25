let nome = window.prompt('Nome do veiculo 1')
let vel = window.prompt('qual a velocidade do veiculo?')
let nome2 = window.prompt('Nome do veiculo 2')
let vel2 = window.prompt('qual a velocidade do veiculo?')
if(vel > vel2){
  window.alert(`o ${nome} é mais rapido`)
}
else if(vel < vel2){
  window.alert(`o ${nome2} é mais rapido`)
}

else{
  window.alert('os dois veiculos possuem a mesma velocidade')
}
