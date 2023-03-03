(async () => {
const Planet = require("./models/Planet");

  const deletePlanets = await Planet.findByPk(2);
  
  console.log(deletePlanets)

  await deletePlanets.destroy();




  /*
  Mudar nome
  const updatePlanets = await Planet.findByPk(2)
  updatePlanets.name = "agua"
  await updatePlanets.save();


  console.log(updatePlanets)*/

 /* const newPlanet = await Planet.create({
   name: "Lua",
    position: 5,
    CRIA UM ELEMENTO NO BANCO DE DADOS
  });
  */

  /*const seePlanets = await Planet.findAll({
    where: {
      name: "Terra",
    }
  });
*/

})();