let arr = ['lucas','joao','pedro','flavio','marcos','maria'];
let lista = ''
let cads = ''


do{
  lista =  prompt`escolha uma opção
  [1] Exibir lista
  [2] Cadastrar novo paciente
  [3] Consultar paciente
  [4] Sair`

  switch(lista){
    case '1':
      alert(`${arr}`);
      break;
    
    case '2':
    cads += prompt(`Qual o nome para o cadastro?`);
    arr.push(cads)
    break;

    case '3':
    alert(`${arr[0]} Paciente indo para consulta!`);
    arr.shift()
    break;

    case '4':
      alert('Finalizando programa...'); 
      break;

    default:
    alert(`ERRO, Digite um numero valido (1,2,3,4)`);
    break
    
  }

}while( lista !== '4')




