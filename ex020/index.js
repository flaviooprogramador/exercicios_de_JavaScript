let palavra = prompt('Informe uma palavra ')
let palavraInvertida = ''

for(i = palavra.length -1; i >= 0;  i--){
  palavraInvertida +=  palavra[i]
}

if(palavra  === palavraInvertida){
  alert`é um palindromo`
}else{
  alert(`Nãoé um palindromo
  ${palavra} !== ${palavraInvertida}`)
}