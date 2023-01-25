let vagas = []

function listaVagas(){
  const vagasEmtexto = vagas.reduce(function(textoFinal,vaga,indice){
    textoFinal += indice + ''
    textoFinal += vaga.nome
    textoFinal += "("+ vaga.candidatos.length + "candidatos)\n"
    return textoFinal
  },"")
  alert(vagasEmtexto)
}

function novaVaga(){
  const nome = prompt(`Informe um nome para a vaga`)
  const descricao =prompt(`Informe uma descricao para a vaga`)
  const dataLimite = prompt(`Informe uma data limite (dd/mm/aaaa) para a vaga`)

  const confirmar = confirm(`
  Deseja criar uma nova vaga com esssas informações
  Nome: ${nome}
  Descrição ${descricao}
  Data Limite ${dataLimite}`)

  if(confirmar){
    const novaVaga = {nome, descricao, dataLimite, candidatos: []}
    vagas.push(novaVaga)
    alert(`Vaga Criada`)
  }

}

function exibirVaga(){
  const indice = prompt(`Informe o indice da vaga que deseja exibir:`)
  if(indice >= vaga.length || indice < 0){
    alert(`Indice invalido`)
    return
  }
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal,candidatos){
    return textoFinal + "\n - " + candidatos
  }, "")

  alert(`
  Vagas n= ${indice}
  Nome: ${vaga.nome}
  descrição ${vaga.descricao}
  data Limite ${vaga.dataLimite}
  quantidade de candidatos: ${vagas.candidatos.length}
  candidatos incritos ${candidatosEmTexto}` 
  
  
  )

}

function increverCandidaos(){
  const candidato = prompt(`Informe o nome do candidato`)
  const indice = prompt(`Informe o indice da vaga para qual o candidato quer se increver`)
  const vaga = vagas[indice]

  const confirmacao = confirm(`Deseja inscrever o candidato ${candidato} na vaga ${indice} ?
  Nome ${vagas.nome} Descrição: ${vagas.descricao}
  Data Limite ${vagas.dataLimite}`)
  if (confirmacao){
    vagas.candidatos.push(candidato)
    alert(`Inscrição realizada.`)
  }
  
}

function excluirVaga(){
  const indice = prompt(`Informe o indice da vaga que deseja excluir:`)
  const vaga = vagas[indice]
  
  const confirmacao = confirm(`Tem certeza que deseja excluir a vaga ${indice}?
  Nome ${vagas.nome}
  Descrição: ${vagas.descricao}
  Data Limite ${vagas.dataLimite}`)

  if(confirmacao){
    vagas.splice(indice, 1)
    alert(`Vaga excluida`)
  }
}

function exibirMenu(){
  const opcao = prompt(
    `Cadastro de vagas de emprego
    Escolha uma das opções
    [1] Listar vagas disponiveis
    [2] Criar uma nova vaga
    [3] Visualizar uma vaga
    [4] Inscrever um(a) candidato(a)
    [5] Excluir uma vaga
    [6] Sair` 
  )
  return opcao
}

function executar(){
  let opcao = ''

  do{
    opcao = exibirMenu()
    switch(opcao){
      case '1':
        listaVagas()
        break
      case '2':
        novaVaga()
        break
      case '3':
        exibirVaga()
        break
      case '4':
        increverCandidaos()
        break
      case '5':
        excluirVaga()
        break
      case '6':
        alert(`Saindo...`)
        break
      default:
        alert('opção inválida')
        break

    }
  }while(opcao !== '6')
}

executar()