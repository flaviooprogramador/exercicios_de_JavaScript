let nome = window.prompt(`Nome do personagem`)
let poder = window.prompt(`Poder de ataque`)
let nome2 = window.prompt(`Nome do personagem`)
let vida = window.prompt(`quantidade de vida`)
let defesa = window.prompt(`poder de defesa`)
let escudo = window.prompt(`Possui escudo?`)
let danoCausado = 0
if(poder > defesa && escudo === 'Nao'){
  danoCausado = (poder - defesa) / 2
} else if(poder > defesa && escudo === 'Sim'){
  danoCausado = (poder - defesa) /
}

alert(`${nome} causou ${danoCausado} pontos de dano em ${nome2}`)
alert(``)