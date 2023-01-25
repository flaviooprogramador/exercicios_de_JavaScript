let nome = prompt(`Qual o seu nome`)
let cidade1 = prompt(`Ja visitou alguma cidade?`)
let cont = 0
let cidades = ""
while(cidade1 === `sim`){
  let cidade = prompt`Qual cidade voce visitou?`
  cidades += ',' + cidade
  cidade1 =  prompt(`Ja visitou mais alguma cidade?`)
  cont++
}

alert(`seu nome é ${nome}, total de cidades visitadas foi ${cont}, e as cidades visitas sao ${cidades}`)