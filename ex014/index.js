
let medida = prompt('Insira uma medida em metros')

let unidade = prompt(
  `Para qual unidade de medida deseja converer?
  1 milimetro(mm)
  2 centimetros (cm)
  3 decimetros(dm)
  4 decametro (dam)
  5 hectometros (hm)
  6 quilometros (km)`
)

switch (unidade){
  case '1':
    alert(`Resultado ${medida} m= ${medida *1000} mm`)
    break

  case '2':
    alert(`Resultado ${medida} m= ${medida *100} cm`)
    break

  case '3':
    alert(`Resultado ${medida} m= ${medida *10} dm`)
    break

  case '4':
    alert(`Resultado ${medida} m= ${medida *10} dam`)
    break

  case '5':
    alert(`Resultado ${medida} m= ${medida *100} hm`)
    break

  case '6':
    alert(`Resultado ${medida} m= ${medida *1000} km`)
    break

  default:
    alert('opcao invalida')
}