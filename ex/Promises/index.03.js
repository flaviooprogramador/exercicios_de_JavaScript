
//Criação de promessa
const myPromise = new Promise((resolve, reject) => {
  const name = 'Matheus'

  if(name === 'Matheus'){
    resolve('Usuario Matheus encontrado!')
  }else {
    reject('Usuario nao encontrado...')
  }
})


myPromise.then((data) =>{
  console.log(data)
})

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
  const name = 'Matheus'

  if(name === 'Matheus'){
    resolve('Usuario Matheus encontrado!')
  }else {
    reject('Usuario nao encontrado...')
  }
})


myPromise3.then((data) =>{
  return data.toLowerCase()
}).then((stringModificada)=> {
  console.log(stringModificada)
})

// Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
  const name = 'João'

  if(name === 'Matheus'){
    resolve('Usuario Matheus encontrado!')
  }else {
    reject('Usuario nao encontrado...')
  }
})

myPromise3.then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(`Aconteceu um erro ${err}`)
})