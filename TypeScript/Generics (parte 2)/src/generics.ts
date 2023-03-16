interface EnemyShip {
  name: string
  pilot: string
  flag?: string // A propriedade é opcional para evitar erros
}

// O tipo Ship não estaria correto aqui
const enemyCopy = cloneShip(falcon, 'Enemy', 'Enemy')
// Mas podemos explicitamente passar o tipo para a função
// e agora temos o tipo EnemyShip atribuido corretamente
const enemyCopy2 = cloneShip<EnemyShip>(falcon, 'Enemy', 'Enemy')

// Aqui temos um erro por conta do tipo Ship
enemyCopy.flag = 'Imperial'
// Já aqui temos a propriedade opcional flag
enemyCopy2.flag = 'Imperial'