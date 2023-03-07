(async () => {
  const Planet = require("./models/Planet");

  const newplanet = await Planet.create({
    name: "Terra",
    position: 3,
  });
  console.log(newplanet);
})();