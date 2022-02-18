const axios = require("axios");
const { Temperament } = require("../../db");

const temperamentsTypes = async (req, res) => {
  // const result = await responseAPI

  try {
    const types = await result.data.results.map((type) => type.temperaments);
    const temperaments = types.flat();
    const typeTemperaments = [...new Set(temperaments)];

    typeTemperaments.forEach((temperament) => {
      Temperament.findOrCreate({
        where: { name: temperament },
      });
    });

    const allTemperaments = await Temperament.findAll();
    res.status(200).json(allTemperaments);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { temperamentsTypes };
