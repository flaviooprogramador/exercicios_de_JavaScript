//Treinando o uso das Promises

//Vamos começar escrevendo a função que calcula o IMC de forma assíncrona devolvendo uma nova promise:


function imc(weigth, heigth){
  return new Promise((resolve, reject) =>{
    if(typeof weigth !== 'number' || typeof heigth !== 'number')
      reject('arguments must be of type number')
    else{
      resolve(weigth / (heigth * heigth))
    }
  })
}

//Agora podemos escrever a função que chama a função imc e então faz o tratamento apropriado em caso de resolução ou rejeição da promise:


function showImc(weigth,heigth) {
  imc(weigth, heigth).then((result) => {
    console.log(`O resultado do IMC foi de ${result}`)

    if(result < 18.5) console.log(`Situação: MAGREZA`)
    else if(result < 25) console.log('situação: NORMAL')
    else if(result < 30) console.log('Situação: SOBREPESO')
    else if(result < 40) console.log('Situação: OBESIDADE')
    else console.log('Situação: OBESIDADE GRAVE')

//Por fim, vamos incluir um console.log para visualizar claramente o funcionamento assíncrono da função imc e então executar as funções algumas vezes com valores válidos e inválidos: 


  }).catch((err) => {
    console.log(err)
  })

  console.log(`calculando o IMC para o peso ${weigth} altura ${heigth}`)
}

showImc(71,1.74)
showImc(48,1.60)
showImc(71,'opa')
showImc(44,1.74)
showImc(121,1.84)


