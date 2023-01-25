let menu = ''

function areaTriangulo(base,altura){
  return base * altura / 2
}

function areaRetangulo(base, altura){
  return base * altura
}

function areaQuadrado(lado){
 return lado * lado
}

function AreaTrapezio(baseMaior, BaseMenor, altura){
      return (baseMaior + baseMaior)* altura /2
  }

function areaCirculo(raio){
  return 3.14 * raio * raio 
}

do{
  menu = prompt(`Área de formas Geométricas
  [1] Área do triângulo
  [2] Área do retângulo
  [3] Área do quadrado
  [4] Área do trapézio
  [5] Área do círculo
  [6] Sair`)

  switch(menu){
    case '1':
  let opc1 = prompt(`Digite a base do triangulo`)
  let opc2 = prompt(`Digite a altura do triangulo`)
  alert(areaTriangulo(opc1,opc2))
  break

    case '2':
  let opc3 = prompt(`Base do retangulo`)
  let opc4 = prompt(`Altura do retangulo`)
  alert(areaRetangulo(opc3,opc4))
    break

  case '3':
    let opc5 = prompt(`Lado do quadrado`)
    alert(areaQuadrado(opc5))
    break

  case '4':
    let opc6 = prompt(`Base maior`)
    let opc7 = prompt('Base menor')
    let opc8 = prompt(`altura`)
    alert(AreaTrapezio(opc6,opc7,opc8))
    break
  
  case '5':
  let opc9 = prompt(`raio`)
  alert(areaCirculo(opc9))
  break
  case '6':
  alert(`Finalizando...`)

  default:
  alert(`[ERRO] Digite um numero de 1 a 6...`)
  }
}while(menu !== '6')