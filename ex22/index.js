let cartas = ['Paus','Copas','Espadas','Ouros']
let lista = ''
let ad = ''
let rem = ''

do{
  lista = prompt (`
  ${cartas}
  [1] Adicionar carta
  [2] Puxar carta
  [3] Sair`)

  switch(lista){
    case '1':
    ad += prompt(`qual carta deseja adicionar ao baralho?`);
    cartas.push(ad);
    break;
    case '2':
     rem = cartas.pop();
     alert(`removendo carta ${rem}`)
    break;
    case '3':
      alert(`Finalizando...`);
      break;
    default:
      alert(`[ERRO] Digite um numero valido`)
  }
}while( lista !== '3')