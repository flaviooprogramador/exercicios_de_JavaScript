const character = require("./character");

class Thief extends character {
  attack (targetCharecter){
    targetCharecter.lifePts -= (this.attackPts - targetCharecter.defensePts) * 2
  }
}

module.exports = Thief


