import { spaceship } from "./import";

interface BattleSaceship extends spaceship {
  weapons: number
}

let xwing: BattleSaceship  = {
  name: "X-wing",
  pilot: "Luke Skywalker",
  speed: 50,
  weapons: 4
}