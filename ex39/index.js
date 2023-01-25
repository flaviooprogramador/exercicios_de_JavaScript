const mage = require("./mage");
const Thief = require("./thief");
const warrior = require("./warrior");

const arthur = new mage('arthur', 90,4,2,14)
const beatrice = new Thief('beatrice', 140,22,8)
const cain = new warrior('cain', 200.14,12,4)

console.table({arthur,beatrice,cain})

cain.switchStance()
arthur.attack(cain)
beatrice.attack(arthur)
arthur.heal(arthur)
console.table({arthur,beatrice,cain})

