class Spaceship {
  private name: string
  protected captain: string
  protected speed: number

  
  constructor(name: string, captain: string) {
    this.name = name
    this.captain = captain
    this.speed = 0
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time
  }
}

class Fighter extends Spaceship {
  weapons: number
  constructor(name:string, captain:string, weapons:number) {
    super(name, captain)
    this.weapons = weapons
  }

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log('Pew!')
    }
  }

  erase() {
    this.captain = ''
    this.speed = 0
  }
}

let ship = new Spaceship('USS Enterprise', 'James T. Kirk')

let ship2 = new Fighter('USS', 'James', 10)

ship.accelerate(50, 10)

ship2.weapons = 20 
