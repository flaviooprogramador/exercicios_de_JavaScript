const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada.`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado. Limite atingido`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado a tripulação`);
    }
}
function sebInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} Não pode ser enviada. Nave já está em missão. `);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada.Tripulação insuficiente.`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} enviado para Missão`);
    }
}
function firstMenuOption() {
    const name = prompt(`Qual o nome daa nave a ser registrado?`);
    const pilot = prompt(`Qual é o nome do piloto da ${name}?`);
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name} suporta?`));
    const confirmation = confirm(`Confirma o registro da nave ${name}\nLimite da tripulação ${crewLimit} e o nome do piloto ${pilot}`);
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
    function secondMenuOption() {
        const member = prompt(`Qual é o nome do tripulante`);
        const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`);
        const spaceship = findSpaceship(spaceshipName);
        if (spaceship) {
            const confirmation = confirm(`Confirma a conclusão de ${member} na Tripulação da ${spaceship.name}?`);
        }
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt(`Qual o nome da nave a ser enviada?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} Na missão?`);
        if (confirmation) {
            sebInMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    let list = `Naves Registrada: \n`;
    spaceships.forEach((spaceships) => {
        list += `
    Nave: ${spaceships.name}
    Piloto: ${spaceships.pilot}
    Em Missão? ${spaceships.inMission ? `Sim` : `Não`}
    Tamanho Máximo da Tripulação: ${spaceships.crewLimit}
    Tripulantes: ${spaceships.crew.length}`;
        spaceships.crew.forEach(member => {
            list += ` - ${member}\n`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
  1- Registrar uma nova nave
  2- Adicionar membro da tripulação
  3- Enviar nave em Missão
  4- Listar naves Registradas
  5- Encerrar`;
}
