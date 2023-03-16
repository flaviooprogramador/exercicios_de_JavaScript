import { spaceship } from "./import";

import * as lodash from "lodash"

interface BattleSaceship extends spaceship {
  weapons: number
}

let xwing: BattleSaceship  = {
  name: "X-wing",
  pilot: "Luke Skywalker",
  speed: 50,
  weapons: 4
}


console.log(lodash.camelCase(xwing.pilot))