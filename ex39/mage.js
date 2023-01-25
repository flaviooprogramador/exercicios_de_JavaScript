const character = require("./character");

class mage extends character{
  constructor(name, lifePts, attackPts, defesenePts, magicPts){
    super(name,lifePts,attackPts,defesenePts)
    this.magicPts = magicPts
  }

  attack(targetCharecter){
    targetCharecter.lifePts -= (this.attackPts + this.magicPts) - targetCharecter.defesenePts
  }
  heal(targetCharecter){
    targetCharecter.lifePts += this.magic * 2
  }
}


module.exports = mage