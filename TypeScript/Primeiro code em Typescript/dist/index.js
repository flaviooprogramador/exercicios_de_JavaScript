function sendSpace(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo Capit\u00E3o ").concat(spaceship.captain));
    return spaceship;
}
function acelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da  ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt("Insira o nome da nave a ser enviada");
var spaceshipCaptain = prompt("Insira o nome do capit\u00E3o da nave.");
var currentShip = sendSpace(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Insira a velocidade para qual deseja acelerar."));
acelerate(speed, currentShip);
