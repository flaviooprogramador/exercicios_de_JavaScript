let array = []
let lista = ''

do{
  lista = prompt(` Quantidade de imoveis cadastrados = ${array.length}
  [1] Cadastrar Novo imóvel
  [2] Mostrar Imóveis Cadastrados
  [3] Sair`)

  switch(lista){
    case '1':
    let imovel = {}
    imovel.nome = prompt(`Qual o nome do proprietario?`)
    imovel.quartos = prompt(`Quantidade de quartos`)
    imovel.banheiros = prompt(`Quantidade de banheiros`)
    imovel.PossuiGaragem = prompt(`Possui garagem? [Sim/Não]`)
    let confirmacao = confirm(`Salvar este Imovel`)
    if(confirmacao){
      array.push(imovel)
    }else{
      alert(`Imovel não foi salvo`)
    }
    break
    case '2':
    for(let i = 0; i < array.length; i++){
      alert(`
      imovel ${i + 1}
      Proprietario ${array[i].nome}
      Quartos ${array[i].quartos}
      Banheiros ${array[i].banheiros}
      Possui garagem? ${array[i].PossuiGaragem}`)
    }
    case '3':
    alert(`Finalizando...`)
    
  }

}while(lista !== '3')