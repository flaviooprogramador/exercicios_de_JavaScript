//Rejeitando a Promise em Funções Async 

//Na aula anterior vimos como trabalhar com funções async, porém apenas com o resolve. Mas as funções async também permitem rejeitar uma promise. Podemos fazer isso através do objeto global Promise e seu método .reject():


async function asyncSum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('arguments must be of type number')
  }
  return a + b
}

async function asyncSubtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('arguments must be of type number')
  }
  return a - b
}

const sumResult = asyncSum(50,33)
const SubtractResult = asyncSubtract(50,4)


//caso acha alguma resposta passa nas variaveis que nao sejam, do type Number, O programa resultara em um erro, que foi gerado nas proprias funcoes
Promise.all([sumResult,SubtractResult]).then(results =>{
  console.log(results)
}).catch(err => {
  console.log(err)
})