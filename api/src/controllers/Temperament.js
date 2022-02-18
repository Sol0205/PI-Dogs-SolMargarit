const { Temperament } = require("../db");
const responseAPI = require("../../response.json");

const temperamentsTypes = async (req, res) => {
  const result = await responseAPI;

  try {
    const types = await result.data.results.map((type) => type.temperaments);
    const temperaments = types.flat();
    const TypeTemperament = [...new Set(temperaments)];

    TypeTemperament.forEach((temperament) => {
      Temperament.findOrCreate({
        where: { name: temperament },
      });
    });

    const allTemperaments = await Temperament.findAll();
    res.status(200).json(allTemperaments);
  } catch (err) {
    res.json({ err });
    console.log(error);
  }
};

module.exports = { temperamentsTypes };
