//Um novo modelo de carro, super econômico foi lançado.
  //Ele faz 20 km com 1 litro de combustível.
  //Cada litro de combustível custa R$ 5,00.

  //Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.

  //Seu script será usado no computador de bordo do carro.



function combustível() {
  const combustivel = 5
  const userPer = prompt(`quanto de dinheiro deseja colocar de gasolina? [1 litro equivale a 5,00]`)
  let totGas = userPer / combustivel
  let respostaDeUser = confirm(`voce pediu para colocar ${userPer} de gasolina equivalente a ${totGas} Litros`)
  let km = 20
  let totKm = totGas * km
  let final = alert(`voce consegue andar ${totKm} Km`)
  
}

combustível()