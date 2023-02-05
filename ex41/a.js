async function dobrar(a,b){
  if (typeof a !== 'number' || typeof b !== 'number')
  return Promise.reject('erro digite um numero valido!!!')
  return a * b
}

console.log(dobrar(2,2))