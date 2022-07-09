const { City, PetColor, TypeAnimal } = require('../db/models');

async function infoController(req, res) {
  try {
    const city = await City.findAll();
    const petColor = await PetColor.findAll();
    const typeAnimal = await TypeAnimal.findAll();

    res.send({ city, petColor, typeAnimal });
  } catch (err) {
    res.send(err.message);
  }
}
module.exports = { infoController };
