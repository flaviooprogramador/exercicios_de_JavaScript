class character {
  constructor(name, lifePts, attackPts, defensePts){
    this.name = name
    this.lifePts = lifePts
    this.attackPts = attackPts
    this.defensePts = defensePts
  }

  attack(targetCharecter){
    targetCharecter.lifePts  -= this.attackPts - targetCharecter.defensePts
  }
}



module.exports = character